import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'

export function Register() {


    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
    }

    const baseURL = 'https://lab-api-bq.herokuapp.com';
    const apiUsers = `${baseURL}/users`;
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [employeePassword, setEmployeePassword] = useState('');
    //precisa criar um input para a o cargo do funcionário.


    fetch(apiUsers, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({
            name: "user1",
            email: employeeEmail,
            password: employeePassword,
            role: "kitchen",
            restaurant: "testing-bulger",
          
        }),
    }).then(res => {
        return res.json();
    }).catch((erro) => {
        alert(erro)
    })

    /* const createUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: employeeEmail,
                restaurant: 'test-burger',
                password: employeePassword,
            }),
        }
        fetch(apiUsers, requestOptions)
            .then(response => response.json())
            
            .catch((erro) => {
                alert(erro)
            })
    }  */

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
                        <Input btnType="email" inputClass="inputEmail" inputValue={employeeEmail}
                            inputOnChange={e => setEmployeeEmail(e.target.value)}
                            required
                        />

                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" inputValue={employeePassword}
                            inputOnChange={e => setEmployeePassword(e.target.value)}
                            required
                             />

                        <Button btnType="submit" btnClass="orangeBtn" btnText="CADASTRAR"
                            //btnOnClick={createUser} 
                            />
                    
                    </form>
                   
                </fieldset>
            </div>
        </main>
       
    )
}
