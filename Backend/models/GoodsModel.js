import mongoose from "mongoose";

const GoodsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    photo: String,
    views: {type: Number, default: 0},
    size: {type: Array, require: true},
    color: {type: Array , require: true},
    morePhotos: {type: Array},
    category: {type: String, require: true},
    sex: {type: String, require: true},
    age: {type: String, require: true},
    orders: {type: Number, default: 0}
}, {timestamps: true})

export default mongoose.model('Goods', GoodsSchema)