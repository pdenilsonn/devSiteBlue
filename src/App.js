import './App.css';
import ButtonTop from './Components/buttonTop';
import Navbar from './Components/menuBar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonTop />

      <div className="blocoHome">
        <h3> Dublado: incrível <br />como o original</h3>
        <div className=""></div>
      </div>

      <div className="blocoContent" id="security">
        <div>
          <h3 className="titles">Trusted Partner</h3>
          <p className="line"></p>
        </div>
        <div>
          <img src="#" />
        </div>
        <div>
          <p>Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros.
            Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e engenheiros. Oferecemos serviços em português, inglês e espanhol. Contamos com uma acústica de alta qualidade e.</p>
        </div>
      </div>

      <div className='blocoContent' id='services'>
        <div>
          <h3 className="titles">Serviços</h3>
          <p className="line"></p>
        </div>

      </div>

      <div className='blocoContent' id='clients'>
        <div>
          <h3 className="titles">Clientes</h3>
          <p className="line"></p>
        </div>

      </div>

      <div className='blocoContent' id='dubbing'>
        <div>
          <h3 className="titles">Dublagem</h3>
          <p className="line"></p>
        </div>

      </div>

      <div className='blocoContent' id='studios'>
        <div>
          <h3 className="titles">Nossos Estúdios</h3>
          <p className="line"></p>
        </div>
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
            <button> Enviar </button>
          </form>
        </div>
      </div>


    </div>
  );
}


export default App;


