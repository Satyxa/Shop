import {body} from "express-validator";

export const registerValidation = [
    body('email', 'email incorrect').isEmail(),
    body('login', 'login incorrect').isLength({max: 20}),
    body('password', 'password incorrect').isLength({min: 5}),
]

export const goodsCreateValidation = [
    body('title', '').isString(),
    body('description', '').isString(),
    body('price', '').isNumeric(),
    body('photo', '').optional(),
]