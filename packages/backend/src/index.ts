import express from 'express'
import cors from 'cors'
import routes from './route'
import Logger from './logger'
import morganMiddleware from './middlewares/morgan.middleware'

// this backend service Port
const PORT = process.env.PORT ?? 5000

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

// Start the server
// eslint-disable-next-line no-console
app.listen(PORT, () =>
  Logger.debug(`🚀 listening on http://localhost:${PORT}!`)
)
