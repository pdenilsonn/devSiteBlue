import './dublagens.css'
import imgCapaDubbing from './imgCapaDubbing'
import Navbar from '../../Components/menuBar/navbar'

function Dublagens() {
    return (
        <div>
            <div className='cardAllContainer'>
                {imgCapaDubbing.map(item => (
                    <div className='cardImg'>
                        <img key={item.id} src={item.img} alt={item.alt} />
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Dublagens