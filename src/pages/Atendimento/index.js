import { useHistory } from "react-router-dom"


export function Attendance() {

    const history = useHistory()

    function navigateToMenu() {
        history.push('/menu');
    }

    return (
        <div>
            <h1>ATENDIMENTO</h1>
            <button onClick={navigateToMenu} className="btn-menu"> Ir para menu </button>
        </div>
    )
}