import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import "./navbar.css";



function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className='navbar'>
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Trusted Partern</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Serviços</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Trabalhos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Estudios</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Clientes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#security"}>
                            <span className='textTitle'>Nosso Time</span>
                        </Link>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar