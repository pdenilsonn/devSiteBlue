import './Studios.css';

function Studios() {
    return (
        <>
            <div className='container' id='estudios'>
                <div className='gTitles'>
                    <h3 className="titles">Nossos Estúdios</h3>
                    <p className="line"></p>
                </div>
                <div className='blocoContent'>
                    <div>
                        <h3> Alou ALou maciano</h3>
                    </div>
                    
                        <div className='palyer'>
                        <iframe  src="https://www.youtube.com/embed/k55aMvlki2g?si=qJANzVYBaIkkcC-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                        <div className='galery'>
                            <img src='#'></img>
                            <img src='#'></img>
                            <img src='#'></img>
                            <img src='#'></img>
                            <img src='#'></img>
                        </div>
                    

                </div>
            </div>
        </>
    )
}

export default Studios;