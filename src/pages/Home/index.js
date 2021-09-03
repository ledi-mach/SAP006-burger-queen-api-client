//import testImage from '../../assets/images/teste.png';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button/index.js';


export function Home(){

    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    return(
<div>
    <main>
        <div className="burger-img">
        <div className="divInfo">
            <h2> LOGIN</h2>
            <form>
                <div className="inputInfo">
                <input type="text" placeholder="Email" />
                <input type="password"placeholder="Digite a senha"></input>
                 </div>
               <Button btnType="submit" btnClass="orange-btn" btnText="ENTRAR" />
               </form>
            <Button btnType="button" btnClass="red-btn" btnText="CADASTRE-SE" btnOnClick={navigateToRegister}/>
        </div>
        </div>
    </main>
</div>
    )
}

 //<img src={testImage} alt="teste imagem" />