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
        <p>Services</p>

      </div>

      <div className='blocoContent' id='services'>
        <p>Services</p>

      </div>

      <div className='blocoContent' id='services'>
        <p>Services</p>

      </div>

      <div className='blocoContent' id='services'>
        <p>Services</p>

      </div>


    </div>
  );
}


export default App;


