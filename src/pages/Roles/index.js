import imgBurger from '../../assets/images/burger-background.png';
import { Button } from '../../components/Button/index.js';
import { useHistory } from 'react-router';
import "./index.css";


export function Roles() {
    const history = useHistory()
    function navigateToMenu() {
        history.push('/menu');
    }

    function navigateToKitchen() {
        history.push('/cozinha');
    }

    return (
        <main id='roles'>
            <img src={imgBurger} className="imgBurgerRoles" alt="imgburger" />
            <h1 className="roleH1">Ir para:</h1>
            <div className="divBtnRoles">
                <Button className="btnRoles" id="Attendance" onClick={navigateToMenu}>Salão</Button>
                <Button className="btnRoles" id="Kitchen" onClick={navigateToKitchen}>Cozinha</Button>
            </div>
        </main >
    )
}