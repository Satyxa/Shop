import mongoose from "mongoose";

const GoodsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    photo: {type: String, require: true},
    size: {type: Array, require: true},
    color: {type: Array , require: true},
    morePhotos: {type: Array, require: true},
    category: {type: String, require: true},
    sex: {type: String, require: true},
    age: {type: String, require: true},
    orders: {type: Number, default: 0},
    views: {type: Number, default: 0},
}, {timestamps: true})

export default mongoose.model('Goods', GoodsSchema)