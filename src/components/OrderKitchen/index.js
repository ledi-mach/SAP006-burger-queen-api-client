import { Button } from "../Button/index"
import { Item } from "../Item/index"
import React from "react"
import './index.css';


export function OrderKitchen({
    convertTime,
    convertDate,
    order,
    handlePreparing,
    handleFinished,
}) {

    return (
        <div className="kitchen-wrap">
            {order.length > 0 && order.sort((a, b) => a.id - b.id) ? (
                <ul className="ListOfOrders">
                    {order.map((data, index) => {
                        return (
                            <Item className="ordersKitchen" key={index}>
                                <section className="ordered">
                                    <div className="orderWrap">
                                        <div className="headerOrder">
                                            <p className="tableNumber">  Mesa {data.table} </p>
                                            <p className="customerName"> {data.client_name} </p>
                                            <p>Status: {data.status
                                                .replace('pending', 'Pendente')
                                                .replace('preparing', 'Preparando')
                                                .replace('ready', 'Pronto')
                                                .replace('served', 'Servido')
                                            } </p>
                                            <p className="timeOrder">
                                                Pedido feito em {convertDate(data.createdAt)} às {convertTime(data.createdAt)} </p>
                                        </div>
                                        <h1 className="titleKitchen">PEDIDOS</h1>

                                        <div className="bodyOrder">
                                            <ul className="productOrder">

                                                {data.Products.map((data, id) => {
                                                    return (
                                                        <ul className="listProductOrder" key={id}>
                                                            <p className="nameItemOrder">{data.name}</p>
                                                            <div className="quantityItem"> Quantidade: {data.qtd}
                                                                {data.complement !== null ? <p>Extra: {data.complement}</p> : <p>Extra: nenhum</p>}
                                                            </div>
                                                        </ul>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="statusBtn">
                                            {data.status === 'pending' && localStorage.getItem('role')==='kitchen'?
                                                <Button className="redBtn" id="statusOrderBtn"
                                                    onClick={(e) => handlePreparing(data, e)}
                                                > Preparar</Button>
                                                : data.status === 'preparing' && localStorage.getItem('role')==='kitchen'?
                                                    <Button className="yellowBtn" id="statusOrderFinish"
                                                        onClick={(e) => handleFinished(data, e)}
                                                    > Finalizar</Button>
                                                    : < p className="orderRestrict" >
                                                   {data.status.replace('preparing', 'Preparando').replace('pending', 'Aguardando')}
                                                </p>
                                            }
                                        </div>
                                    </div>

                                </section>
                            </Item>
                        )
                    })
                    }
                </ul>

            ) : <p className="withoutOrders">Sem pedidos no momento!</p>
            }
        </div >
    )
}

//  <p className="timeOrder">Tempo de preparo: {prepareTime(data.createdAt, data.updatedAt)} min.</p>