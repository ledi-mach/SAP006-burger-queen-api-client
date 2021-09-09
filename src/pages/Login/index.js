import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';


export function Login() {
    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }
    function navigateToMenu() {
       history.push('/menu');
   }
    
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

const logUser = (e) => {
    e.preventDefault()

    if (emailLogin === "" || passwordLogin === "") {
        alert('campo vazio')
    } else {
    fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST', 
            headers: {'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'},

            body: `email=${emailLogin}&password=${passwordLogin}`
    })
   //aqui ver como reconhecer o token e encaminhar para o menu
   .then(res => res.json())
   .then((json)=>{
       const token = json.token
       const id = json.id
       const role = json.role
       console.log(token)
       console.log(id)
       console.log(role)

     //localStorage.setItem('token', token)  // conferir pq não está rolando o setItem
     //localStorage.setItem('id', id)
     //  console.log(userToken)
       //console.log(userId)

       if(token !== null && id!== null && role==='kitchen'){ //&& role =="salão"
        navigateToMenu()
        console.log(role)
       }else{
    alert('erro!!!')
       } 
   }) 
}
}

    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divInfo">
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Login">LOGIN</h1>
                    <form>
                        <p className="labelInputs">E-mail</p>
                        <Input inputType="email" inputClass="inputEmail" inputValue={emailLogin} 
                        inputOnChange={e => setEmailLogin(e.target.value)}
                        />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" inputValue={passwordLogin} 
                        inputOnChange={e => setPasswordLogin(e.target.value)}
                        />
                        <Button btnType="submit" btnClass="yellowBtn" btnText="ENTRAR" btnOnClick={logUser} />
                        <p className="isWorker">É funcionário?</p>
                        <Button btnType="button" btnClass="redBtn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
}

/*import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import './index.css';
import './responsive.css';


export function Login() {
    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divInfo">
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Login">LOGIN</h1>
                    <form>
                        <p className="labelInputs">E-mail</p>
<<<<<<< HEAD
                        <Input inputType="email" inputClass="inputEmail"
                        />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword"
                        />
                        <Button btnType="button" btnClass="yellowBtn" btnText="ENTRAR" />
=======
                        <Input inputType="email" inputClass="inputEmail" /*inputValue={emailLogin} />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" /*inputValue={passwordLogin} />
                        <Button btnType="submit" btnClass="yellowBtn" btnText="ENTRAR" />
>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48
                        <p className="isWorker">É funcionário?</p>
                        <Button btnType="button" btnClass="redBtn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
<<<<<<< HEAD
}
=======
} */


 
      //localStorage.setItem("userToken", json.token);
      //const role= localStorage.setItem("userRole", json.role);
      //return role
     // alert(role)
     // if(role ==="kitchen"){
       // navigateToMenu();
//}
>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48
