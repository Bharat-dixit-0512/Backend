import dotenv from "dotenv";
import connectDB from './db/index.js'
dotenv.config({
    path:'C:/Users/dixit/Desktop/Backend/.env'
});

connectDB()





/*
import express from 'express';
const app=express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',()=>{
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP is Listen on PORT: ${process.env.PORT} `)
        })


    } catch (error) {
        console.error('ERROR: ', error);
        throw error;
    }
})()

*/