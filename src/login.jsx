import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const navega = (route) => {
    navigate(route);
  }

  return (
    <div className="login-page">
      <div className="content-wrapper">
        <div className="vector-image">
          <img src="vector_login.png" alt="Login Vector" />
        </div>
        <div className="container">
          <div className="login-form">
            <h1>Faça seu login<b id="ponto-h1">.</b></h1>
            <form>
              <input type="text" name="email" id="email" placeholder="Email" />
              <input type="password" name="senha" id="senha" placeholder="Senha" />
              <a href="#" className="forgot-password">Esqueci a Senha</a>
              <button type="submit" id="login">Entrar</button>
            </form>
            <div className="linha"></div>
            <a onClick={() => navega('/cadastre')} id="criarconta" className="create-account">Ainda não tenho uma conta.</a>
          </div>
        </div>
      </div>
      <a href="https://pt.vecteezy.com/vetor-gratis/tela-de-login">Tela De Login Vetores por Vecteezy</a>
    </div>
  );
}

export default Login;
