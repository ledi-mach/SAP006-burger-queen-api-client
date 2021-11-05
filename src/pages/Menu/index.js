import React, { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import { Modal } from "../../components/Modal/index.js";
import { Background } from "../../services/React/auth";
import "./index.css";
import "./responsive.css";

export function Menu() {
    const api = 'https://lab-api-bq.herokuapp.com';
    const apiProducts = `${api}/products`
    const userToken = localStorage.getItem('usersToken');
    const [menu, setMenu] = useState([]);
    const [order, setOrder] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [burger, setBurger] = useState([]);
    const [side, setSide] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isOrdersVisible, setIsOrdersVisible] = useState(false);
    const [select, setSelect] = useState({})
    const [noItems, setNoItems] = useState(true);
    const [carneComplementSelect, setCarneComplementSelect] = useState(false);
    const [frangoComplementSelect, setFrangoComplementSelect] = useState(false);
    const [vegetarianoComplementSelect, setVegetarianoComplementSelect] = useState(false);
    const [ovoComplementSelect, setOvoComplementSelect] = useState(false);
    const [queijoComplementSelect, setQueijoComplementSelect] = useState(false);
    const [nenhumComplementSelect, setNenhumComplementSelect] = useState(false);

    function priceTotal(valor) {
        return valor.reduce((priceItem, item) => priceItem + (item.qtd * item.price), 0)
    }

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
                setBreakfast(breakfast);
                const burgers = data.filter(item => item.sub_type === 'hamburguer')
                setBurgers(burgers)
                const burger = burgers.filter(item => item.id === 33 || item.id === 42)
                setBurger(burger);
                const side = data.filter(item => item.sub_type === 'side')
                setSide(side);
                const drinks = data.filter(item => item.sub_type === 'drinks')
                setDrinks(drinks);
            })
    }, [apiProducts, userToken]);
    Background()
    return (
        <main className="menu" >
            <Header showModal={setIsOrdersVisible}></Header>

            <div className="types">
                <div className="item">
                    <Button
                        className="categoriesBtn"
                        id="breakfast"
                        onClick={() => setMenu(breakfast, setNoItems(false))}>
                        Café da Manhã
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="burgers"
                        onClick={() => setMenu(burger, setNoItems(false))}>
                        Almoço/Jantar
                    </Button>
                </div>
                <div className="items">
                    <Button
                        className="categoriesBtn"
                        id="accompaniments"
                        onClick={() => setMenu(side, setNoItems(false))}>
                        Acompanhamentos
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="drinks"
                        onClick={() => setMenu(drinks, setNoItems(false))}>
                        Bebidas
                    </Button>
                </div>
            </div>

            <section className="sectionItems">
                <ul className="allItems">
                    {menu.map((item, index) => (
                        <Item className="ordersItems" key={`menuItem-${index}`}>
                            <div className="aboutItems">
                                <img src={item.image} alt="items" className="imageItem" />
                                <h1 className="nameItem"> {item.name}</h1>
                                <h2 className="priceItem"> R$ {item.price},00</h2>
                            </div>
                            {menu === breakfast || menu === side || menu === drinks ?
                                <Button id="addToCart" type="button" onClick={() => {
                                    if (!order.some(item => item.name === menu[index].name)) {
                                        setIsOrdersVisible(true)
                                        setOrder([{
                                            "id": menu[index].id,
                                            "name": menu[index].name,
                                            "qtd": 1, //aqui é o contador inicial
                                            "image": menu[index].image,
                                            "price": menu[index].price
                                        }, ...order]);
                                    }
                                }
                                } >ADICIONAR</Button>
                                : <Button id="addToCart" onClick={() => {
                                    setIsModalVisible(true)
                                    setSelect({
                                        ...select,
                                        "name": item.name
                                    })
                                }
                                }
                                >ADICIONAR</Button>
                            }
                            {isModalVisible && <Modal>
                                {burgers.map((item, index) => (
                                    <div className="confirmModal" key={index}>
                                        <img src={item.image} alt="items" className="imageItemModal" />
                                        <div className="colunsModal">
                                            <div className="flavorsModal">
                                                <h1 className="h1Modal">SABOR: </h1>
                                                <Button
                                                    className={`categoriesBtnModal ${carneComplementSelect ? 'active' : ''}`}
                                                    onClick={() => setSelect(
                                                        {
                                                            ...select,
                                                            "flavor": "carne",
                                                        }, setCarneComplementSelect(true),
                                                        setFrangoComplementSelect(false),
                                                        setVegetarianoComplementSelect(false),
                                                    )}>
                                                    Carne
                                                </Button>
                                                <Button
                                                    className={`categoriesBtnModal ${frangoComplementSelect ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setSelect(
                                                            {
                                                                ...select,
                                                                "flavor": "frango",
                                                            }, setFrangoComplementSelect(true),
                                                            setCarneComplementSelect(false),
                                                            setVegetarianoComplementSelect(false),
                                                        )
                                                    }}>
                                                    Frango
                                                </Button>
                                                <Button
                                                    className={`categoriesBtnModal ${vegetarianoComplementSelect ? 'active' : ''}`}
                                                    onClick={() => setSelect(
                                                        {
                                                            ...select,
                                                            "flavor": "vegetariano",
                                                        }, setVegetarianoComplementSelect(true),
                                                        setCarneComplementSelect(false),
                                                        setFrangoComplementSelect(false),
                                                    )}>
                                                    Vegetariano
                                                </Button>
                                            </div>
                                            <div className="complementsModal">
                                                <h1 className="h1Modal">ADICIONAIS: </h1>
                                                <Button
                                                    className={`categoriesBtnModalC ${ovoComplementSelect ? 'active' : ''}`}
                                                    onClick={() => setSelect(
                                                        {
                                                            ...select,
                                                            "complement": "ovo",
                                                        }, setOvoComplementSelect(true),
                                                        setQueijoComplementSelect(false),
                                                        setNenhumComplementSelect(false),
                                                    )}>
                                                    Ovo
                                                </Button>
                                                <Button
                                                    className={`categoriesBtnModalC ${queijoComplementSelect ? 'active' : ''}`}
                                                    onClick={() => setSelect(
                                                        {
                                                            ...select,
                                                            "complement": "queijo",
                                                        }, setQueijoComplementSelect(true),
                                                        setOvoComplementSelect(false),
                                                        setNenhumComplementSelect(false),
                                                    )}>
                                                    Queijo
                                                </Button>
                                                <Button
                                                    className={`categoriesBtnModalC ${nenhumComplementSelect ? 'active' : ''}`}
                                                    onClick={() => setSelect(
                                                        {
                                                            ...select,
                                                            "complement": null,
                                                        }, setNenhumComplementSelect(true),
                                                        setOvoComplementSelect(false),
                                                        setQueijoComplementSelect(false),
                                                    )}>
                                                    Nenhum
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="btnModal">
                                            <Button className="btnModals" type="button" onClick={() => {
                                                if (!order.some(item => item.name === burgers[index].name
                                                    && item.flavor === burgers[index].flavor
                                                    && item.complement === burgers[index].complement)) {
                                                    const selectBurger = burgers.find((burg) => burg.name === select.name &&
                                                        burg.flavor === select.flavor && burg.complement === select.complement)
                                                    selectBurger.qtd = 1;
                                                    setOrder([selectBurger, ...order]);
                                                    setIsModalVisible(false)
                                                    setIsOrdersVisible(true)
                                                }
                                            }

                                            }>ADICIONAR</Button>
                                            <Button className="btnModals"
                                                onClick={() => {
                                                    setIsModalVisible(false)
                                                }
                                                }>CANCELAR</Button>
                                        </div>
                                    </div>
                                ))}
                            </Modal>}
                        </Item>
                    ))}
                    {noItems && <p className="withoutOrders">Clique em uma das categorias para selecionar qualquer item do menu.</p>}
                </ul>
            </section>
            {
                isOrdersVisible ?
                    <Orders orders={order} orderHidden={setIsOrdersVisible} cancelOrder={setOrder} priceTotal={priceTotal(order)} order={order} menu={menu}>
                        {order.map((data, index) => (
                            <Item className="orderSummary" key={index}>
                                <ul className="list">
                                    <div className="nameOrder">
                                        <h1 className="titleOrder">{data.name}</h1>
                                    </div>
                                    <div className="columOrder1">
                                        <div className="imgOrder">
                                            <img className="image" src={data.image} alt="imagem" />
                                        </div>
                                        <div className="complementsColum">
                                            {data.flavor != null ?
                                                <div className="flavorOrder">
                                                    <h2 className="flavor">
                                                        Sabor:
                                                    </h2>
                                                    {data.flavor}
                                                </div>
                                                : null}
                                            {data.complement != null ?
                                                <div className="complementOrder">
                                                    <h2 className="complement">
                                                        Adicionais:
                                                    </h2>
                                                    {data.complement}
                                                </div>
                                                : null}
                                        </div>
                                    </div>
                                    <div className="orderPrice">
                                        <div className="amountOrder">
                                            <Button className="lessItem" onClick={() => {
                                                order.map((item, i) => {
                                                    if (item.qtd > 1 && (data.id === item.id)) {
                                                        order[i].qtd--
                                                        setOrder([...order])
                                                    } else if (item.qtd === 1 && (data.id === item.id)) {
                                                        order.splice(index, 1);
                                                        setOrder([...order])
                                                    }
                                                    return item;
                                                })
                                            }}
                                            > - </Button>
                                            <div className="inputQtd">
                                                {data.qtd}
                                            </div>

                                            <Button className="moreItem" onClick={() => {
                                                order.map((item, i) => {
                                                    if (
                                                        item.qtd >= 1 && (data.id === item.id)
                                                    ) {
                                                        order[i].qtd++
                                                        setOrder([...order])
                                                    }
                                                    return item;
                                                })
                                            }}
                                            > + </Button>
                                        </div>
                                        <h1 className="price">R${data.price * data.qtd},00</h1>
                                    </div>
                                </ul>
                            </Item>
                        ))}
                    </Orders>
                    : null
            }
        </main >
    )
}