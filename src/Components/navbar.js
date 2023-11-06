import {FaBars, FaTimes} from "react-icons/fa";
import './Navbar.css'


function Navbar() {
    return (
        <>
        <div className="barMenu">
            <h2 className="logo">Bluebird</h2>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Security</a>
                <a href="/#">Serviços</a>
                <a href="/#">Trabalhos</a>
                <a href="/#">Estúdios</a>
                <a href="/#">Clientes</a>
                <a href="/#">Nosso Time</a>
                <button>
                    <FaTimes/>
                </button>
            </nav>
            <button className="navButton">
                    <FaBars/>
            </button>
        </div>
        </>
    )

}

export default Navbar