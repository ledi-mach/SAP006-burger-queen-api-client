import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/index.js';
import imgBurger from '../../assets/images/figma-burger.png';


export function Home(){

    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    return(
<div>
    <main>
        <img src={imgBurger} alt="imgburger" />
        <div className="divInfo">
            <h2> LOGIN</h2>
            <form>
                <div className="inputInfo">
                <p class="labelInputs">Email</p>
                <input type="text"/>
                <p class="labelInputs">Senha</p>
                <input type="password"></input>
                 </div>
               <Button btnType="submit" btnClass="orange-btn" btnText="ENTRAR" />
               </form>
               <p className="isWorker">É funcionário?</p>
            <Button btnType="button" btnClass="red-btn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister}/>
        </div>
    </main>
</div>
    )
}
