import React from "react";
import './index.css'

export function Modal({
    children
}) {

    return (
        <div className="modal">
            {children}
        </div >
    )

}