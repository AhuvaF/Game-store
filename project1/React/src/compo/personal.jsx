import { useContext, useEffect, useState } from "react"
import mycont from "../myContex"
import { GetAllSalesDetails } from "../axios/saleDetailaxios"
import { GetAllBuyersDetail } from "../axios/buyaxios"
import { getIdOfCust } from "../axios/customeraxois"

export const Person = () => {
    debugger
    let userdtl = useContext(mycont).userdtl
   
    //האם יש לו רשימות בטבלת קניות
    const [showbuys, setshowbuys] = useState(false)
    //שמירת הרשימה 
    const [buysList, setbuysList] = useState({})
    //שמירת רשימת פרטי הקניה שהלקוח מעוניין לראות
    const [detailList, setdetailList] = useState({})
    //כדי לבדוק האם להראות את זה
    const [showdtl, setshowdtl] = useState(false)
    //בדיקה האם המשתמש קיים 
    const [conect, setconect] = useState(false)

    const checkIfConect = () => {
        if (!userdtl || !userdtl.custName || !userdtl.custPassWord) {
            alert('בבקשה התחבר ')
        }
        else {
            setconect(true)
            FindYourDetail()
        }
    }

    const FindYourDetail = async () => {

        //קבלת הID של הלקוח
        let userId = (await getIdOfCust(userdtl.custName, userdtl.custPassWord)).data
        // קבלת כל הנתונים  מטבלת הקניות בכללית
        let detailas = (await GetAllBuyersDetail()).data
        let myBuy = detailas.filter(y => y.custId === userId)
        if (myBuy) {
            setshowbuys(true)
            setbuysList(myBuy)
        }
    }
    useEffect(() => {
        checkIfConect()
    }, [])

    //פונקציה לקבלת כל נתוני פרטי הקניה
    const forMoreDetail = async (buyid) => {
        let details = (await GetAllSalesDetails()).data
        if (details) {
            let mydetails = details.filter(x => x.buyId === buyid)
            setdetailList(mydetails)
            setshowdtl(true)
        }
    }

    return <>
        <h1>personal cart</h1>

        {showbuys && <>
            <div className="container my-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>סכום מלא </th>
                            <th>תאריך</th>
                            <th>קוד לקוח</th>
                            <th>קוד קניה</th>
                            <th>פרטים נוספים</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buysList.map((x, i) => <tr key={i} >
                            <td>{x.buySum}</td>
                            <td>{x.buyDaty}</td>
                            <td>{x.custId}</td>
                            <td>{x.buyId}</td>
                            <td><button onClick={() => forMoreDetail(x.buyId)}>לחץ לפרטי הקניה</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
        }

        {showdtl &&
            <div className="container my-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>כמות</th>
                            <th>משחק </th>
                            <th>קוד קונה </th>
                            <th>קוד קניה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {detailList.map((x, i) => <tr key={i}>
                            <td>{x.saleAmount}</td>
                            <td>{x.nameGame}</td>
                            <td>{x.buyId}</td>
                            <td>{x.saleCode}</td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        }

    </>

}