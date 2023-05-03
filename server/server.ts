import { join } from 'node:path'
import express from 'express'
import { resolve } from 'node:path'

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.get('*', (req, res) => {
  res.sendFile(resolve('server/public/index.html'))
})

export default server
