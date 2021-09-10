import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    const [menu, setMenu] = useState([]);   


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
            setMenu(data)

           /* for (let i = 0; i < data.length; i++) {
                let moreItens = "";
                moreItens += `
               <p className="nameProduto"> ${data[i].name}</p>
                ${data[i].price};
               `
                const divP = document.getElementsByClassName(".allItems")
                divP.innerHTML = moreItens;
                console.log(divP)
                
            }*/
           
        })
    }, [])
    const Items =  menu.length>0 ? 
        menu.map(function(item, index){
            return <Item key={`menuItem-${index}`}>
                <p className="nameProduto"> {item.name}</p>
        {item.price};
            </Item>
        })
        : `carregando...`
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
            <ul className="allItems">
               {Items}
            </ul>
        </main >

    )
} 





/*
import React, {useEffect, useState} from "react";
import { Item } from "../../components/Item/index.js";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import "./index.css";



export function Menu(){

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        })
    }, [])
    return(

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


}*/