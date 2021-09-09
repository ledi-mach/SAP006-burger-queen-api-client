import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
<<<<<<< HEAD
import "./index.css";
import './responsive.css';
=======
import { useState } from 'react';
import React from 'react';
>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48

export function Register() {

    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

<<<<<<< HEAD
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
    
=======
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
                    'accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `email=${email}&password=${password}&role="kitchen"&restaurant=testeBurger`
               /* body: JSON.stringify({  //Ver pq o json.stringify não está funcionando aqui
                    email: email,
                    password: password,
                    role:"kitchen",
                    restaurant:"testeBurger"
                })*/
               
            })
            
            
                .then(res => res.json())
                .then((json) => {
                    if (json.id === undefined) {
                        alert('deu ruim')
                    } else {
                        console.log(json.id)
                        navigateToMenu();

                    }
                })
                
        }
        
    }

>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48
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
<<<<<<< HEAD
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
=======
                        <Input btnType="email" inputClass="inputEmail" inputValue={email}
                            inputOnChange={(event) => setEmail(event.target.value)} 
                            />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" inputValue={password}
                            inputOnChange={(event) => setPassword(event.target.value)} />
                        <Button btnType="submit" btnClass="orangeBtn" btnText="CADASTRAR" btnOnClick={newUser} />
>>>>>>> 32af6e2a886dcac4b5ba9a9e2f84c41145532f48
                    </form>
                </fieldset>
            </div>
        </main>
    )
}

//const apiURL = 'https://lab-api-bq.herokuapp.com';
 // const apiUsers = `${apiURL}/users`;


/*fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: { 'Conten-Type': 'application/json' },
    body: JSON.stringify({
        name: 'user2',
        email: 'lala@gmail.com',
        password: 'mostarda',
        role: 'kitchen',
        restaurant: 'teste-burger-lab',

    })
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log(error)) */