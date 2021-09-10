import "./index.css"
import { useHistory } from "react-router";
import { Button } from "../../components/Button"
export function PageNotFound() {

    const history = useHistory()
    function navigateToSite() {
        history.push('/');
    }

    return (
        <div className="container-center">
            <h1 className="h1">404: Página não encontrada</h1>
            <Button btnClass="back" btnText="Retorne para o site" btnOnClick={navigateToSite}></Button>
        </div>
    )
}