import './Security.css'

function Security() {
    return (
        <>
            <div className="container" id="seguranca">
                <div className='gTitles'>
                    <h3 className="titles">Trusted Partner Network</h3>
                    <p className="line"></p>
                </div>
                <div className="blocoContent">
                    <div className="contentText">

                        <img alt="TPN logo" src="https://www.ttpn.org/wp-content/themes/mpaa/images/svg/tpn-nav-wtca.png" />



                        <div>
                            <h3 className='titleSecurity'>All your <span> Content protected</span> from start to finish.</h3>
                            <p>

                                We take content protection to the highest level and are proud partners of the Trusted Partner Network (TPN). The protocol, based on best security practices, allows us to keep your content secure. By implementing TPN's procedures and recommendations, we ensure high-quality services while maintaining physical and digital security at all stages.</p>
                        </div>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/qlQWuKwJZy0?si=7TCvdElzOYp5Zb4r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Security;