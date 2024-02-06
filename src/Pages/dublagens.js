import Navbar from "../Components/menuBar/navbar"

function Dublagens() {
    return (
        <>
        <Navbar />
        <h2>Alou mundo!</h2>

        <div className='cardContainer'>
                        {imgDubbing.map(item => (
                            <div className='cardImg'>
                                <img key={item.id} src={item.img} alt={item.alt} />
                            </div>
                        ))}

                    </div>
        </>
    )
}

export default Dublagens