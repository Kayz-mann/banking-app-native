const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const mongoose = require('mongoose')
const config = require('config')
const morgan = require('morgan')
const dotenv = require('dotenv')


// init app
const app = express()


// middleware
app.use(express.json())

// load env variables
dotenv.config({path: './config.env'})

const server = http.createServer(app)
const io = socketio(server).sockets

// dev logging
if(process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

// database config
const db = config.get('mongoURI')

// connect to DB
mongoose.connect(db, 
    {useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}).then(() => console.log(`MongoDb connected`))
.catch((err) => console.log(err))

app.get("/", (req, res) => res.send("We are on homepage"))
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))

const port = process.env.PORT || 5000;
server.listen(port, () => `Server started on port ${port}`)


