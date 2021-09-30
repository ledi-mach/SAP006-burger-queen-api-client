import React from "react";

export function Input({
    value,
    type,
    name,
    inputPlaceholder,
    inputRequired,
    inputClass,
    labelInfo,
    labelValue,
    divForm,
    onChange,
    max,
    min,
}) {
    return (
        <div className={divForm}>
            <input
            name={name}
                value={value}
                type={type}
                placeholder={inputPlaceholder}
                required={inputRequired}
                className={inputClass}
                onChange={onChange}
                max={max}
                min={min} />

            <label className={labelInfo}>
                {labelValue}
            </label>
        </div>
    )
}