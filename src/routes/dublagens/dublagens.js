import './dublagens.css'
import { useState } from 'react';
import imgCapaDubbing from './imgCapaDubbing'


function Dublagens() {

    const [showDubbing, setShowDubbing] = useState(false)


    return (
        <>
            {!showDubbing &&
                <div className="dublagens" id="allDubbed">
                    <div id="moveToCardContainer" className='cardAllContainer'>
                        {imgCapaDubbing.map(item => (
                            <div className='cardDubbingImg'>
                                <img key={item.id} src={item.img} alt={item.alt} />
                            </div>
                        ))}

                    </div>

                    <a href="#estudios"><button type='button'  className='btnDubbing' onClick={() => setShowDubbing(!showDubbing)}>Show Less</button></a>

                </div>
                
            }

           
        </>
    )
}

export default Dublagens