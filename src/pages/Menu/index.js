import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    const api = 'https://lab-api-bq.herokuapp.com';
    const apiProducts = `${api}/products`
    //const [menu, setMenu] = useState([])
    const [menus, setMenus] = useState(true);
    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);
    //const [garlish, setGarlish] = useState([]);//ver se existe algo semelhante ao switch case para finalizar
    //const [drinks, setDrinks] = useState([]);
    const userToken = localStorage.getItem('usersToken');


    useEffect(() => {

        fetch(apiProducts, {
            headers: {
                'accept': 'application/json',
                "Authorization": `${userToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const breakfast = data.filter(item => item.sub_type === 'breakfast')
                setBreakfast(breakfast)
                const burgers = data.filter(item => item.sub_type === 'hamburguer')
                setBurgers(burgers)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    return (
        <main id="menu" >
            <Header></Header>
            <Orders></Orders>

            <div className="btn-menu">
                <div className="items">
                    <Button
                        className="categoriesBtn"
                        id="breakfast"
                        onClick={() => setMenus(true)}>
                        Café da Manhã
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="burgers"
                        onClick={() => setMenus(false)}>
                        Almoço/Jantar
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="accompaniments"
                        onClick={() => setMenus(false)}>
                        Acompanhamentos
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="drinks"
                        onClick={() => setMenus(false)}
                    >
                        Bebidas
                    </Button>
                </div>


                <div className="nameItems" >
                    <h1 className="itemsH1">ITEMS</h1>
                </div>
                <section className="menu-filter">
                    <div className="item-main-section">
                        {menus ? (
                            <ul className="breakfastItems">
                                {breakfast.map((item, index) => (
                                    <Item key={`menuItem-${index}`}>
                                        <section>
                                            <div className="aboutItems">
                                                <img src={item.image} alt="items" className="imageItem" />
                                                <h1 className="nameItem"> {item.name}</h1>
                                                {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                                                    <h2 className="flavorItem">{item.flavor}</h2>}
                                                <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                                                <h2 className="priceItem"> R$ {item.price},00</h2>
                                            </div>
                                            <Button id="addToCart" type="button">ADICIONAR</Button>
                                        </section>
                                    </Item>
                                ))}
                            </ul>
                        ) : (
                            <ul className="hamburgersItems">
                                {burgers.map((item, index) => (
                                    <Item key={`menuItem-${index}`}>
                                        <section>
                                            <div className="aboutItems">
                                                <img src={item.image} alt="items" className="imageItem" />
                                                <h1 className="nameItem"> {item.name}</h1>
                                                {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                                                    <h2 className="flavorItem">{item.flavor}</h2>}
                                                <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                                                <h2 className="priceItem"> R$ {item.price},00</h2>
                                            </div>
                                            <Button id="addToCart" type="button">ADICIONAR</Button>
                                        </section>
                                    </Item>
                                ))}
                            </ul>
                        )}

                    </div>
                </section>
            </div>
        </main>
    )

}

/*
return (

    <main id="menu" >
        <Header></Header>
        <Orders></Orders>

        <div className="btn-menu">
            <div className="items">
                <Button
                    className="categoriesBtn"
                    id="breakfast"
                    onClick={() => setMenus(true)}>
                    Café da Manhã
                </Button>
                <Button
                    className="categoriesBtn"
                    id="burgers"
                    onClick={() => setMenus(false)}>
                    Almoço/Jantar
                </Button>
                <Button
                    className="categoriesBtn"
                    id="accompaniments"
                    onClick={() => setMenus(false)}>
                    Acompanhamentos
                </Button>
                <Button
                    className="categoriesBtn"
                    id="drinks"
                    onClick={() => setMenus(false)}
                >
                    Bebidas
                </Button>
            </div>


            <div className="nameItems" >
                <h1 className="itemsH1">ITEMS</h1>
            </div>
            <section className="menu-filter">
                <div className="item-main-section">
                <ul className="breakfastItems">

              {menus && menu.map((item, index) => (
                <Item key={`menuItem-${index}`}>
                                        <section>
                                            <div className="aboutItems">
                                                <img src={item.image} alt="items" className="imageItem" />
                                                <h1 className="nameItem"> {item.name}</h1>
                                                {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                                                    <h2 className="flavorItem">{item.flavor}</h2>}
                                                <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                                                <h2 className="priceItem"> R$ {item.price},00</h2>
                                            </div>
                                            <Button id="addToCart" type="button">ADICIONAR</Button>
                                        </section>
                                    </Item>
              ))}
               </ul>
                </div>
            </section>
        </div>
    </main>
)
} */