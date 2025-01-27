import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const port = process.env.PORT || 3000 
import connectDB from './db/index.js'
const app = express()

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`port is ${port}`)
    })
})
.catch((err)=>{
    console.log(`connection failed :( ${err}`)
})