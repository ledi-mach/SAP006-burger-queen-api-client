/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import { Modal } from "../../components/Modal/index.js";
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
    const [select, setSelect] = useState({})

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <main className="menu" >

            <Header />
            <div className="btn-menu">
                <div className="types">
                    <div className="item">
                        <Button
                            className="categoriesBtn"
                            id="breakfast"
                            onClick={() => setMenu(breakfast
                            )}>
                            Café da Manhã
                        </Button>
                        <Button
                            className="categoriesBtn"
                            id="burgers"
                            onClick={() => setMenu(burger
                            )}>
                            Almoço/Jantar
                        </Button>
                    </div>
                    <div className="items">
                        <Button
                            className="categoriesBtn"
                            id="accompaniments"
                            onClick={() => setMenu(side
                            )}>
                            Acompanhamentos
                        </Button>
                        <Button
                            className="categoriesBtn"
                            id="drinks"
                            onClick={() => setMenu(drinks
                            )}
                        >
                            Bebidas
                        </Button>
                    </div>
                </div>

                <div className="nameItems" >
                    {menu.map((item, index) => (
                        <h1 className="itemsH1" key={`menuItem-${index}`}>{item.nome}</h1>
                    ))}
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
                                {isModalVisible ? <Modal>
                                    {burgers.map((item, index) => (
                                        <div className="confirmModal" key={index}>
                                            <img src={item.image} alt="items" className="imageItemModal" />
                                            <div className="colunsModal">
                                                <div className="flavorsModal">
                                                    <h1 className="h1Modal">SABOR: </h1>
                                                    <Button
                                                        className="categoriesBtnModal"
                                                        onClick={() => setSelect(
                                                            {
                                                                ...select,
                                                                "flavor": "carne",
                                                            }
                                                        )}>
                                                        Carne
                                                    </Button>
                                                    <Button
                                                        className="categoriesBtnModal"
                                                        onClick={() => {
                                                            setSelect(
                                                                {
                                                                    ...select,
                                                                    "flavor": "frango",
                                                                }
                                                            )
                                                        }}>
                                                        Frango
                                                    </Button>
                                                    <Button
                                                        className="categoriesBtnModal"
                                                        onClick={() => setSelect(
                                                            {
                                                                ...select,
                                                                "flavor": "vegetariano",
                                                            }
                                                        )}>
                                                        Vegetariano
                                                    </Button>
                                                </div>
                                                <div className="complementsModal">
                                                    <h1 className="h1Modal">ADICIONAIS: </h1>
                                                    <Button
                                                        className="categoriesBtnModalC"
                                                        onClick={() => setSelect(
                                                            {
                                                                ...select,
                                                                "complement": "ovo",
                                                            }
                                                        )}>
                                                        Ovo
                                                    </Button>
                                                    <Button
                                                        className="categoriesBtnModalC"
                                                        onClick={() => setSelect(
                                                            {
                                                                ...select,
                                                                "complement": "queijo",
                                                            }
                                                        )}>
                                                        Queijo
                                                    </Button>
                                                    <Button
                                                        className="categoriesBtnModalC"
                                                        onClick={() => setSelect(
                                                            {
                                                                ...select,
                                                                "complement": null,
                                                            }
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
                                </Modal> : null}
                            </Item>
                        ))}
                    </ul>
                </section>

                <Orders orders={order} cancelOrder={setOrder} priceTotal={priceTotal(order)} order={order} menu={menu}>
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
            </div>
        </main >
    )
}