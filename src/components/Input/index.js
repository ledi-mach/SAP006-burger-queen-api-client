import React from "react";

export function InputForm({
inputValue,
inputType,
inputPlaceholder,
inputRequired,
inputClass,
}) {
return(
    <input value={inputValue} type={inputType} 
    placeholder={inputPlaceholder} required={inputRequired} class={inputClass}/>
)
}