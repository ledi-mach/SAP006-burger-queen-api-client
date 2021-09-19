import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
//import { useHistory } from "react-router";
//import { LogOut } from '../../services/React/auth'
import { Button } from "../../components/Button";
import { useEffect } from "react";
import { Item } from "../../components/Item";
import { HeaderKitchen } from '../../components/Header'
import "./index.css";

export function Cozinha() {

    const [order, setOrder] = useState([]);
    const history = useHistory();
    const apiOrders = 'https://lab-api-bq.herokuapp.com/orders';
    const userToken = localStorage.getItem('usersToken');

    useEffect(() => {
        fetch(apiOrders, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${userToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const order = data.filter((item) => item.status === "pending");
                setOrder(order);
                console.log(order)
            });
    }, [userToken])

    return (
        <main className="kitchen">
            <div>
                <Button onClick={() => {
                    localStorage.removeItem("usersToken")
                    alert('saindo...')
                    history.push('/login')
                }}>Sair</Button>
            </div>

            <div>
                <HeaderKitchen />
            </div>
            <div className="kitchen-wrap">

                {order ? (
                    <ul className="ListOfOrders">
                        {order.map((data, index) => {
                            return (
                                <Item className="ordersKitchen" key={index}>
                                    <section className="ordered">
                                        <div className="headerOrder">
                                            <p className="tableNumber">  Mesa {data.table} </p>
                                            <p className="customerName"> {data.client_name} </p>
                                            <p className="timeOrder"> Pedido feito às: {data.createdAt} </p>
                                        </div>


                                        <h1 className="titleKitchen">PEDIDOS</h1>
                                        <div className="bodyOrder">

                                            <ul className="produtoPedido">

                                                {data.Products.map((data, id) => {
                                                    return (
                                                        <ul className="listProductOrder" key={id}>

                                                            <p className="nameItemOrder">{data.name}</p>
                                                            <p className="quantityItem"> Quantidade: {data.qtd}
                                                                {data.complement !== null ? <p>Extra: {data.complement}</p> : <p>Extra: nenhum</p>}</p>

                                                        </ul>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <Button className="redBtn" id="statusOrderBtn"
                                        > {data.status}</Button>




                                    </section>
                                </Item>

                            )
                        })
                        }
                    </ul>

                ) : `Sem pedidos no momento`}
            </div>


        </main >
    )
}
//id da order:   {data.id}