import { useHistory } from 'react-router-dom';
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
                        <Input inputType="email" inputClass="inputEmail" /*inputValue={emailLogin}*/ />
                        <p className="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" /*inputValue={passwordLogin}*/ />
                        <Button btnType="submit" btnClass="yellowBtn" btnText="ENTRAR" />
                        <p className="isWorker">É funcionário?</p>
                        <Button btnType="button" btnClass="redBtn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister} />
                    </form>
                </fieldset>
            </div>
        </main>
    )
}
