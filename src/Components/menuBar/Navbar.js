import { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <a href="#"><img src="../img/logo.svg" /> </a>

                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
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
                            <li id='contato'>
                                <span>Instagram</span>
                                <span>sergio.nogueira@bluebirdaudiovisual.com.br</span>
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