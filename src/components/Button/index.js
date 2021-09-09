import React from "react";

export function Button({
    btnType,
    btnClass,
    btnText,
    btnOnClick,

}) {
    return (
        <button
            type={btnType}
            className={btnClass}
            onClick={btnOnClick}>
            {btnText}
        </button>
    )
}