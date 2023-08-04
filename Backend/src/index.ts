import express from 'express'
import mongoose from "mongoose";
import {goodsCreateValidation, registerValidation} from "./validation.js";
import UsersMethods from './contols/UserController.js'
import GoodsMethods from './contols/GoodsController.js'
import fileUpload from 'express-fileupload'
import checkAuth from './checkAuth.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express()
const DB = 'mongodb+srv://satyxa1919:m1Satyxa2on@clusterblog.jvi7su7.mongodb.net/shop?retryWrites=true&w=majority'
const port = 1002
app.use(express.static(path.resolve(__dirname, 'static',)))
app.use(express.json())
app.use(cors())
app.use(fileUpload({}))
mongoose
    .connect(DB)
    .then(r => console.log('DB Ok'))
    .catch(err => console.log(err))

app.post('/auth/register', registerValidation, UsersMethods.register)
app.post('/auth/login', UsersMethods.login)
app.get('/auth/me', checkAuth, UsersMethods.getMe)

app.post('/goods', goodsCreateValidation, GoodsMethods.create)
app.get('/goods', GoodsMethods.getAll)
app.get('/goods/:id', GoodsMethods.getOne)


app.listen(port, () => {
    try {
        console.log('server 1002 is Ok')
    } catch (err) {
        console.log(err)
    }
})