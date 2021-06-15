import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT ?? 5000

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`🚀 listening on port ${PORT}!`))
