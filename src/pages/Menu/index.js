import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    //const [menu, setMenu] = useState([]);
    const [menus, setMenus] = useState(true);
    //const [breakfastItemss, setBreakfastItem] = useState([]);
    const [breakfast, setBreakfast] = useState([]);
    const [burgers, setBurgers] = useState([]);
    const [garlish, setGarlish] = useState([]);//ver se existe algo semelhante ao switch case para finalizar
    const [drinks, setDrinks] = useState([]);
    const [productsList, setProductsList] = useState("");


    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            /*
            setBreakfastItem(data)
         })
    }, [])*/
    const products = data;
        setProductsList(data)

        const breakfastList = products.slice(0, 4);//café da manhã
        setBreakfast(breakfastList);
        const burgersList = products.slice(4, 22);//burgers
        setBurgers(burgersList);
        const garlishList = products.slice(22, 24);//burgers
        setGarlish(garlishList);
        const drinksList = products.slice(24, 28); //acompanhamentos
        setDrinks (drinksList);
})
}, [])


    return (
        <main id="menu">
            <Header></Header>
            <Orders></Orders>

        <div className="btn-menu">
            <div className="items">
            <Button
                className="categoriesBtn"
                id="breakfast"
                onClick={() => setMenus(true)}>
                Café da Manhã
            </Button>
            <Button
                className="categoriesBtn"
                id="burgers"
                onClick={() => setMenus(false)}>
                Almoço/Jantar
            </Button>
            <Button 
            className="categoriesBtn"
            id="accompaniments"
            onClick={() => setMenus(false)}>
                Acompanhamentos
            </Button>
            <Button 
            className="categoriesBtn"
            id="drinks"
            onClick={() => setMenus(false)}>
                Bebidas
            </Button>
            </div>

            <section className="menu-filter">
                <div className="item-main-section">
        
        {menus ? (
            <ul className="breakfastItems">
                {breakfast.map((item, index) => (
                    <Item key={`menuItem-${index}`}>
                    <section>
                        <div className="aboutItems">
                            <img src={item.image} alt="items" className="imageItem" />
                            <h1 className="nameItem"> {item.name}</h1>
                            {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                                <h2 className="flavorItem">{item.flavor}</h2>}
                            <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                            <h2 className="priceItem"> R$ {item.price},00</h2>
                        </div>
                        <Button id="addToCart" type="button">ADICIONAR</Button>
                    </section>
                </Item>
                ))}
</ul>
  ): (
      <ul className="hamburgersItems">
          {burgers.map((item, index) => (
                  <Item key={`menuItem-${index}`}>
                  <section>
                      <div className="aboutItems">
                          <img src={item.image} alt="items" className="imageItem" />
                          <h1 className="nameItem"> {item.name}</h1>
                          {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                              <h2 className="flavorItem">{item.flavor}</h2>}
                          <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                          <h2 className="priceItem"> R$ {item.price},00</h2>
                      </div>
                      <Button id="addToCart" type="button">ADICIONAR</Button>
                  </section>
              </Item>
          ))}
          </ul>
  )}
                </div>
            </section>
        </div>
        </main>
    )
}

/*import { useEffect, useState } from "react";
import { Header } from '../../components/Header/index.js';
import { Orders } from '../../components/Orders/index.js';
import { Button } from '../../components/Button/index.js';
import { Item } from "../../components/Item/index.js";
import "./index.css";

export function Menu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("usersToken")
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setMenu(data)

        })
    }, [])


    const Items = menu.length > 0 ?
        menu.map(function (item, index) {
            return <Item key={`menuItem-${index}`}>
                <section>
                    <div className="aboutItems">
                        <img src={item.image} alt="items" className="imageItem" />
                        <h1 className="nameItem"> {item.name}</h1>
                        {item.flavor === null ? <h2 className="flavorItem">-</h2> :
                            <h2 className="flavorItem">{item.flavor}</h2>}
                        <h2 className="complementsItem">Adicionais: {item.complement}</h2>
                        <h2 className="priceItem"> R$ {item.price},00</h2>
                    </div>
                    <Button id="addToCart" type="button">ADICIONAR</Button>
                </section>
            </Item>
        })
        : `carregando...`

    return (
        <main id='menu'>
            <Header></Header>
            <Orders></Orders>
            <div className="items">
                <Button type="button" className="categoriesBtn" /*onClick={itemsBreakfasst}
                id="breakfast">Café da Manhã</Button>
                <Button type="button" className="categoriesBtn" id="burgers">Hambúrgueres</Button>
                <Button type="button" className="categoriesBtn" id="accompaniments">Acompanhamento</Button>
                <Button type="button" className="categoriesBtn" id="drinks">Bebidas</Button>
            </div>
            <div className="nameItems">
                <h1 className="itemsH1">ITEMS</h1>
            </div>
            <ul className="allItems">
                {Items}
            </ul>
            <ul className="breakfastItems">
                            {Items.slice(0, 4)}
                     </ul>

            <ul className="hamburgersItems">
                {Items.slice(4, 22)}
            </ul>
            <ul className="garnishItems">
                {Items.slice(22, 24)}
            </ul>
            <ul className="drinksItems">
                {Items.slice(24, 28)}
            </ul>
        </main >
    )
}
*/
