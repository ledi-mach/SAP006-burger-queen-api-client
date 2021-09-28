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

    //function navigateToRoles() {
      //  history.push('/roles');
    //}

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
                if (json.id !== undefined && role==="hall") {
                    //navigateToRoles();
                    navigateToMenu()
                } else if(json.id !== undefined && role==="kitchen") {
                    navigateToKitchen()
                }
            })
    }
    
    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divRegister">
                <Button type="button" className="backHome" onClick={navigateToLogin}>← Voltar para a Home</Button>
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

/*
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

    function navigateToRoles() {
        history.push('/roles');
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
                    name: null,
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
                        navigateToRoles();

                    }
                })

        }

    }

    return (
        <main>
            <img src={imgBurger} className="imgBurger" alt="imgburger" />
            <img src={logo} className="burgerLogo" alt="logo" />
            <div className="divRegister">
                <Button type="button" className="backHome" onClick={navigateToLogin}>← Voltar para a Home</Button>
                <fieldset className="formFieldsetLogin">
                    <h1 className="h1Register"> CADASTRO</h1>
                    <form className="formRegister">
                        <p className="labelInputs">Email</p>
                        <Input
                        type="email"
                        name="email"
                        inputClass="inputEmail"
                         value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <p className="labelInputs">Senha</p>
                        <Input
                        type="password"
                        inputClass="inputPassword"
                        value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                        <Button type="submit"
                        className="orangeBtn"
                        id="registerBtn"
                        onClick={newUser}>CADASTRAR</Button>
                    </form>
                </fieldset>
            </div>
        </main>
    )
}
*/