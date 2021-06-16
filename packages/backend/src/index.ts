import express from 'express'
import cors from 'cors'
import routes from '@router'
import Logger from '@logger'
import morganMiddleware from '@middleware/morgan'
import dotnev from 'dotenv'
import initDB from 'db'
import { STATUS_DB_CONNECTED } from '@constant/general'

// Load env variables
dotnev.config()
const PORT = process.env.PORT ?? 5000
const DB_URI = process.env.DB_URI ?? ''

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

    // Apply the routes
    app.use('/public/v1', routes())

    // Init DB
    const dbInitStatus = await initDB(DB_URI)
    if (dbInitStatus === STATUS_DB_CONNECTED) {
      Logger.debug(`DB successfully connected`)
    }

    // Start the server
    // eslint-disable-next-line no-console
    app.listen(PORT, () =>
      Logger.debug(`🚀 listening on http://localhost:${PORT}`)
    )
  } catch (error) {
    Logger.error(error)
  }
}

// Start this apps
startServer()
