import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'
import imgBurger from '../../assets/images/figma-burger.png';
import burgerLogo from '../../assets/images/burger-logo.png';


export function Home() {

    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    return (
        <div>
            <main>
                <img src={burgerLogo}  className="burgerLogo" alt="logo" />
                <img src={imgBurger} className="imgBurger" alt="imgburger" />
                <div className="divInfo">
                    <h1> LOGIN</h1>
                    <form>
                        <p class="labelInputs">Email</p>
                        <Input btnType="text" inputClass="inputEmail" /*inputValue={emailLogin}*/ /> 
                        <p class="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="passwordUser" /*inputValue={passwordLogin}*/ />
                        <Button btnType="submit" btnClass="orangeBtn" btnText="ENTRAR" />
                    </form>
                    <p className="isWorker">É funcionário?</p>
                    <Button btnType="button" btnClass="redBtn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister} />
                </div>
            </main>
        </div>
    )
}
