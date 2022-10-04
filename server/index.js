require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const router = require("./router/index")
const errorMiddleware = require("./middlewares/error-middleware")


const PORT = process.env.PORT || 5000
const app = express()

const corsOptions ={
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api", router)
app.use(errorMiddleware)


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`SERVER STARTED ON PORT ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()