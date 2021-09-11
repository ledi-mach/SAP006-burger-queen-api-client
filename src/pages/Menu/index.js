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
        })
    }, [])

    const Items = menu.length > 0 ?
        menu.map(function (item, index) {
            return <Item key={`menuItem-${index}`}>
                <section>
                    <div className="aboutItems">
                        <img src={item.image} alt="items" className="imageItem" />
                        <h1 className="nameItem"> {item.name}</h1>
                        <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                        <h2 className="priceItem"> R$ {item.price},00</h2>
                    </div>
                    <Button id="addToCart" type="button">ADICIONAR</Button>
                </section>
            </Item>

        })
        : `carregando...`

    return (
        <main id='menu'>
            <Header></Header>
            <Orders></Orders>
            <div className="items">
                <Button type="button" className="categoriesBtn" id="breakfast">Café da Manhã</Button>
                <Button type="button" className="categoriesBtn" id="burgers">Hambúrgueres</Button>
                <Button type="button" className="categoriesBtn" id="accompaniments">Acompanhamento</Button>
                <Button type="button" className="categoriesBtn" id="drinks">Bebidas</Button>
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