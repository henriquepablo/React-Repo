import './index.css';

function Form() {
    return (
        <div>
            <form >
          
                <label>
                    User: 
                    <input type="text" placeholder="Digite seu usuário"/>
                </label>
          
                <label>
                    Password:  
                    <input type="password" placeholder="Digite sua Senha"/>
                </label>
            </form>
        </div>
    );
}

export default Form;