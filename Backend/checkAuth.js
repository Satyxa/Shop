import jwt from 'jsonwebtoken'

export default async (req, res, next) => {
    const token = (req.headers.authorization || '').replace('Bearer ', '')
    if(token){
        try {
            const decoded = await jwt.verify(token, 'satyxaKey')
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