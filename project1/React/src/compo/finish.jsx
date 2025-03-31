import { useContext, useEffect, useState } from "react";
import mycont from "../myContex";
import { AddBuyerDetail } from "../axios/buyaxios";
import { getIdOfCust } from "../axios/customeraxois";
import { useParams } from "react-router-dom";
import { AddSaleDetail } from "../axios/saleDetailaxios";

export const Finish = () => {

    let sum = useParams().sum;
    let userdtl = useContext(mycont).userdtl;
    let setMybuyId=useContext(mycont).setMybuyId
    let setuserdtl = useContext(mycont).setuserdtl;
    let cart = useContext(mycont).cart;

    const [customerDetails, setCustomerDetails] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        creditCardNumber: "",
        expirationDate: "",
        cvv: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
      };
    
      const checkCredit =(num)=>{
        if(num.lenght==16)
          setCustomerDetails({...customerDetails,creditCardNumber:num})
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Customer Details Submitted: ", customerDetails);
      };
    
        const TheFInish = async () => {
         
            // קבלת קוד הלקוח שמבצע את הקניה
            let custId = (await getIdOfCust(userdtl.custName, userdtl.custPassWord)).data;
            let buyerDetail = {
                "buyId": 0,
                "custId": custId,
                "buyDaty": new Date().toISOString(),
                "buySum": sum
            };
            // שמירת הקניה בטבלת הקניות
            let buyId = (await AddBuyerDetail(buyerDetail)).data;
            if (buyId){
              alert('yes!');
              // setMybuyId(buyId)
            } 
            else alert('no!');
            debugger;
            // שמירה בטבלת פרטי קניה
            let a = (await AddSaleDetail(cart, buyId)).data;
            if (a) alert('הקניה הושלמה בהצלחהת מיד תקבל אישור למייל שמעודכן במערכת');
            else alert('no');
        };

       
 // תלות ריקה מפעילה את האפקט פעם אחת בלבד

    return <>

<div className="container mt-5">
      {/* <h1 className="text-center mb-4">פרטי קונה</h1> */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">הזן את פרטי הקונה</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">שם מלא</label>
                  <input type="text" className="form-control" id="fullName" name="fullName" value={customerDetails.fullName} onChange={(e)=> setCustomerDetails({...customerDetails,fullName:e.target.value})} placeholder="שם מלא" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">דוא"ל</label>
                  <input type="email" className="form-control" id="email" name="email" value={customerDetails.email}  onChange={(e)=> setCustomerDetails({...customerDetails,email:e.target.value})} placeholder="דואל" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">טלפון</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={customerDetails.phone}  onChange={(e)=> setCustomerDetails({...customerDetails,phone:e.target.value})} placeholder="טלפון" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">כתובת</label>
                  <textarea className="form-control" id="address" name="address" value={customerDetails.address}  onChange={(e)=> setCustomerDetails({...customerDetails,address:e.target.value})} rows="3" placeholder="הזן כתובת" required></textarea>
                </div>
                <h4 className="text-center mb-4">פרטי כרטיס אשראי</h4>
                <div className="mb-3">
                  <label htmlFor="creditCardNumber" className="form-label">מספר כרטיס אשראי</label>
                  <input type="text" className="form-control" id="creditCardNumber" name="creditCardNumber" value={customerDetails.creditCardNumber} onChange={(e)=>checkCredit(e.target.value)} placeholder="XXXX-XXXX-XXXX-XXXX" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="expirationDate" className="form-label">תוקף הכרטיס</label>
                  <input type="month" className="form-control" id="expirationDate" name="expirationDate" value={customerDetails.expirationDate} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" value={customerDetails.cvv} onChange={handleChange} placeholder="CVV" required />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary" onClick={()=>TheFInish()}> שלח פרטים וסיום קניה </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
          
             

            </>;
}


