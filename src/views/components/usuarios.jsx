import "../styles/home.css";

function Usuarios({ usuarios }) {
    return (
        <div className="container_usuarios">
            {usuarios.length > 0 ? (
                usuarios.map((usuarios, index) => (
                    <img key={index} src="./imgperfil.jpg" alt={usuarios.nomeCompleto} />
                ))
            ) : (
                <p>Nenhum usuário disponível.</p>
            )}
        </div>
    );
}

export default Usuarios;
