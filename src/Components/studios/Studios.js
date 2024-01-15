import Carrousel from "../carrousel/carrousel";
import './studios.css';

function Studios() {
    return (
        <>
            <div className='container' id='estudios'>
                <div className='gTitles'>
                    <h3 className="titles">Nosso Estúdio</h3>
                    <p className="line"></p>
                </div>
                <div className='blocoStudio'>

                    <div>
                        <h3> Conheça um pouco do nosso estúdio.</h3>
                        <p>Equipamentos de última geração, como mesas de mixagem e softwares de edição de áudio, fundamentais para a pós-produção. Ajustes finos na sincronização e na qualidade do áudio, assegurando um produto final impecável.</p>
                    </div>

                    <div>
                        <iframe src="https://www.youtube.com/embed/k55aMvlki2g?si=qJANzVYBaIkkcC-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <Carrousel />





            </div>
        </>
    )
}

export default Studios;