import GoodsModel from "../models/GoodsModel.js";
import * as uuid from 'uuid'
import path from 'path'
import {fileURLToPath} from 'url';
import {Request, Response} from "express";
import config from 'config'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export default {
    create: async (req: Request, res:Response) => {
        try {
            let imgArr:Array<string> = []
            const {title, description, price, views, size, color, category, sex, age} = req.body
            const {photo, morePhotos} = req.files
            let fileName = uuid.v4() + '.jpg'
            await photo.mv(path.resolve(__dirname, '../../', 'static', fileName))
            await morePhotos.map((pic) => {
                const fileName = uuid.v4() + '.jpg'
                pic.mv(path.resolve(__dirname, '../../', 'static', fileName))
                pic = fileName
                imgArr.push(pic)
            })
            const doc = await GoodsModel.create({
                title, description, price, photo: fileName, morePhotos: imgArr, views, size, color, category, sex, age
            })
            const item = await doc.save()

            res.json(item)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'error in goodsCreator' + err
            })
        }
    }, getAll: async (req: Request, res:Response) => {
        try {
            const goods = await GoodsModel.find()
            const page = req.params.page || 1
            const perPage = 9
            const goodsPortion = await GoodsModel.find().skip(perPage * page - perPage).limit(perPage)
            res.json(goods)
        } catch (err) {
            console.log(err)
            res.status(500).json({
                message: 'get goods in catch'
            })
        }
    }, getOne: async (req: Request, res:Response) => {
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
    },}
