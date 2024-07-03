// import express from 'express'
// import { Server as SocketServer } from "socket.io";
// import http from "http";
// import cors from 'cors'
// import { config } from './config.js'

const express = require('express')
const { Server: SocketServer } = require('socket.io')
const http = require('http')
const cors = require('cors')
const { config } = require('./config.js')

const app = express()

app.use(cors({ origin: "*" }))

const server = http.createServer(app)
const io = new SocketServer(server, { cors: { origin: '*' } })


io.on('connection', socket => {

    socket.on('message', ( message) => {
        console.log('message: ' + message)
        // socket.broadcast.emit('server', 'authorizeserver')
        socket.broadcast.emit('server', 'authorizeserver')
    })

})


server.listen(config.port)
console.log('server started on ', config.port)