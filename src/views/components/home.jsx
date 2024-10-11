import "../styles/home.css";
import FooterMenu from './FooterMenu';
import { Link } from 'react-router-dom';
import { FaRegCommentDots, FaPlus, FaUserEdit } from 'react-icons/fa'; // Importando ícones

function Home() {
    return (
        <div className="container_pai">
            <div className="container_home">
                <h1>Projetos</h1>
                <div className="container_projetos">
                    <img src="./imgyou.png" alt="Projeto"/>
                    <img src="./imgyou.png" alt="Projeto"/>
                    <img src="./imgyou.png" alt="Projeto"/>
                    <img src="./imgyou.png" alt="Projeto"/>
                    <img src="./imgyou.png" alt="Projeto"/>
                </div>

                <h1>Pessoas</h1>
                <div className="container_usuarios">
                    <img src="./imgperfil.jpg" alt="Perfil"/>
                    <img src="./imgperfil.jpg" alt="Perfil"/>
                    <img src="./imgperfil.jpg" alt="Perfil"/>
                    <img src="./imgperfil.jpg" alt="Perfil"/>
                    <img src="./imgperfil.jpg" alt="Perfil"/>
                </div>

                <div className="home-links">
                    <Link to="/chat" className="link-button">
                        <FaRegCommentDots className="icon"/> Chat
                    </Link>
                    <Link to="/add-projeto" className="link-button">
                        <FaPlus className="icon"/> Adicionar Projeto
                    </Link>
                    <Link to="/personalizar-perfil" className="link-button">
                        <FaUserEdit className="icon"/> Personalizar Perfil
                    </Link>
                </div>
            </div>

            <FooterMenu />
        </div>
    );
}

export default Home;
