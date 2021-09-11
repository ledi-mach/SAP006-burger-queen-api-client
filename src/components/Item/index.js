import React from "react";
import "./index.css";

export function Item({
    children
}) {
    return (
        <div className="ordersItems">
            {children}
        </div>
    )
}





/*export function Item({
    srcItem,
    descriptionItem,
    itemClassName,
    //inputOnChange,
    //itemText,
    itemPrice,

}){
    return(
        <div className="allItens">
          <img
          className='itemImg'
          src={srcItem}
          alt=""
        />

        <p className={itemClassName}> 
        {descriptionItem}
        {itemPrice}
         </p>
        

        </div>
    )

}*/