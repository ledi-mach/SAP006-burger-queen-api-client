import React from "react";

export function Button({
    children,
    type,
    className,
    onClick,
    id,
    data,
}) {
    return (
        <span data-testid='button'>
            <button
                data-testid={data}
                type={type}
                className={className}
                onClick={onClick}
                id={id}
            >
                {children}
            </button>
        </span>
    )
}