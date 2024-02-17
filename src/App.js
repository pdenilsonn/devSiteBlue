import './App.css';

import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/Navbar';
import Services from './Components/services/Services';
import Clients from './Components/clients/Clients';
import Dubbing from './Components/dubbing/Dubbing';
import Security from './Components/security/Security';
import Studios from './Components/studios/Studios';
import Pricing from './Components/formPricing/formPricing';
import About from './Components/aboutUS/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonTop />

      <div className="blocoHome">
        <p> <span>Dubbed:</span> Amazing <br />as the original</p>

      </div>

      <Security />
      <Services />
      <Clients />
      <Dubbing />
      <Studios />
      <Pricing />
      <About />


      <footer>
        
        <div className='fcontainer'>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/bluebird_audiovisual"><i class="fa-brands fa-instagram icone"></i></a>
          <a rel="noreferrer" href="mailto:sergio.nogueira@bluebirdaudiovisual.com.br"><i class="fa-regular fa-envelope icone"></i></a>
        </div>
        <div className='fcontainer'>
        
          <p>Avenida Glaúcio Gil, 978<br></br>
          Recreio dos Bandeirantes<br></br>
          Rio de Janeiro/RJ - CEP 22765820
          </p>
        </div>
        <div className='fcontainer'>
          
          <h3>Bluebird©</h3>
        </div>
        <div>
        © 2024 | <span><a rel="noreferrer" target="_blank" href="https://behance.net/pdenilsonn">Paulo Souza</a></span>
        </div>
      </footer>
    </div>  
  );
}


export default App;


