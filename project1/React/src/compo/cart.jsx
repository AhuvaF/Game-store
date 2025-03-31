import { useContext, useEffect, useState } from "react";
import mycont from "../myContex";
import { chackIfCustomerIsExists } from "../axios/customeraxois";
import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteGame } from "../axios/gameaxios";

export const Cart = () => {
    let navigate = useNavigate();
    let userdtl = useContext(mycont).userdtl;
    let cart = useContext(mycont).cart;
    let setcart = useContext(mycont).setcart;
    const [sum, setsum] = useState(0);
    const [noExists, setnoExists] = useState(false);


    const AddNum = (id) => {
        setcart(prev => prev.map(x => x.gameId === id ? { ...x, gameAmount: x.gameAmount + 1 } : x));
    };

    const DefNum = (id) => {
        setcart(prev => prev.map(x => x.gameId === id && x.gameAmount > 1 ? { ...x, gameAmount: x.gameAmount - 1 } : x));
    };

    const totalPrice = () => {
        setsum(cart.reduce((total, item) => total + (item.gamePrice * item.gameAmount), 0));
    };
    useEffect(() => {
        totalPrice();
    }, [cart]);

    const finishToBuy = async () => {
        if (!userdtl || !userdtl.custName || !userdtl.custPassWord) {
            setnoExists(true);
        } else {
            let y = await chackIfCustomerIsExists(userdtl.custName, userdtl.custPassWord);
            if (y.data) {
                debugger
                navigate(`/Finish/${sum}`);
            } else {
                alert('bad');
            }
        }
    };

    const deleteItem = async (id) => {
        debugger
        // let a = (await deleteGame(id)).data
        // if (a)
            setcart(prev => prev.filter(x => x.gameId !== id))
    }

    return (
        <>
            <div className="container my-5">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>קוד משחק</th>
                            <th>שם משחק</th>
                            <th>מחיר</th>
                            <th>כמות</th>
                            <th>מחיקה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((x, i) => (
                            <tr key={i}>
                                <td>{x.gameId}</td>
                                <td>{x.gameName}</td>
                                <td>{x.gamePrice}₪</td>
                                <td>
                                    {x.gameAmount}
                                    <button className="btn btn-secondary btn-sm mx-2" onClick={() => AddNum(x.gameId)}>+</button>
                                    <button className="btn btn-secondary btn-sm" onClick={() => DefNum(x.gameId)}>-</button>
                                </td>
                                <td>
                                    <img
                                        src={`https://localhost:7042/${x.gameImg}`} alt={x.gameName} className="img-thumbnail img-fluid"
                                        style={{ maxWidth: "100px", height: "auto" }}
                                    />
                                </td>

                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteItem(x.gameId)}> מחיקה</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                {(userdtl && userdtl.custName && userdtl.custPassWord) && 
                    <>
                        <div className="text-end">
                            <p className="fs-4">מחיר סופי: {sum}₪</p>
                            <button className="btn btn-primary btn-lg" onClick={finishToBuy}>סיום קניה</button>
                        </div>
                    </>

                }


                {noExists && (
                    <div className="mt-3">
                        <h1> הירשם או התחבר לפני ביצוע ההזמנה</h1>
                        <button className="btn btn-success me-2" onClick={() => navigate('/SignUp')}>הרשמה</button>
                        <button className="btn btn-info" onClick={() => navigate('/Mylogin')}>התחברות</button>
                    </div>
                )}
            </div>
        </>
    );
};
