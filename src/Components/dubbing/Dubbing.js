import './dubbing.css'
import imgDubbing from "./imgDubbing"

function Dubbing() {
    return (
        <>
            <div className='container' id='dubbing'>
                <div className='gTitles'>
                    <h3 className="titles">Dublagem</h3>
                    <p className="line"></p>
                </div>
                <div className='blocoDubbing'>
                    <h3><span>Mais de 80 produções</span> nas principais plataformas de streaming e canais de televisão.</h3>
                    <div className='cardContainer'>
                        {imgDubbing.map(item => (
                            <div className='cardImg'>
                                <img key={item.id} src={item.img} alt={item.alt} />
                            </div>
                        ))}

                    </div>
                    
                        <button className='btnDubbing'>Ver mais</button>
                    


                </div>
            </div>
        </>
    )
}

export default Dubbing;
