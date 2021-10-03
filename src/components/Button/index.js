import React from "react";

export function Button({
    children,
    type,
    className,
    onClick,
    id,
    value,
    label,
}) {
    return (
        <div data-testid="button">
        <button
            type={type}
            className={className}
            onClick={onClick}
            value = {value}
            id={id} 
            label={label}
            >
            {children}
        </button>
        </div>
    )
}