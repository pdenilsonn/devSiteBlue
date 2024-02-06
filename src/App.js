import './App.css';

import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/navbar';
import Services from './Components/services/services';
import Clients from './Components/clients/clients';
import Dubbing from './Components/dubbing/dubbing';
import Security from './Components/security/security';
import Studios from './Components/studios/studios';
import Pricing from './Components/formPricing/formPricing';
import About from './Components/aboutUS/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonTop />

      <div className="blocoHome">
        <p> <span>Dublado:</span> incrível <br />como o original</p>

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
          <a target="_blank" href="https://www.instagram.com/bluebird_audiovisual"><i class="fa-brands fa-instagram icone"></i></a>
          <a href="mailto:sergio.nogueira@bluebirdaudiovisual.com.br"><i class="fa-regular fa-envelope icone"></i></a>
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
        © 2024 | <span><a target="_blank" href="https://behance.net/pdenilsonn">Paulo Souza</a></span>
        </div>
      </footer>
    </div>  
  );
}


export default App;


