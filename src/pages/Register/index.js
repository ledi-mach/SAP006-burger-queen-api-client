import { useHistory } from 'react-router-dom';
import imgBurger from '../../assets/images/burger-background.png';
import logo from '../../assets/images/logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'

export function Register() {

    const history = useHistory()

    function navigateToLogin() {
        history.push('/login');
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
                        <Input btnType="email" inputClass="inputEmail" /*inputValue={emailLogin}*/ />
                        <p class="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="inputPassword" /*inputValue={passwordLogin}*/ />
                        <Button btnType="submit" btnClass="orangeBtn" btnText="CADASTRAR" />
                    </form>
                </fieldset>
            </div>
        </main>
    )
}
