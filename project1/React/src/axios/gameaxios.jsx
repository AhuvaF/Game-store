import axios from "axios"

const url="https://localhost:7042/api/GameControllers/"
//קבלת כל המשחקים
export const getAllGames=()=>{
    return axios.get(`${url}getAllGames`)
}
//קבלת כל המשחקים לפי ID
export const GetGameById=(id)=>{
    return axios.get(`${url}GetGameById/${id}`)
}
///עדכון משחק
export const UpdateGame=(gameId,newitem)=>{
    return axios.put(`${url}UpdateGame/${gameId}`,newitem)
}

export const AddGame = (game) => {
    return axios.put(`${url}addGame`, game, {
        headers: {
            'Content-Type': 'application/json' // חשוב לציין את סוג התוכן כ-JSON
        }
    });
}
///מחיקת משחק
export const deleteGame=(gameId)=>{
    return axios.delete(`${url}deleteGame/${gameId}`)
}
