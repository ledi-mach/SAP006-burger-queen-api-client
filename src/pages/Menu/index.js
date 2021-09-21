/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
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

    useEffect(() => {

        fetch(apiProducts, {
            headers: {
                'accept': 'application/json',
                "Authorization": `${userToken}`
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const breakfast = data.filter(item => item.sub_type === 'breakfast');
                setBreakfast(breakfast)
                const burgers = data.filter(item => item.sub_type === 'hamburguer')
                setBurgers(burgers)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <main id="menu" >
            <Header></Header>
            <div className="btn-menu">
                <div className="items">
                    <Button
                        className="categoriesBtn"
                        id="breakfast"
                        onClick={() => setMenu([{
                            "nome": "Café da Manhã",
                            "name": breakfast.map((item) => (
                                item.name
                            )),
                            "price": "testedsadasdsad"
                        }])}>
                        Café da Manhã
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="burgers"
                        onClick={() => setMenu([{
                            "nome": "Almoço/Jantar",
                            "name": burgers.map((item) => (
                                item.name
                            ))
                        }])}>
                        Almoço/Jantar
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="accompaniments"
                        onClick={() => setMenu([{
                            "nome": "Acompanhamentos"
                        }])}>
                        Acompanhamentos
                    </Button>
                    <Button
                        className="categoriesBtn"
                        id="drinks"
                        onClick={() => setMenu([{
                            "nome": "Bebidas"
                        }])}
                    >
                        Bebidas
                    </Button>
                </div>

                <div className="nameItems" >
                    {menu.map((item, index) => (
                        <h1 className="itemsH1" key={`menuItem-${index}`}> {item.nome}</h1>
                    ))}
                </div>
                <section>
                    <ul className="hamburgersItems">
                        {menu.map((item, index) => (
                            <Item className="ordersItems" key={index}>
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
                                        if (!order.some(item => item.name === menu[index].name
                                            && item.flavor === menu[index].flavor
                                            && item.complement === menu[index].complement)) {
                                            setOrder([...order, {
                                                "id": menu[index].id,
                                                "flavor": menu[index].flavor,
                                                "name": menu[index].name,
                                                "qtd": 1, //aqui é o contador inicial
                                                "image": menu[index].image,
                                                "complement": menu[index].complement,
                                                "price": menu[index].price
                                            }]);
                                        }
                                    }
                                    }
                                    >ADICIONAR</Button>
                                </section>
                            </Item>
                        ))}
                    </ul>
                </section>

                <Orders orders={order} cancelOrder={setOrder}>
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
                                        {data.complement !== null ?
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
                                                    console.log('excluiu')
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
                    )

                    )}
                </Orders>

            </div >

        </main >
    )
}