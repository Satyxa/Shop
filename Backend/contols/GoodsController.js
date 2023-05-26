import GoodsModel from "../models/GoodsModel.js";
import * as uuid from 'uuid'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default {
    create: async (req, res) => {
        try {
            const {title, description, price, tags, views, size, color} = req.body
            const {photo} = req.files
            let fileName = uuid.v4() + '.jpg'
            await photo.mv(path.resolve(__dirname, '..', 'static', fileName))
            const doc = await GoodsModel.create({
                title, description, price, photo: fileName, tags, views, size, color
            })
            const item = await doc.save()

            res.json(item)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'error in goodsCreator'
            })
        }
    },

    getAll: async (req, res) => {
        try {
            const goods = await GoodsModel.find()
            res.json(goods)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'get goods in catch'
            })
        }
    },

    getOne: async (req, res) => {
        try {
           const goodsId = req.params.id
            const item = await GoodsModel.findOne({_id: goodsId})
            res.json(item)
        } catch (err) {
            console.log(err)
            res.status(400).json({
                message: 'error in getOne goods'
            })
        }
    }
}
