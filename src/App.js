import './App.css';
import ButtonTop from './Components/buttonTop';
import Navbar from "./Components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <ButtonTop></ButtonTop>
      <div className="menu">
        <p>B l u e b i r d</p>
        <p>[--]</p>
      </div>

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
    </div>
  );
}


export default App;


