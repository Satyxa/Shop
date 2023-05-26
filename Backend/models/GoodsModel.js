import mongoose from "mongoose";

const GoodsSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    photo: String,
    tags: {type: Array, default: []},
    views: {type: Number, default: 0},
    size: {type: Array, default: [], require: true},
    color: {type: Array, default: [] , require: true}
}, {timestamps: true})

export default mongoose.model('Goods', GoodsSchema)