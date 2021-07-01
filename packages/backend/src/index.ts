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
const NODE_ENV = process.env.NODE_ENV

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

    // options for https server
    const options = {
      key: readFileSync(KEY),
      cert: readFileSync(CERT),
    }

    // Start the server
    if (NODE_ENV === 'development') {
      // dev mode use http server
      app.listen(PORT, () => {
        Logger.info(
          `Backend service listening on http://localhost:${PORT} in ${NODE_ENV} mode`
        )
      })
    } else if (NODE_ENV === 'production') {
      // prod mode use https server
      createServer(options, app).listen(PORT, () => {
        Logger.info(
          `Backend service listening on https://localhost:${PORT} in ${NODE_ENV} mode`
        )
      })
    }
  } catch (error) {
    Logger.error(error)
  }
}

// Start this apps
startServer()
