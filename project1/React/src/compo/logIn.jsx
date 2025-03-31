import React, { useContext, useState } from "react";
import mycont from "../myContex";
import { addCustomer, chackIfCustomerIsExists } from "../axios/customeraxois";
import { Link, Outlet, useNavigate } from "react-router-dom";

export const LogIn = () => {

    let navigate = useNavigate()
    let setcurrentUser = useContext(mycont).setcurrentUser
    let setifManager = useContext(mycont).setifManager
    const [noExists, setnoExists] = useState(false)
    let setuserdtl = useContext(mycont).setuserdtl
    let userdtl = useContext(mycont).userdtl

    const f1 = async () => {

        let y = await chackIfCustomerIsExists(userdtl.custName, userdtl.custPassWord)
        if (y.data == true) {
            if (userdtl.custName == 'manager' && userdtl.custPassWord == '1234') {
                setcurrentUser('manager')
                setifManager(true)
            }
            else {
                setcurrentUser(userdtl.custName)
            }
        }
        else {
            setnoExists(true)
        }

    }
    return (
        <div className="container mt-5">
            {/* <h1 className="text-center mb-4">התחברות</h1> */}

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">שלום, בבקשה התחבר</h4>

                            <div className="mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="שם משתמש"
                                    onChange={(e) => setuserdtl({ ...userdtl, custName: e.target.value })}
                                />
                            </div>

                            <div className="mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="סיסמא"
                                    onChange={(e) => setuserdtl({ ...userdtl, custPassWord: e.target.value })}
                                />
                            </div>

                            <div className="d-grid gap-2">
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => f1()}
                                >
                                    התחבר
                                </button>
                            </div>

                            {noExists && (
                                <div className="alert alert-danger mt-3" role="alert">
                                    אינך רשום במערכת. <br />
                                    <button 
                                        className="btn btn-link" 
                                        onClick={() => navigate('/SignUp')}
                                    >
                                        הירשם כאן
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
