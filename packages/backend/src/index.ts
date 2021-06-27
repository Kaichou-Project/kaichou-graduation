import dotnev from 'dotenv'
// Load env variables
dotnev.config()

import express from 'express'
import cors from 'cors'
import routes from '@router'
import Logger from '@logger'
import morganMiddleware from '@middleware/morgan'
import initDB from 'db'
import { STATUS_DB_CONNECTED } from '@constant/general'
import { createServer } from 'https'
import { readFileSync } from 'fs'
import rateLimit from 'express-rate-limit'

const PORT = process.env.PORT ?? 5000
const DB_URI = process.env.DB_URI ?? ''
const DEBUG = process.env.DEBUG === 'TRUE' ? true : false
const KEY = process.env.KEY ?? 'privkey.pem'
const CERT = process.env.CERT ?? 'cert.crt'

async function startServer() {
  try {
    // this app
    const app: express.Application = express()

    // CORS middleware for allowing cross-origin requests
    app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

    // JSON middleware for parse all incoming request as JSON
    app.use(express.json())

    // Morgan middleware for logging HTTP request
    app.use(morganMiddleware)

    // Rate limiting middleware. Rate limits all requests by IP using in-memory table
    app.use(
      '/public/v1/create',
      rateLimit({
        windowMs: 60 * 60 * 1000, // 1 hour
        max: 10,
      })
    )

    // Apply the routes
    app.use('/public/v1', routes())

    // Init DB
    const dbInitStatus = await initDB(DB_URI)
    if (dbInitStatus === STATUS_DB_CONNECTED) {
      if (DEBUG) {
        Logger.debug(`DB successfully connected`)
      }
    }

    const options = {
      key: readFileSync(KEY),
      cert: readFileSync(CERT),
    }

    // Start the server
    // eslint-disable-next-line no-console
    createServer(options, app).listen(PORT, () => {
      Logger.info(`🚀 listening on http://localhost:${PORT}`)
    })
  } catch (error) {
    Logger.error(error)
  }
}

// Start this apps
startServer()
