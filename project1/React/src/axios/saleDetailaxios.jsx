import axios from "axios"

const url='https://localhost:7042/api/SaleDetail/'

export const GetAllSalesDetails=()=>{
    return axios.get(`${url}getAllSaleDetail`)
}

export const AddSaleDetail = (cart, id) => {
    return axios.post(`${url}AddSaleDetail/${id}`,  cart, id );
}
