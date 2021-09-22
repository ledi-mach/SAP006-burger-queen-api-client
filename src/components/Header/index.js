/* eslint-disable no-empty-pattern */
import React from "react";
<<<<<<< HEAD
import Navigation from "../Navigation/navigation";
=======
// import Navigation from "../Navigation/navigation";
import orderImg from '../../assets/images/orders.png';
>>>>>>> 63205357a677a0acf378205297db968bd1638eef
import "./index.css";
import "./responsive.css";

export function Header() {
    return (
<<<<<<< HEAD
       <header className="header">

<Navigation />

            <span className="spanMenu">
            <h1 className="headerH1">MENU</h1>
            </span>
=======
        <header className="header">

            {/* <Navigation /> */}
            <div className="divHeader">
                <div className="divHeaderH1">
                    <h1 className="headerH1">MENU</h1>
                </div>
                <div className="divBtnOrder">
                    <button className="btnOrders"><img className="orderImg" src={orderImg} alt="orders" /></button>
                </div>
            </div>
>>>>>>> 63205357a677a0acf378205297db968bd1638eef

        </header>
    )
}
export function HeaderKitchen({

}) {
    return (
        <header className="header">
            <h1 className="headerH1">PEDIDOS</h1>
        </header>
    )
}