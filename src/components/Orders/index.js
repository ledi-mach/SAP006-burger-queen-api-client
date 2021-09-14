import React from "react";
import "./index.css";

export function Orders({
}) {
    return (
        <div className="orders">
            <h1 className="ordersH1">PEDIDOS</h1>
            <div className="totalValue"></div>
            <div className="nameTable">
                <p className="clientInfo">Nome:</p>
                <p className="clientInfo">Mesa:</p>
            </div>

        </div>
    )
}
