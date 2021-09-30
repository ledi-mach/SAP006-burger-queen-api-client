
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import './index.css';
import './responsive.css';
import validation from '../../services/React/validateInfo.js';

export function Login() {

    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    function navigateToMenu(){
        history.push('/menu')
    }
    function navigateToKitchen(){
        history.push('/cozinha')
    }

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setErrors(validation(values))
        fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then((json) => {
                const token = json.token
                const id = json.id
                const role = json.role
                localStorage.setItem("usersToken", token);
                if (token !== null && id !== null && role === 'hall') {
                    navigateToMenu()
                } else if(token !== null && id !== null && role === 'kitchen') {
                    navigateToKitchen()
                }
            })
    }

    return (
        <main className='mainLogin'>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />

            <div className="divInfo">
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Login">LOGIN</h1>
                    <form className="form-wrapper">
                        <div className="divEmail">
                            <p className="labelInputs">E-mail</p>
                            <Input
                                type="email"
                                name="email"
                                inputClass="inputEmail"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="msgErro">{errors.email}</p>}
                        </div>
                        
                        <div className="divPassword">
                            <p className="labelInputs">Senha</p>
                            <Input
                                type="password"
                                name="password"
                                inputClass="inputPassword"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="msgErro">{errors.password}</p>}
                        </div>

                        <Button
                            type="submit"
                            className="yellowBtn"
                            id="signInBtn"
                            onClick={handleFormSubmit}
                        >ENTRAR</Button>
                        <p className="isWorker">É funcionário?</p>

                        <Button
                            type="button"
                            className="redBtn"
                            id="signUpBtn"
                            onClick={navigateToRegister}
                        >CADASTRE-SE</Button>

                    </form>
                </fieldset>
            </div>
        </main>
    )
}
