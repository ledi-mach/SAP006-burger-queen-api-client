import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { OrderKitchen } from "../../components/OrderKitchen";
import { Button } from "../../components/Button";
import { HeaderPedidos } from "../../components/Header";
import { convertTime, convertDate } from "../../services/React/auth";


export function Pedidos() {

    const history = useHistory()
    const [order, setOrder] = useState([]);
    const userToken = localStorage.getItem('usersToken');
    const api = 'https://lab-api-bq.herokuapp.com/orders/'
    const apiOrders = 'https://lab-api-bq.herokuapp.com/orders';

    //function navigateToMenu(){
    // history.push('/menu');
    //}

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
                    return item.status.includes('ready') || item.status.includes('served')
                })
                setOrder(pendingOrders)
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
            <div className="divLogoutBtn">
                <Button className="LogoutBtn" onClick={() => {
                    localStorage.removeItem("usersToken")
                    history.push('/login')
                }}>Sair</Button>
            </div>

            <HeaderPedidos />
            <OrderKitchen
                convertTime={convertTime}
                convertDate={convertDate}
                order={order}
                handleServing={handleServing}
            />


        </main>
    )
}