const dotenv = require('dotenv')
dotenv.config()

const next = require('next')
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const redirect = express()

const options = {
  key: fs.readFileSync(process.env.KEY),
  cert: fs.readFileSync(process.env.CERT),
}

app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  redirect.all('*', (req, res) => {
    res.redirect(process.env.REDIRECT_HOST + req.url)
  })

  http.createServer(redirect).listen(process.env.HTTP_PORT)
  https.createServer(options, server).listen(process.env.HTTPS_PORT)
})
