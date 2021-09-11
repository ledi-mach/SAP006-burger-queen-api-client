import React from "react";
import "./index.css";

export function Item({
    children
}) {
    return (
        <div className="ordersItems">
            {children}
        </div>
    )
}