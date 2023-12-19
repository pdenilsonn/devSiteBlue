import { Component } from 'react';
import './Navbar.css';
import logo from '../../img/logo.webp';



class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <a href="https://www.bluebirdaudio.com.br"> <img src={logo} />
                    </a>

                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
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
                                Sobre Nós
                            </li>
                            <li href="">
                                Nossos Estúdios
                            </li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={
                            this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                        />
                    </div>

                </nav>

            </>
        )
    }
}

export default Navbar