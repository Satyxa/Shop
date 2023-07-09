import GoodsModel from "../models/GoodsModel.js";
import * as uuid from 'uuid'
import path from 'path'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default {
    create: async (req, res) => {
        try {
            let imgArr = []
            const {title, description, price, views, size, color, category, sex, age} = req.body
            const {photo, morePhotos} = req.files
            let fileName = uuid.v4() + '.jpg'
            await photo.mv(path.resolve(__dirname, '..', 'static', fileName))
            await morePhotos.map(p => {
                const test = uuid.v4() + '.jpg'
                p.mv(path.resolve(__dirname, '..', 'static', test))
                p = test
                imgArr.push(p)
            })
            const doc = await GoodsModel.create({
                title, description, price, photo: fileName, morePhotos: imgArr, views, size, color, category, sex, age
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
    },
    getgoddstest: async (req, res) => {
        try {
            debugger
            const { page, limit } = req.query
            const payments = await GoodsModel.find().skip(page * limit).limit(limit).exec();
            res.json(payments);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    getGoodsPortion: async (req, res) => {
        try {
            console.log('privet')
        } catch (err){
            console.log('getGoodsPortion in catch' + err)
        }
    }
}
