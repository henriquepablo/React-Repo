import './index.css';

function Botao({descricao}) {
    return (
        <div className="divButton">
            <button>{descricao}</button>
            <button>Esqueci a senha</button>
        </div>
    );
}

export default Botao;