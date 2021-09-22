/* eslint-disable no-empty-pattern */
import React from "react";
import Navigation from "../Navigation/navigation";
import "./index.css";

export function Header() {
    return (
       <header className="header">

<Navigation />

            <span className="spanMenu">
            <h1 className="headerH1">MENU</h1>
            </span>

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