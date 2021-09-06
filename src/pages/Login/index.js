import { useHistory } from 'react-router-dom';
import { useState } from 'react';
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
    
    const apiURL = 'https://lab-api-bq.herokuapp.com';
    const userAuth = `${apiURL}/auth`
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

const logUser = () => {
    const requestOptions = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name:"user 1",
            email: emailLogin,
            password: passwordLogin,
          }),
    }
    fetch(userAuth, requestOptions)
    .then(res=> {
        return res.json();
    })

    .then((employeeData) => {
        localStorage.setItem('currentUserToken', employeeData.token);
        return employeeData.token;
    })
    .then(()=>{
        navigateToMenu();
    })
    .catch((erro)=>{
        alert(erro)
    })
    console.log(requestOptions);
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
