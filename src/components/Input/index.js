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
<<<<<<< HEAD

=======
    
>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48

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