import imgBurger from '../../assets/images/figma-burger.png';
import burgerLogo from '../../assets/images/burger-logo.png';
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js'

export function Register(){
    return(
<div>
    <main>
    <img src={burgerLogo}  className="burgerLogo" alt="logo" />
    <img src={imgBurger} className="imgBurger" alt="imgburger" />
    <div className="divRegister">
                    <h1> CADASTRO</h1>
                    <form>
                        <p class="labelInputs">Email</p>
                        <Input btnType="text" inputClass="inputEmail" /*inputValue={emailLogin}*/ /> 
                        <p class="labelInputs">Senha</p>
                        <Input inputType="password" inputClass="passwordUser" /*inputValue={passwordLogin}*/ />
                        <Button btnType="submit" btnClass="orangeBtn" btnText="CADASTRAR" />
                    </form>
                </div>
    </main>
</div>
    )
}
