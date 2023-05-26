import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export default {
    register: async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                message: 'Ошибка валидации',
                err: errors
            })
        }
        try {
            const {email, login, password} = req.body
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password, salt)
            const doc = new UserModel({
                email, login, password: hash
            })

            const user = await doc.save()

            const token = jwt.sign({
                _id: user._id
            }, 'satyxaKey')
            console.log(token)
            res.status(200).json({user, token})
        } catch (err){
            console.log(err)
            res.status(500).json('someone error in register')
        }
    },

    login: async (req, res) => {
        try {
            const user = await UserModel.findOne({email: req.body.email})
            if (!user){
                return res.status(400).json({
                    message: 'User is not exist'
                })
            }
            const password = req.body.password
            const isValidPassword = await bcrypt.compare(password, user._doc.password)
            if (!isValidPassword){
                return res.status(400).json({message: 'Incorrect password'})
            }

            const token = jwt.sign({
                _id: user._id
            }, 'satyxaKey')

            res.status(200).json({user,token,message: "OK"})
        }catch (err){
            console.log(err)
            res.status(500).json('someone error in register')
        }
    },

    getMe: async (req, res) => {
        try {
            const user = await UserModel.findById(req.userId)
            const {password, ...userData} = user._doc
            res.json(userData)
        } catch (err) {
            console.log(err)
            return res.status(404).json({
                message: 'user is not authorize'
            })
        }
    }
}