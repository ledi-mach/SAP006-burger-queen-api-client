
import testImage2 from '../../assets/images/teste2.png'

export function Register(){
    return(
<div>
    <main>
        <div>
            <img src={testImage2} alt="teste imagem" />

            <form>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Cadastrar salão</button>
                <button type="submit">Cadastrar cozinha</button>
            </form>
           
        </div>
    </main>
</div>
    )
}
