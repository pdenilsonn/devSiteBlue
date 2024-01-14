import "./formPricing.css"

function FormPricing() {
    return (
        <div className="container" id="pricing">
            <div className='gTitles'>
                {/*<h3 className="titles">Formulário de Orçamento</h3> */}
                <p className="line"></p>
            </div>
            <div className="formContainer">
                <div className="formContent">
                    <h2>Peça já um orçamento<br></br> para seu projeto!</h2>
                    <h3>Receba uma proposta ainda hoje.</h3>
                    <p>- Comprometimento total com seu prazo.</p>
                    <p>- Qualidade profissional garantida.</p>
                    <p>- Melhor preço do mercado.</p>
                </div>

                <form className="form">

                        <div>
                            <label className="title"><strong>Sobre você</strong></label>
                        </div>
                    <fieldset>
                        <div>
                            <label for="fname">Nome</label><br></br>
                            <input placeholder="Nome" type="text" id="fname" name="fname" required />
                        </div>
                        <div>
                            <label for="lname">Sobrenome</label><br></br>
                            <input placeholder="Sobrenome" type="text" id="lname" name="lname" required />
                        </div>

                        <div>
                            <label for="email">Seu e-mail</label><br></br>
                            <input placeholder="E-mail" type="email" id="email" name="email" required />
                        </div>
                        <div>
                            <label for="text">Nome da Empresa</label><br></br>
                            <input placeholder="Nome da Empresa" type="text" id="email" name="email" />
                        </div>
                        <div>
                            <label for="tel">Telefone</label><br></br>
                            <input placeholder="(00)00000-0000" type="tel" id="tel" name="tel" required />
                        </div>
                    </fieldset>

                    <div className="campo">
                        <div>
                            <label className="title"><strong>Qual o tipo do seu projeto?</strong></label>
                            
                        </div>
                        <div className="options">
                            <label for="series">
                                <input type="radio" id="dublagem" name="project" value="dublagem" />Séires
                            </label>
                            <label for="longas">
                                <input type="radio" id="audioDescrição" name="project" value="audioDescrição" />Longa
                            </label>
                            <label for="musica">
                                <input type="radio" id="tradução" name="project" value="tradução" />Música
                            </label>
                            <label for="textos">
                                <input type="radio" id="trilhaSonora" name="project" value="trilhaSonora" />Textos
                            </label>
                        </div>
                    </div>

                    <div className="campo">
                        <div>
                            <label className="title"><strong>Qual o serviço você precisa?</strong></label>
                            
                        </div>
                        <div className="options">
                            <label for="dublagem">
                                <input type="checkbox" id="dublagem" name="dublagem" value="dublagem" />Dublagem
                            </label>
                            <label for="audioDescricao">
                                <input type="checkbox" id="audiodescricao" name="audioDescricao" value="audioDescricao" />Audio Descrição</label>
                            <label for="traducao">
                                <input type="checkbox" id="traducao" name="traducao" value="traducao" />Tradução
                            </label>
                            <label>
                                <input type="checkbox" id="trilhaSonora" name="trilhaSonora" value="trilhaSonora" />Trilha Sonora
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="title"><strong>Alguma observação sobre seu projeto...</strong></label>
                        <textarea placeholder="caso precise, escreva algo que seja importante sobre seu projeto" row="5"></textarea>
                    </div>

                    <button type="submit"> Enviar </button>



                </form>

            </div>
        </div>


    )

}

export default FormPricing;