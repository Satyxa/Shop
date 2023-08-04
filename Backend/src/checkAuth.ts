import * as jwt from "jsonwebtoken"
import type { JwtPayload } from "jsonwebtoken"
import {Request, Response, NextFunction} from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
    const token = (req.headers.authorization || '').replace('Bearer ', '')
    if(token){
        try {
            const decoded = await jwt.verify(token, 'satyxaKey') as JwtPayload
            console.log(decoded)
            req.userId = decoded._id
            next()
        } catch (err){
            res.status(404).json({
                message: 'user is not found'
            })
        }
    } else {
        res.status(404).json({
            message: 'user is not found'
        })
    }
}