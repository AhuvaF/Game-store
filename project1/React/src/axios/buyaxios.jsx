import axios from "axios"

const url='https://localhost:7042/api/Buy/'

//קבלת כל הנתונים בטבלת הקניות
export const GetAllBuyersDetail=()=>{
    return axios.get(`${url}getAllCart`)
}
//הוספת לקוח שקנה לטבלת קנייה
export const AddBuyerDetail=(obj)=>{
    debugger
    return axios.post(`${url}Save`,obj, {
        headers: {
            'Content-Type': 'application/json',  // חשוב לוודא שהמידע נשלח כ-JSON
        }
    })
}


