import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home"
import { LogIn } from "./logIn"
import { Menu } from "./menu"
import { GameDetail } from "./gameDetail";
import { ManagerGame } from "./managerGame";
import { SignUp } from "./signUp";
import { ManagerCategory } from "./managerCategory";
import { Cart } from "./cart";
import { Finish } from "./finish";
import { AddToCart } from "./addToCart";
import { Person } from "./personal";

export const Routing=()=>{
    return <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Mymenu" element={<Menu></Menu>}></Route>
        <Route path="Mylogin" element={<LogIn></LogIn>}></Route>
        <Route path="SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="AddToCart" element={<AddToCart></AddToCart>}></Route>
        <Route path="Cart" element={<Cart></Cart>}></Route>
        <Route path="Person" element={<Person></Person>}></Route>
        <Route path="Finish/:sum" element={<Finish></Finish>}></Route>

        <Route path="Myhome" element={<Home></Home>}></Route>

        <Route path="ManagerGame" element={<ManagerGame></ManagerGame>}></Route>
        <Route path="ManagerCategory" element={<ManagerCategory></ManagerCategory>}></Route>
        <Route path="GameDetail" element ={<GameDetail></GameDetail>}></Route>
    </Routes>
}

