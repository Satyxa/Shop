import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {type: String, require:true, unique:true},
    login: {type: String, require:true, unique:true},
    password: {type: String, require:true},
    cart: {type: Array, require:true, default: []},
    sex: {type: String, require:true, default: 'woman'}
})

export default mongoose.model('User', UserSchema)