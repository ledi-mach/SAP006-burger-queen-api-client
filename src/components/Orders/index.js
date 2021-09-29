import React from "react";
import { useState } from 'react';
import "./index.css";
import "./responsive.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { Modal } from "../Modal";

export function Orders({
    children,
    orders,
    cancelOrder,
    priceTotal,
}) {

    const userToken = localStorage.getItem('usersToken');
    const [Customer, setCustomer] = useState('');
    const [Table, setTable] = useState('');
    const [modalCancel, setModalCancel] = useState(false);

    function cancelCustomer() {
        setTable([]);
        setCustomer([]);
        cancelOrder([])
        setModalCancel(false)
    }

    function createOrder() {
        const Products = orders.map((data) => ({
            "id": data.id,
            "qtd": data.qtd,
        })
        )

        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `${userToken}`
            },
            body: JSON.stringify({
                "client": Customer,
                "table": Table,
                "products": Products,
            })
        })
    }

    return (
        <div className="orders">
            <h1 className="ordersH1">PEDIDOS</h1>
            <div className="divOrderSummary">
                {children}
            </div>
            <div className="nameTable">
                <div className="nameCustomer">
                    <p className="clientInfo">Nome: </p>
                    <Input type="name" inputClass="inputCustomer" value={Customer}
                        onChange={e => setCustomer(e.target.value)}></Input>
                </div>
                <div className="tableCustomer">
                    <p className="clientInfo">Mesa: </p>
                    <Input type="number" inputClass="inputTable" min="1" max="15" value={Table}
                        onChange={e => setTable(e.target.value)} ></Input>
                </div>
            </div>
            <div className="finishOrder">
                <p className="total">TOTAL: R$ {priceTotal},00</p>
                <Button type="button" className="sendOrder" onClick={createOrder}>FAZER PEDIDO</Button>
                <Button type="button" className="cancelOrder" onClick={() => setModalCancel(true)}>CANCELAR PEDIDO</Button>
                {modalCancel ? <Modal>
                    <div className="modalCancel">
                        <h1 className="h1ModalCancel">Tem certeza que deseja cancelar seu pedido?</h1>
                        <Button className="cancelModal" type="button"
                            onClick={cancelCustomer}>CANCELAR</Button>
                        <Button className="cancelModal"
                            onClick={() => setModalCancel(false)}>VOLTAR</Button>
                    </div>
                </Modal> : null}
            </div>
        </div >

    )
}
//  <p className="total">TOTAL: R$ {sumPriceTotal(order)}</p> */
