import './App.css';
import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/Navbar';
import Services from './Components/services/Services';
import Clients from './Components/clients/Clients';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonTop />

      <div className="blocoHome">
        <h3> Dublado: incrível <br />como o original</h3>
        <div className=""></div>
      </div>

      <div className="blocoContent" id="seguranca">
        <div>
          <h3 className="titles">Trusted Partner</h3>
          <p className="line"></p>
        </div>
        <div>
          <img src="../img/homepageBackground.webp" />
        </div>
        <div>
          <p>Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros.
            Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e.</p>
        </div>
      </div>
    
      <Services></Services>

      <Clients></Clients>

      <div className='blocoContent' id='dubbing'>
        <div>
          <h3 className="titles">Dublagem</h3>
          <p className="line"></p>
        </div>

      </div>

      <div className='blocoContent' id='estudios'>
        <div>
          <h3 className="titles">Nossos Estúdios</h3>
          <p className="line"></p>
        </div>
      </div>

      <div className='blocoContent' id='sonreNos'>
        <div>
          <h3 className="titles">Sobre Nós</h3>
          <p className="line"></p>
        </div>
        <p>
        Há mais de 10 anos no Mercado, a BluebirdRMP é especializada em serviços de pós-produção e localização para a Indústria Cinematográfica, TV, Streaming e Games. Atualmente conta com estúdios no Rio de Janeiro e na Florida, nos Estados Unidos, criando soluções enxutas e objetivas para as mais variadas demandas do audiovisual.
        </p>
      </div>

      {/* Esse container é para o formulário de envio de vozes */}
      <div className='blocoContent' id='contato'>
        <div>
          <h3 className="titles">Sua voz</h3>
          <p className="line"></p>
        </div>
        <div>
          <p> Você dubla? Queremos ouvir sua voz! Nos envie uma amostra, você pode está em nosso próximo projeto.</p>
        </div>
        <div>
          <form>
            <input type='text' placeholder='Seu Nome'>
            </input>
            <input type='email' placeholder='Sua e-mail'></input>
            <input type='text' placeholder='Fale sobre você'></input>
            <button type='button'> Enviar </button>
          </form>
        </div>
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


