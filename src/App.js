import './App.css';
import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/Navbar';
import Services from './Components/services/Services';
import Clients from './Components/clients/Clients';
import Dubbing from './Components/dubbing/Dubbing';
import Security from './Components/security/Security'
import Studios from './Components/studios/Studios';

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

      <div id='sobreNos'>
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

      {/* Esse container é para o formulário de envio de vozes */}
      <div id='contato'>
        <div className='gTitles'>
          <h3 className="titles">Sua voz</h3>
          <p className="line"></p>
        </div>
        <div className='blocoContent'>
          <p> Você dubla? Queremos ouvir sua voz! Nos envie uma amostra, você pode está em nosso próximo projeto.</p>
        </div>

        <form>
          <input type='text' placeholder='Seu Nome'>
          </input>
          <input type='email' placeholder='Sua e-mail'></input>
          <input type='text' placeholder='Fale sobre você'></input>
          <button type='button'> Enviar </button>
        </form>

      </div>

      <footer>
        <span>
          Contato;
          (21)993949090
          mail@mail.com
        </span>

      </footer>
    </div>
  );
}


export default App;


