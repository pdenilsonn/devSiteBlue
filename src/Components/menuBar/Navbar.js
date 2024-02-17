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
            <div>
                <nav>
                    <a href="#"> <img src={logo} />
                    </a>

                    <div>
                        <ul  id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <a href="#servicos"> Services </a>
                            </li>
                            <li>
                                <a href="#clientes"> Clients </a>
                            </li>
                            <li>
                                <a href="#dubbing"> Dubbing </a>
                            </li>
                            <li>
                                <a href="#estudios"> Studio </a>
                            </li>
                            <li>
                                <a href="#pricing"> Request Quote </a>
                            </li>
                            <li>
                                <a href="#sobreNos"> About Us </a>
                            </li>


                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={
                            this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
                        />
                    </div>

                </nav>

            </div>
        )

    }
}


export default Navbar