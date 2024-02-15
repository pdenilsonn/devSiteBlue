import "./formPricing.css"
import { useState } from 'react'
import emailjs from '@emailjs/browser'


function FormPricing() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [busName, setBusName] = useState('');
    const [tel, setTel] = useState('');
    const [project, setProject] = useState('');
    const [checkboxesProject, setCheckboxesProject] = useState([]);
    const [checkboxesMidia, setCheckboxesMedia] = useState([]);
    const [about, setAbout] = useState('');
    

    // agrupar em array Tipos de Seriços
    const handleCheckboxProjectChange = (value) => {
        // Verifica se o valor já está no array
        if (checkboxesProject.includes(value)) {
            // Se estiver, remove o valor
            setCheckboxesProject(checkboxesProject.filter((item) => item !== value));
        } else {
            // Se não estiver, adiciona o valor
            setCheckboxesProject([...checkboxesProject, value]);
        }
    }

    // agrupar em array escolhas de Tipos de Midia
    const handleCheckboxMediaChange = (value) => {
        // Verifica se o valor já está no array
        if (checkboxesMidia.includes(value)) {
            // Se estiver, remove o valor
            setCheckboxesMedia(checkboxesMidia.filter((item) => item !== value));
        } else {
            // Se não estiver, adiciona o valor
            setCheckboxesMedia([...checkboxesMidia, value]);
        }
    }



    // mecanismo de envio do formulário para API mail.js
    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_name: fname,
            lname: lname,
            email: email,
            tel: tel,
            bus_name: busName,
            tel: tel,
            project: project,
            service: checkboxesProject,
            media: checkboxesMidia,
            message: about,
        }

        emailjs.send("service_7hhy3py", "template_ugexyne", templateParams, "1FIzvMgllN_YFWFel")
            .then((response) => {
                console.log('Email Enviando', response.status, response.text)
                setFname('')
                setLname('')
                setEmail('')
                setBusName('')
                setTel('')
                setProject('')
                setCheckboxesProject([])
                setCheckboxesMedia([])
                setAbout('')
            }, (err) => {
                console.log("erro", err)
            })
    }



    return (
        <div className="container" id="pricing">
            <div className='gTitles'>
                {/*<h3 className="titles">Formulário de Orçamento</h3> */}
                <p className="line"></p>
            </div>
            <div className="formContainer">
                <div className="formContent">
                    <h2>Peça já um orçamento para seu projeto!</h2>
                    <h3>Receba uma proposta ainda hoje.</h3>
                    <p>- Comprometimento total com seu prazo.</p>
                    <p>- Qualidade profissional garantida.</p>
                    <p>- Melhor preço do mercado.</p>
                </div>

                <form className="form" onSubmit={sendEmail}>

                    <div>
                        <label className="title"><strong>Sobre você</strong></label>
                        <p className="underline"></p>
                    </div>

                    <fieldset>
                        <div>
                            <label for="fname">Nome</label><br></br>
                            <input
                                placeholder="Nome"
                                type="text"
                                id="fname"
                                name="fname"
                                onChange={(e) => setFname(e.target.value)}
                                value={fname}
                                required />
                        </div>
                        <div>
                            <label for="lname">Sobrenome</label><br></br>
                            <input
                                placeholder="Sobrenome"
                                type="text"
                                id="lname"
                                name="lname"
                                onChange={(e) => setLname(e.target.value)}
                                value={lname}
                                required />
                        </div>

                        <div>
                            <label for="email">Seu e-mail</label><br></br>
                            <input
                                placeholder="E-mail"
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required />
                        </div>

                        <div>
                            <label for="text">Nome da Empresa</label><br></br>
                            <input
                                placeholder="Nome da Empresa"
                                type="text"
                                id="busName"
                                name="busName"
                                onChange={(e) => setBusName(e.target.value)}
                                value={busName} />
                        </div>

                        <div>
                            <label for="tel">Telefone</label><br></br>
                            <input
                                placeholder="(00)00000-0000"
                                type="tel"
                                id="tel"
                                name="tel"
                                onChange={(e) => setTel(e.target.value)}
                                value={tel}
                                required />
                        </div>
                    </fieldset>

                    <div className="campo">

                        <div>
                            <label className="title"><strong>Qual o tipo do seu projeto?</strong></label>
                            <p className="underline"></p>
                        </div>

                        <div className="options">

                            <label for="series">
                                <input
                                    type="radio"
                                    id="series"
                                    name="project"
                                    onChange={(e) => setProject(e.target.value)}
                                    value="Serie" />Série
                            </label>

                            <label for="longas">
                                <input
                                    type="radio"
                                    id="longa"
                                    name="project"
                                    onChange={(e) => setProject(e.target.value)}
                                    value="Longa" />Longa
                            </label>

                            <label for="musica">
                                <input
                                    type="radio"
                                    id="musica"
                                    name="project"
                                    onChange={(e) => setProject(e.target.value)}
                                    value="Musica" />Música
                            </label>

                            <label for="textos">
                                <input
                                    type="radio"
                                    id="textos"
                                    name="project"
                                    onChange={(e) => setProject(e.target.value)}
                                    value="Textos" />Textos
                            </label>


                        </div>
                    </div>

                    <div className="campo">
                        <div>
                            <label className="title"><strong>Qual o serviço você precisa?</strong></label>
                            <p className="underline"></p>

                        </div>
                        <div className="options">

                            <label for="dublagem">
                                <input
                                    type="checkbox"
                                    id="dublagem"
                                    name="service"
                                    checked={checkboxesProject.includes("Dublagem")}
                                    onChange={() => handleCheckboxProjectChange("Dublagem")}
                                    value="Dublagem" />Dublagem
                            </label>

                            <label for="audioDescricao">
                                <input
                                    type="checkbox"
                                    id="audiodescricao"
                                    name="service"
                                    checked={checkboxesProject.includes("Audio Descrição")}
                                    onChange={() => handleCheckboxProjectChange("Audio Descrição")}
                                    value="Audio Descrição" />Audio Descrição
                            </label>

                            <label for="traducao">
                                <input
                                    type="checkbox"
                                    id="traducao"
                                    name="service"
                                    checked={checkboxesProject.includes("Tradução")}
                                    onChange={() => handleCheckboxProjectChange("Tradução")}
                                    value="Tradução" />Tradução
                            </label>

                            <label for="trilhaSonora">
                                <input
                                    type="checkbox"
                                    id="trilhaSonora"
                                    name="service"
                                    checked={checkboxesProject.includes("Trilha Sonora")}
                                    onChange={() => handleCheckboxProjectChange("Trilha Sonora")}
                                    value="Trilha Sonora" />Trilha Sonora
                            </label>



                        </div>
                    </div>

                    <div className="campo">
                        <div>
                            <label className="title"><strong>Qual será o tipo da midia?</strong></label>
                            <p className="underline"></p>

                        </div>
                        <div className="options">

                            <label for="streaming">
                                <input
                                    type="checkbox"
                                    id="streaming"
                                    name="midia"
                                    checked={checkboxesMidia.includes("Streaming")}
                                    onChange={() => handleCheckboxMediaChange("Streaming")}
                                    value="Streaming" />Streaming
                            </label>

                            <label for="youTube">
                                <input
                                    type="checkbox"
                                    id="youTube"
                                    name="midia"
                                    checked={checkboxesMidia.includes("You Tube")}
                                    onChange={() => handleCheckboxMediaChange("You Tube")}
                                    value="You Tube" />YouTube
                            </label>

                            <label for="redesSociais">
                                <input
                                    type="checkbox"
                                    id="redesSociais"
                                    name="midia"
                                    checked={checkboxesMidia.includes("Redes Sociais")}
                                    onChange={() => handleCheckboxMediaChange("Redes Sociais")}
                                    value="Redes Sociais" />Redes Sociais
                            </label>

                            <label for="linear">
                                <input
                                    type="checkbox"
                                    id="linear"
                                    name="midia"
                                    checked={checkboxesMidia.includes("Linear")}
                                    onChange={() => handleCheckboxMediaChange("Linear")}
                                    value="Linear" />Linear
                            </label>



                        </div>
                    </div>

                    <div>
                        <label className="title"><strong>Alguma observação sobre seu projeto...</strong></label>
                        <p className="underline"></p>
                        <textarea
                            placeholder="caso precise, escreva algo que seja importante sobre seu projeto"
                            row="5"
                            id="about"
                            onChange={(e) => setAbout(e.target.value)}
                            value={about}>

                        </textarea>
                    </div>

                    <button
                        type="submit"> Enviar
                    </button>



                </form>

            </div>
        </div>


    )

}

export default FormPricing;