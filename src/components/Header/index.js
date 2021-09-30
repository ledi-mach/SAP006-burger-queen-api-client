/* eslint-disable no-empty-pattern */
import React from "react";
import orderImg from '../../assets/images/orders.png';
import "./index.css";
import "./responsive.css";


export function Header() {
    return (
        <header className="header">
            {/* <Navigation /> */}
            <div className="divHeader">
                <div className="divHeaderH1">
                    <h1 className="headerH1">MENU</h1>
                </div>
                <div className="divBtnOrder">
                    <button className="btnOrders">
                        <img className="orderImg" src={orderImg} alt="orders" />
                    </button>
                </div>
            </div>
        </header>
    )
}
export function HeaderKitchen({
}) {
    return (
        <header className="header">
            <h1 className="headerH1">COZINHA</h1>
        </header>

    )
}
export function HeaderPedidos({
}) {
    return (
        <header className="header">
            <h1 className="headerH1">PEDIDOS</h1>
        </header>
    )
}