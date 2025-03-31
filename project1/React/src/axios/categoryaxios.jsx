import axios from "axios"

const url="https://localhost:7042/api/Category/"
//getAll פונקציית צפייה בכל הקטגוריות 
export const getAllCategory=()=>{
    return axios.get(`${url}getAll`)
}
//getCategoryById   ID פונקציית צפייה בקטגוריה לפי   
export const getAllCategotyById=()=>{
    return axios.get(`${url}getCategoryById`)
}

//updateCategory  פונקציית עדכון לפי מזהה ואיבר חדש  
export const updateCategory=(id,obj)=>{
    return axios.put(`${url}updateCategory/${id}`,obj)
}
//delete   פונקציית מחיקת  קטגוריה ש  
export const deleteCategory=(del)=>{
    return axios.delete(`${url}delete/${del}`)
}
