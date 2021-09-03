import React from "react";

export function Input({
    inputValue,
    inputType,
    inputPlaceholder,
    inputRequired,
    inputClass,
    labelInfo,
    labelValue,
    divForm,

}) {
    return (
        <div className={divForm}>
            <input
                value={inputValue}
                type={inputType}
                placeholder={inputPlaceholder}
                required={inputRequired}
                class={inputClass} />
                
            <label className={labelInfo}>
                {labelValue}
            </label>
        </div>
    )
}