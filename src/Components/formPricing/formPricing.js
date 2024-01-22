import "./formPricing.css"
import { useState } from 'react'
import emailjs from '@emailjs/browser'


function FormPricing() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [busName, setBusName] = useState('')
    const [tel, setTel] = useState('')
    const [project, setProject] = useState('')
    const [about, setAbout] = useState('')

    const [checkboxes, setCheckboxes] = useState([]);
    const handleCheckboxChange = (value) => {
        // Verifica se o valor já está no array
        if (checkboxes.includes(value)) {
            // Se estiver, remove o valor
            setCheckboxes(checkboxes.filter((item) => item !== value));
        } else {
            // Se não estiver, adiciona o valor
            setCheckboxes([...checkboxes, value]);
        }
    }



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
            service: checkboxes,
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
                setCheckboxes([])
                
                setAbout('')
            }, (err) => {
                console.log("erro", err )
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
                                    checked={checkboxes.includes("Dublagem")}
                                    onChange={() => handleCheckboxChange("Dublagem")}
                                    value="Dublagem" />Dublagem
                            </label>

                            <label for="audioDescricao">
                                <input
                                    type="checkbox"
                                    id="audiodescricao"
                                    name="service"
                                    checked={checkboxes.includes("Audio Descrição")}
                                    onChange={() => handleCheckboxChange("Audio Descrição")}
                                    value="Audio Descrição" />Audio Descrição
                            </label>

                            <label for="traducao">
                                <input
                                    type="checkbox"
                                    id="traducao"
                                    name="service"
                                    checked={checkboxes.includes("Tradução")}
                                    onChange={() => handleCheckboxChange("Tradução")}
                                    value="Tradução" />Tradução
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    id="trilhaSonora"
                                    name="service"
                                    checked={checkboxes.includes("Trilha Sonora")}
                                    onChange={() => handleCheckboxChange("Trilha Sonora")}
                                    value="Trilha Sonora" />Trilha Sonora
                            </label>

                            <h1> {checkboxes.join(', ')}</h1>

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