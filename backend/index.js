import { PORT, MONGODBURL } from "./config.js";
import mongoose from "mongoose";
import express from 'express';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

app.use('/books',booksRoute)

mongoose.connect(MONGODBURL)
.then(()=> {
    console.log("Database connection successfull")
    app.listen(PORT,()=> {
        console.log(`App listening to PORT : ${PORT}`)
    })
})
.catch((err)=> {
    console.log(err)

})