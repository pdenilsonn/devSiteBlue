import './App.css';



import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/navbar';
import Services from './Components/services/services';
import Clients from './Components/clients/clients';
import Dubbing from './Components/dubbing/dubbing';
import Security from './Components/security/security';
import Studios from './Components/studios/studios';
import Pricing from './Components/formPricing/formPricing';

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
      

      <div className='container' id='sobreNos'>
        <div className='gTitles'>
          <h3 className="titles">Sobre Nós</h3>
          <p className="line"></p>
        </div>
        <div className='blocoContent' >
          <p>
            Há mais de 10 anos no Mercado, a BluebirdRMP é especializada em serviços de pós-produção e localização para a Indústria Cinematográfica, TV, Streaming e Games. Atualmente conta com estúdios no Rio de Janeiro e na Florida, nos Estados Unidos, criando soluções enxutas e objetivas para as mais variadas demandas do audiovisual.
          </p>
        </div>
      </div>




      {/* Esse container é para o formulário de envio de vozes 
      <div className='container' id='suaVoz'>
        <div className='gTitles'>
          <h3 className="titles">Sua voz</h3>
          <p className="line"></p>
        </div>
        <div className='blocoContent'>
          <p> Você é dublador? Queremos ouvir sua voz! Nos envie uma amostra ou seu portfólio, você pode está em nosso próximo projeto.</p>
        </div>

        <div className='containerForm'>
          <form>
            <input type='text' placeholder='Seu Nome'></input>
            <input type='text' placeholder='Sobrenome'></input>
            <input type='email' placeholder='Sua e-mail'></input>
            <input type='text' placeholder='Fale sobre você'></input>
            <button type='button'> Enviar </button>
          </form>
        </div>

      </div>
      */}

      <footer>
        <div className='container'>
          <p>Todos os direitos reservados</p>
          <h3>Bluebird©</h3>
        </div>
        

      </footer>
    </div>
  );
}


export default App;


