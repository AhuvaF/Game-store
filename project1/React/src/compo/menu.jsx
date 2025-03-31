
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import mycont from "../myContex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Menu = () => {
  const { currentUser, ifManager } = useContext(mycont);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <i className="bi bi-shop"></i> חנותי
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">

              <Link className="nav-link" to="Mylogin">
                <i className="bi bi-box-arrow-in-right"></i> התחברות
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="SignUp">
                <i className="bi bi-person-plus"></i> הרשמה
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Myhome">
                <i className="bi bi-house"></i> דף הבית
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Cart">
                <i className="bi bi-cart"></i> סל קניות
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="Person">
                <i className="bi bi-person"></i> איזור אישי
              </Link>
            </li>

            {ifManager && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="ManagerGame">
                    <i className="bi bi-controller"></i> ניהול משחקים
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="ManagerCategory">
                    <i className="bi bi-tags"></i> ניהול קטגוריות
                  </Link>
                </li>
              </>
            )}
          </ul>
          <span className="navbar-text text-light">
            <i className="bi bi-person-circle"></i> {currentUser} </span>
        </div>
      </div>
    </nav>
  );
};
