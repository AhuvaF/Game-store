import axios from "axios"

const url="https://localhost:7042/api/Customer/"

// בדיקה אם לקוח קיים או לא
export const chackIfCustomerIsExists = (name, passw) => {
  return axios.get(`${url}chackIfCustomerIsExists`, {
    params: { name, password: passw },  // שולח את הפרמטרים כ-params ב-query string
  });
};


//הוספת לקוח
// export const addCustomer=(cust)=>{
//     return axios.put(`${url}addCustomer`,cust)
// }
export const addCustomer = (cust) => {
    return axios.post(`${url}addCustomer`, cust, {
        headers: {
            'Content-Type': 'application/json',  // חשוב לוודא שהמידע נשלח כ-JSON
        }
    })
}
//קבלת הID של שלוח
export const getIdOfCust=(name,p)=>{
  return axios.get(`${url}getIdOfCust`, {
    params: { name, password: p },  // שולח את הפרמטרים כ-params ב-query string
  });
};

