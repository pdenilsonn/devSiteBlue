import './App.css';
import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/Navbar';
import Services from './Components/services/Services';
import Clients from './Components/clients/Clients';
import Dubbing from './Components/dubbing/Dubbing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonTop />

      <div className="blocoHome">
        <p> <span>Dublado:</span> incrível <br/>como o original</p>
        
      </div>
      
      

      <div id="seguranca">
        <div className='gTitles'>
          <h3 className="titles">Trusted Partner</h3>
          <p className="line"></p>
        </div>
        <div className="blocoContent">
          <img src="https://www.ttpn.org/wp-content/themes/mpaa/images/svg/tpn-nav-wtca.png" />


          <p>
            Levamos a proteção dos conteúdos ao mais alto nível e somos orgulhosos parceiros da Trusted Partner Network (TPN). O protocolo, baseado nas melhores práticas de segurança, nos permite manter seus conteúdos protegidos. Com a aplicação dos procedimentos e recomendações da TPN, garantimos serviços de alta qualidade mantendo a segurança física e digital em todas as etapas.</p>
        </div>
      </div>

      <Services></Services>

      <Clients></Clients>

      {/* Na home somente as princípais aparecem, com um botão que leva para uma página com todas. Criar uma página contendo todas as produções já feita */}
      <Dubbing></Dubbing>

      <div id='estudios'>
        <div className='gTitles'>
          <h3 className="titles">Nossos Estúdios</h3>
          <p className="line"></p>
        </div>
        <div className='blocoContent'>

        </div>
      </div>

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


