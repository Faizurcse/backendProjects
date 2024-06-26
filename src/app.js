import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

// middle-ware
app.use(express.json({limit:"16kb"})) // for json data
app.use(express.urlencoded({extended: true ,limit:"16kb"})) // for url data
app.use(express.static("public")) // use for pdf,imges

// cookies data type ko lega
app.use(cookieParser())

export {app}