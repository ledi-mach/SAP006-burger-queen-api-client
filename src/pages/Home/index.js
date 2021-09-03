import testImage from '../../assets/images/teste.png';
import { useHistory } from 'react-router-dom';


export function Home(){

    const history = useHistory()

    function navigateToRegister() {
        history.push('/register');
    }

    return(
<div>
    <main>
        <div>
            <img src={testImage} alt="teste imagem" />

            <form>
                <input type="text" placeholder="Email" />
                <button type="submit">Fazer login</button>
             
            </form>
           <button onClick= {navigateToRegister} className="register-btn">Cadastrar</button>
        </div>
    </main>
</div>
    )
}
//   