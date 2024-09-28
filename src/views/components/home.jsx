import "../styles/home.css";
import FooterMenu from './FooterMenu';

function Home(){

    return(

        <div className="container_pai">
            <div className="container_home">
            <h1> Projetos </h1>
                <div className="container_projetos"> 
                    <img src="./imgyou.png"/>
                    <img src="./imgyou.png"/>
                    <img src="./imgyou.png"/>
                    <img src="./imgyou.png"/>
                    <img src="./imgyou.png"/>
                </div>
                <h1> Pessoas </h1>
                <div className="container_usuarios">
                    <img src="./imgperfil.jpg"/>
                    <img src="./imgperfil.jpg"/>
                    <img src="./imgperfil.jpg"/>
                    <img src="./imgperfil.jpg"/>
                    <img src="./imgperfil.jpg"/>
                </div>
            </div>

            <FooterMenu />
        </div>

    )
}

export default Home