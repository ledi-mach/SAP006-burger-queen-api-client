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
    
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

const logUser = () => {

    fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'AUTH', 
            headers: {'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'},

            body: `email=${emailLogin}&password=${passwordLogin}`
    })
   //aqui ver como reconhecer o token e encaminhar para o menu
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
                    <form className="formLogin">
                        <p className="labelInputs">E-mail</p>
                        <Input inputType="email" inputClass="inputEmail" /*inputValue={emailLogin} />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" /*inputValue={passwordLogin} />
                        <Button btnType="submit" btnClass="yellowBtn" btnText="ENTRAR" />
                        <p className="isWorker">É funcionário?</p>
                        <Button btnType="button" btnClass="redBtn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
} */
