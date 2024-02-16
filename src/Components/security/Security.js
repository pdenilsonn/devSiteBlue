import './security.css'

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
                            Levamos a proteção dos conteúdos ao mais alto nível e somos orgulhosos parceiros da Trusted Partner Network (TPN). O protocolo, baseado nas melhores práticas de segurança, nos permite manter seus conteúdos protegidos. Com a aplicação dos procedimentos e recomendações da TPN, garantimos serviços de alta qualidade mantendo a segurança física e digital em todas as etapas.</p>
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