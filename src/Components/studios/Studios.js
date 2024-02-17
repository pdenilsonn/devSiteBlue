import Carrousel from "../carrousel/carrousel";
import './Studios.css';

function Studios() {
    return (
        <>
            <div className='container' id='estudios'>
                <div className='gTitles'>
                    <h3 className="titles">Our Studio</h3>
                    <p className="line"></p>
                </div>
                <div className='blocoStudio'>

                    <div>
                        <h3> Know a little about the studio</h3>
                        <p>State-of-the-art equipment, such as mixing boards and audio editing software, are essential for post-production. Fine-tuning synchronization and audio quality ensure a flawless final product.</p>
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