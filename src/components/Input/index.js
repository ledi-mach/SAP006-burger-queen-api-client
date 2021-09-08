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
    inputOnChange,


}) {
    return (
        <div className={divForm}>
            <input
                value={inputValue}
                type={inputType}
                placeholder={inputPlaceholder}
                required={inputRequired}
                className={inputClass}
                onChange={inputOnChange} />

            <label className={labelInfo}>
                {labelValue}
            </label>
        </div>
    )
}