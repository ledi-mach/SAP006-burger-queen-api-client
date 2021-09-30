import { useHistory } from 'react-router-dom';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import { useState } from 'react';
import React from 'react';
import './index.css';
import './responsive.css';
import validation from '../../services/React/validateInfo';

export function Register() {

    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }

    function navigateToMenu() {
        history.push('/menu')
    }
    function navigateToKitchen() {
        history.push('/cozinha')
    }

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "",
        password: "",
        role: "",
        restaurant: "testeBurger"
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

        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)

        })
            .then(res => res.json())
            .then((json) => {
                const token = json.token
                const role = json.role
                localStorage.setItem("usersToken", token);
                localStorage.setItem("role", role)
                if (json.id !== undefined && role === "hall") {
                    navigateToMenu()
                } else if (json.id !== undefined && role === "kitchen") {
                    navigateToKitchen()
                }
            })
    }

    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />

            <div className="divRegister">
                <Button type="button" className="backHome"
                    onClick={navigateToLogin}>← Voltar para a Home</Button>

                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Register"> CADASTRO</h1>
                    <form className="formRegister">
                        <p className="labelInputs">Email</p>
                        <Input
                            type="email"
                            name="email"
                            inputClass="inputEmail"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="msgErro">{errors.email}</p>}

                        <p className="labelInputs">Senha</p>
                        <Input
                            type="password"
                            name="password"
                            inputClass="inputPassword"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="msgErro">{errors.password}</p>}

                        <div className="radioBtn">
                            <div className="radioBtn1">
                                <label className="roleLabel">
                                    <input type="radio" name="role" value="hall"
                                        onChange={handleChange}
                                    />
                                    &nbsp;Salão
                                </label>
                            </div>

                            <div className="radioBtn2">
                                <label className="roleLabel">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="kitchen"
                                        onChange={handleChange}
                                    />
                                    &nbsp;Cozinha
                                </label>
                            </div>
                        </div>
                        {errors.role && <p className="msgErro">{errors.role}</p>}

                        <Button type="submit"
                            className="orangeBtn"
                            id="registerBtn"
                            onClick={handleFormSubmit}>CADASTRAR</Button>
                    </form>
                </fieldset>
            </div>
        </main>
    )
}
