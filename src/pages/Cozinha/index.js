import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "../../components/Button";
import { useEffect } from "react";
import { HeaderKitchen } from '../../components/Header'
import "./index.css";
import { OrderKitchen } from "../../components/OrderKitchen";

export function Cozinha() {

    const [order, setOrder] = useState([]);
    const history = useHistory();
    const userToken = localStorage.getItem('usersToken');
    const api = 'https://lab-api-bq.herokuapp.com/orders/'
    const apiOrders = 'https://lab-api-bq.herokuapp.com/orders';

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
                    return item.status.includes('preparing') || item.status.includes('pending')
                })
                setOrder(pendingOrders)
            });
    }

    useEffect(() => {
        listAllOrders()
    }, [userToken])

    const convertTime = (apiTime) => {
        const getDate = new Date(apiTime);
        const getHours = getDate.getHours();
        const getMinutes = getDate.getMinutes();
        const correctTime = `${getHours}: ${getMinutes}`

        return correctTime;
    }

    const handlePreparing = (data) => {
        const orderId = data.id;
        const status = { status: 'preparing' };

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

    const handleFinished = (data) => {
        const orderId = data.id;
        const status = { status: 'ready' }

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
        <main className="kitchen">
            <div className="divLogoutBtn">
                <Button className="LogoutBtn" onClick={() => {
                    localStorage.removeItem("usersToken")

                    history.push('/login')
                }}>Sair</Button>
            </div>

            <HeaderKitchen />
            <OrderKitchen
                convertTime={convertTime}
                order={order}
                handlePreparing={handlePreparing}
                handleFinished={handleFinished}
            />
        </main >
    )
}
