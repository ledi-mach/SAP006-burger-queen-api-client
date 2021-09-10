import React from "react";

export function Button({
    btnType,
    btnClass,
    btnText,
    btnOnClick,
    btnId

}) {
    return (
        <button
            type={btnType}
            className={btnClass}
            onClick={btnOnClick}
            id={btnId}>
            {btnText}
        </button>
    )
}