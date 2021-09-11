import React from "react";

export function Button({
    children,
    type,
    className,
    onClick,
    id
}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            id={id}>
            {children}
        </button>
    )
}