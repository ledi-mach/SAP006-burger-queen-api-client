import React from "react";

export function Button({
    children,
    type,
    className,
    onClick,
    id,
    value
}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            value = {value}
            id={id}>
            {children}
        </button>
    )
}