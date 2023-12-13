import { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state={ clicked: false}
    render() {
    return (
        <>
            <nav>
                <a href="#"><img src="../img/logo.svg" />
                        
                </a>

                <div>
                    <ul id='navbar'>
                        <li href="">
                            Segurança
                        </li>
                        <li href="">
                            Serviços
                        </li>
                        <li href="">
                            Clientes
                        </li>
                        <li href="">
                            Dublagem
                        </li>
                        <li href="">
                            Nossos Estúdios
                        </li>
                    </ul>
                </div>

                <div id="mobile">
                    <i id="bar" className={
                        this.state.clicked ? 'fas fa-times' : 'fas fa-bars'
                    } />
                </div>
            </nav>

        </>
    )
}}

export default Navbar