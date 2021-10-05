/* eslint-disable no-empty-pattern */
import React from "react";
import { useHistory } from "react-router-dom"
import orderImg from '../../assets/images/orders.png';
import { MdArrowBack } from "react-icons/md";
import "./index.css";
import "./responsive.css";

export function Header({
    showModal
}) {
    const history = useHistory()
    function navigateToPedidos() {
        history.push('/pedidos');
    }
    return (
        <header className="header">
            <div className="divHeader">
                <Button type="button" className="backMenu"
                    onClick={navigateToPedidos}>
                    <MdArrowBack />
                    PEDIDOS</Button>
                <div className="divHeaderH1">
                    <h1 className="headerH1">MENU</h1>
                </div>
                <div className="divBtnOrder">
                    <button className="btnOrders" onClick={() => showModal(true)}>
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
    const history = useHistory()
    function navigateToMenu() {
        history.push('/menu');
    }
    return (
        <header className="header">
            <Button type="button" className="backMenu"
                onClick={navigateToMenu}>
                <MdArrowBack />
                MENU</Button>
            <h1 className="headerH1">PEDIDOS</h1>
        </header>
    )
}