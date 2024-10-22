import { useEffect, useState } from "react";
import "../styles/home.css";
import FooterMenu from './FooterMenu';
import Usuarios from "./usuarios"; // Certifique-se de que o caminho está correto

function Home() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:3000/usuarios');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar usuários: ${response.status}`);
                }
                const data = await response.json();
console.log(data); // Adicione esta linha para verificar o retorno

        
                // Verifique se data é um array
                if (Array.isArray(data)) {
                    setUsuarios(data);
                } else {
                    console.error('A resposta da API não é uma lista', data);
                }
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div className="container_pai">
            <div className="container_home">
                <h1>Projetos</h1>
                <div className="container_projetos"> 
                    <img src="./imgyou.png" alt="Projeto" />
                    <img src="./imgyou.png" alt="Projeto" />
                    <img src="./imgyou.png" alt="Projeto" />
                    <img src="./imgyou.png" alt="Projeto" />
                    <img src="./imgyou.png" alt="Projeto" />
                </div>
             
                <h1>Usuários Sugeridos</h1>
              
                <Usuarios usuarios={usuarios} />  

            </div>
            <br>
            </br>
            <br>
            </br>

            <FooterMenu />
        </div>
    );
}

export default Home;
      