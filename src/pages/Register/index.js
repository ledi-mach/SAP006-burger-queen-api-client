import { useHistory } from 'react-router-dom';
import imgBurger from '../../assets/images/burger-background.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import validation from '../../services/React/validateInfo';
import React, { useState } from 'react';
import './index.css';
import './responsive.css';


export function Register() {

    const history = useHistory()

    const navigateToLogin = () => {
        history.push('/login');
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
                    history.push('/menu')
                } else if (json.id !== undefined && role === "kitchen") {
                    history.push('/cozinha')
                }
            })
    }

    return (
        <main>
            <Button type="button" className="backHome"
                onClick={navigateToLogin}>← Voltar para a Home</Button>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <div className="logo">
                <img src={imgBurger} className="imgLogo" alt="imgburger" />
                <h1 className="wood">WOOD</h1>
                <h1 className="burger">BURGERS</h1>
            </div>
            <div className="divRegister">
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
            <footer>
                <p className="pFooter">copyright@2021 |
                    feito por <a href="https://github.com/LarissaSiq" target="blank">Larissa Siqueira</a> e <a
                        href="https://github.com/ledi-mach" target="new">Lediane Machado</a></p>
            </footer>
        </main>
    )
}
