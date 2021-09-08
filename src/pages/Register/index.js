import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import "./index.css";
import './responsive.css';

export function Register() {

    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const createUser = () => {

        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                'email': `${emailLogin}`,
                'password': `${passwordLogin}`
            }
        }).then(res => res.json())
    }
    
    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divRegister">
                <Button btnType="button" btnClass="backHome"
                    btnText="← Voltar para a Home" btnOnClick={navigateToLogin}></Button>
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Register"> CADASTRO</h1>
                    <form className="formRegister">
                        <p className="labelInputs">Email</p>
                        <Input inputType="email"
                            inputClass="inputEmail"
                            inputValue={emailLogin}
                            inputOnChange={e => setEmailLogin(e.target.value)}
                        />
                        <p class="labelInputs">Senha</p>
                        <Input inputType="password"
                            inputClass="inputPassword"
                            inputValue={passwordLogin}
                            inputOnChange={e => setPasswordLogin(e.target.value)} />
                        <Button btnType="button" btnClass="orangeBtn" btnText="CADASTRAR"
                            s btnOnClick={createUser} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
}
