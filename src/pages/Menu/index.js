/*import { useEffect } from "react"

export function Menu() {
    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
        })
    }, [])
    return (
        <div>
            <h1>MENU</h1>

        </div >
    )
} */

import { useEffect } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            for (let i = 0; i < data.length; i++) {
                const name = data[i].name;
                const price = data[i].price;

            }
        })
    }, [])
    return (
        <main id='menu'>
            <Header></Header>
            <Orders></Orders>
            <div className="items">
                <Button btnType="button" btnClass="categoriesBtn" btnId="breakfast" btnText="Café da Manhã" />
                <Button btnType="button" btnClass="categoriesBtn" btnId="burgers" btnText="Hambúrgueres" />
                <Button btnType="button" btnClass="categoriesBtn" btnId="accompaniments" btnText="Acompanhamentos" />
                <Button btnType="button" btnClass="categoriesBtn" btnId="drinks" btnText="Bebidas" />
            </div>
            <div className="nameItems">
                <h1 className="itemsH1">ITEMS</h1>
            </div>
            <div className="allItems">
                <Item divItems="ordersItems"></Item>
                <Item divItems="ordersItems"></Item>
                <Item divItems="ordersItems"></Item>
                <Item divItems="ordersItems"></Item>
            </div>
        </main >
        
    )
}