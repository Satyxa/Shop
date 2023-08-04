import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:1002/'
})

export const Data = {
    getGoods: async(currentPage) => await instance.get(`goods?page=${currentPage}&limit=9`)
}