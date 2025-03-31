import React, { useContext, useState } from "react";
import { addCustomer, chackIfCustomerIsExists } from "../axios/customeraxois";
import mycont from "../myContex";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  let navigate = useNavigate();
  let setcurrentUser = useContext(mycont).setcurrentUser;
  const [YesExists, setYesExists] = useState(false);
  let setifManager = useContext(mycont).setifManager;

  let setuserdtl = useContext(mycont).setuserdtl;
  let userdtl = useContext(mycont).userdtl;

  const f1 = async () => {
    let y = await chackIfCustomerIsExists(userdtl.custName, userdtl.custPassWord);
    if (y.data == true) {
      setYesExists(true);
    } else {
      setYesExists(false);
      await addCustomer(userdtl);
      setcurrentUser(userdtl.custName);
    }
  };

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center mb-4">הרשמה</h1> */}

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">הירשם למערכת</h4>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="שם משתמש"
                  onChange={(e) =>
                    setuserdtl({ ...userdtl, custName: e.target.value }, { ...userdtl, custId: '0' })
                  }
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

              {/* <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="פרטי אשראי"
                  onChange={(e) => setuserdtl({ ...userdtl, custCreditDetails: e.target.value })}
                />
              </div> */}

              <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={() => f1()}>
                  הרשמה
                </button>
              </div>

              {YesExists && (
                <div className="alert alert-danger mt-3" role="alert">
                  הינך רשום כבר במערכת. <br />
                  <button className="btn btn-link" onClick={() => navigate('/Mylogin')}>
                    התחברות
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
