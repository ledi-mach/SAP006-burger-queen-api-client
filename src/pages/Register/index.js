import { useHistory } from 'react-router-dom';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import { useState } from 'react';
import React from 'react';
import './index.css';
import './responsive.css';

export function Register() {

    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }

    function navigateToMenu() {
        history.push('/menu');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const newUser = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert('campo vazio')
        } else {
            fetch('https://lab-api-bq.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: "fulano",
                    email: email,
                    password: password,
                    role: "kitchen",
                    restaurant: "testeBurger"
                })

            })

                .then(res => res.json())
                .then((json) => {
                    const token = json.token
                    localStorage.setItem("usersToken", token);
                    if (json.id === undefined) {
                        alert('deu ruim')
                    } else {
                        navigateToMenu();

                    }
                })

        }

    }

    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divRegister">
                <Button btnType="button" btnClass="backHome" btnText="← Voltar para a Home" btnOnClick={navigateToLogin}></Button>
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Register"> CADASTRO</h1>
                    <form className="formRegister">
                        <p className="labelInputs">Email</p>
                        <Input btnType="email" inputClass="inputEmail" inputValue={email}
                            inputOnChange={(event) => setEmail(event.target.value)}
                        />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" inputValue={password}
                            inputOnChange={(event) => setPassword(event.target.value)} />
                        <Button btnType="submit" btnClass="orangeBtn" id="registerBtn" btnText="CADASTRAR" btnOnClick={newUser} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
}