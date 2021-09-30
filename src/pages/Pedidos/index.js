import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { OrderKitchen } from "../../components/OrderKitchen";
import { Button } from "../../components/Button";
import { HeaderPedidos } from "../../components/Header";
import { convertTime, convertDate } from "../../services/React/auth";
import { LogoutButton } from "../../components/LogoutButton";
import './index.css'
import { MdArrowBack } from "react-icons/md";

export function Pedidos() {

    const history = useHistory()
    const [order, setOrder] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
    const [preparingOrders, setPreparingOrders] = useState([]);
    const [readyOrders, setReadyOrders] = useState([]);
    const [servedOrders, setServedOrders] = useState([]);
    const userToken = localStorage.getItem('usersToken');
    const api = 'https://lab-api-bq.herokuapp.com/orders/'
    const apiOrders = 'https://lab-api-bq.herokuapp.com/orders';

    function navigateToMenu() {
        history.push('/menu');
    }

    const listAllOrders = () => {

        const userToken = localStorage.getItem('usersToken');
        fetch(apiOrders, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${userToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const pendingOrders = data.filter((item) => {
                    return item.status.includes('pending')
                })
                setPendingOrders(pendingOrders)
                const preparingOrders = data.filter((item) => {
                    return item.status.includes('preparing')
                })
                setPreparingOrders(preparingOrders)
                const readyOrders = data.filter((item) => {
                    return item.status.includes('ready')
                })
                setReadyOrders(readyOrders)
                const servedOrders = data.filter((item) => {
                    return item.status.includes('served')
                })
                setServedOrders(servedOrders)
            });
    }
    useEffect(() => {
        listAllOrders()
    }, [userToken])

    const handleServing = (data) => {
        const orderId = data.id;
        const status = { status: 'served' };

        fetch(api + orderId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${userToken}`,
            },
            body: JSON.stringify(status),
        }).then((res) => res.json())
            .then(() => {
                listAllOrders()
            })
    }
    return (
        <main className="mainAttendance">

            <LogoutButton />
            <Button type="button" className="backMenu"
                onClick={navigateToMenu}><MdArrowBack />MENU</Button>

            <HeaderPedidos />
            <div className="btn-menu">
                <div className="types">
                    <div className="item">
                        <Button
                            className="categoriesBtn"
                            id="breakfast"
                            onClick={() => {
                                setOrder(pendingOrders)
                            }}>
                            Enviados
                        </Button>
                        <Button
                            className="categoriesBtn"
                            id="burgers"
                            onClick={() => {
                                setOrder(preparingOrders)

                            }}>
                            Em andamento
                        </Button>
                    </div>
                    <div className="items">
                        <Button
                            className="categoriesBtn"
                            id="accompaniments"
                            onClick={() => {
                                setOrder(readyOrders)

                            }}>
                            Prontos
                        </Button>
                        <Button
                            className="categoriesBtn"
                            id="drinks"
                            onClick={() => {
                                setOrder(servedOrders)
                            }}>
                            Histórico
                        </Button>
                    </div>
                </div>
            </div>
            <OrderKitchen
                convertTime={convertTime}
                convertDate={convertDate}
                order={order}
                handleServing={handleServing}
            />
        </main>
    )
}