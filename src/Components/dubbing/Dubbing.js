import { useState } from 'react';
import Dublagens from '../../routes/dublagens/dublagens';
import './Dubbing.css'
import imgDubbing from "./imgDubbing"

function Dubbing() {
    const [show, setShow] = useState(true)
    
    
    return (
        <>
            <div className='container' id='dubbing'>
                <div className='gTitles'>
                    <h3 className="titles">Dubbing</h3>
                    <p className="line"></p>
                </div>
                <div className='blocoDubbing'>
                    <div>
                        <h3><span>More then 80 productions</span> on major streaming platforms and television channels.</h3>
                    </div>
                    <div>
                        <div className='cardContainer'>
                            {imgDubbing.map(item => (
                                <div className='cardImg'>
                                    <img key={item.id} src={item.img} alt={item.alt} />
                                </div>
                            ))}

                        </div>

                        <a href="#moveToCardContainer"><button type='button' className='btnDubbing' onClick={() => setShow(!show)}>See More</button></a>

                    </div>
                    
                   

                </div>
                {!show && <Dublagens /> }
                
            </div>
        </>
    )
}

export default Dubbing;
