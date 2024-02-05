import { Component } from 'react';
import './navbar.css';
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
                    <a href="#"> <img src={logo} />
                    </a>

                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <a href="#servicos"> Serviços </a>
                            </li>
                            <li>
                                <a href="#clientes"> Clientes </a>
                            </li>
                            <li>
                                <a href="#dubbing"> Dublagem </a>
                            </li>
                            <li>
                                <a href="#estudios"> Nossos Estúdios </a>
                            </li>
                            <li>
                                <a href="#pricing"> Orçamentos </a>
                            </li>
                            <li>
                                <a href="#sobreNos"> Sobre Nós </a>
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