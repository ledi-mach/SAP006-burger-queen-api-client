import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    const api = 'https://lab-api-bq.herokuapp.com';
    const apiProducts = `${api}/products`
    const userToken = localStorage.getItem('usersToken');
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);

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
    }, [])

    return (
        <main id="menu" >
            <Header></Header>
            <div className="btn-menu">
                <div className="items">
                    <Button
                        className="categoriesBtn"
                        id="breakfast"
                        onClick={() => setMenu(true)}>
                        Café da Manhã
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="burgers"
                        onClick={() => setMenu(false)}>
                        Almoço/Jantar
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="accompaniments"
                        onClick={() => setMenu(false)}>
                        Acompanhamentos
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="drinks"
                        onClick={() => setMenu(false)}
                    >
                        Bebidas
                    </Button>
                </div>


                <div className="nameItems" >
                    <h1 className="itemsH1">ITEMS</h1>
                </div>
                <section className="menu-filter">
                    <div className="item-main-section">
                        {menu ? (
                            <ul className="breakfastItems">
                                {breakfast.map((item, index) => (
                                    <Item className="ordersItems1" key={`menuItem-${index}`}>
                                        <section>
                                            <div className="aboutItems">
                                                <img src={item.image} alt="items" className="imageItem" />
                                                <h1 className="nameItem"> {item.name}</h1>
                                                {item.flavor !== null ? <h2 className="flavorItem">{item.flavor}</h2>
                                                    : null}
                                                {item.complement !== null ? <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                                                    : null}
                                                <h2 className="priceItem"> R$ {item.price},00</h2>
                                            </div>
                                            <Button id="addToCart" type="button" onClick={() => {
                                                if (!order.some(item => item.name === breakfast[index].name)) {
                                                    setOrder([...order, {
                                                        "id": breakfast[index].id,
                                                        "name": breakfast[index].name,
                                                        "qtd": 1,
                                                        "image": breakfast[index].image,
                                                        "complement": breakfast[index].complement,
                                                        "price": breakfast[index].price
                                                    }]);
                                                } else {
                                                    // eslint-disable-next-line array-callback-return
                                                    order.map((item, i) => {
                                                        if (item.name === breakfast[index].name) {
                                                            order[i].qnt++
                                                            setOrder([...order]);
                                                        }
                                                    })
                                                }
                                            }
                                            }
                                            >ADICIONAR</Button>
                                        </section>
                                    </Item>
                                ))}
                            </ul>
                        ) : (
                            <ul className="hamburgersItems">
                                {burgers.map((item, index) => (
                                    <Item className="ordersItems" key={`menuItem-${index}`}>
                                        <section>
                                            <div className="aboutItems">
                                                <img src={item.image} alt="items" className="imageItem" />
                                                <h1 className="nameItem"> {item.name}</h1>
                                                {item.flavor !== null ? <h2 className="flavorItem">{item.flavor}</h2>
                                                    : null}
                                                {item.complement !== null ? <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                                                    : null}
                                                <h2 className="priceItem"> R$ {item.price},00</h2>
                                            </div>
                                            <Button id="addToCart" type="button" onClick={() => {
                                                if (!order.some(item => item.name === burgers[index].name)) {
                                                    setOrder([...order, {
                                                        "id": burgers[index].id,
                                                        "flavor": burgers[index].flavor,
                                                        "name": burgers[index].name,
                                                        "qtd": 1,
                                                        "image": burgers[index].image,
                                                        "complement": burgers[index].complement,
                                                        "price": burgers[index].price
                                                    }]);
                                                } else {
                                                    // eslint-disable-next-line array-callback-return
                                                    order.map((item, i) => {
                                                        if (item.name === burgers[index].name) {
                                                            order[i].qnt++
                                                            setOrder([...order]);
                                                        }
                                                    })
                                                }
                                            }
                                            }
                                            >ADICIONAR</Button>
                                        </section>
                                    </Item>
                                ))}
                            </ul>
                        )}

                    </div>
                </section>
                <Orders orders={order}>
                    {order.map((data, index) => (
                        <Item className="orderSummary" key={index}>
                            <ul className="list">
                                <div className="nameOrder">
                                    <h1 className="titleOrder">{data.name}</h1>
                                    {data.flavor !== null ? <h2 className="flavorItem">{data.flavor}</h2>
                                        : null}
                                </div>
                                <div className="columOrder1">
                                    <div className="columOrder">
                                        <div className="amountOrder">
                                            <h2 className="amount">
                                                Quantidade:
                                            </h2>{data.qtd}
                                        </div>
                                        {data.complement !== null ?
                                            <div className="complementOrder">
                                                <h2 className="complement">
                                                    Adicionais:
                                                </h2>{data.complement}
                                            </div>
                                            : null}
                                    </div>
                                    <div className="imgOrder">
                                        <img className="image" src={data.image} alt="imagem" />
                                    </div>
                                </div>
                                <div className="orderPrice">
                                    <h1 className="price">R${data.price},00</h1>
                                </div>
                            </ul>
                        </Item>
                    )
                    )}

                </Orders>
            </div>

        </main>
    )
}