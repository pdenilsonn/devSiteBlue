import './services.css';

function Services() {
  return (
    <>
      <div className='container' id='servicos' >
        <div className='gTitles'>
          <h3 className="titles">Serviços</h3>
          <p className="line"></p>
        </div>
        
        <div className="blocoContentS">
          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-microphone-lines" /></span>
              <h3>Gravando</h3>
            </div>
            <p>Estrutura para atender demandas de produção urgentes com eficiência e rapidez. Capacidade para mais de 200 horas de gravação mensal.
            </p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-sliders" /></span>
              <h3>Como No Original</h3>
            </div>
            <p>Estúdios projetados com excelência acústica, utilizando tecnologia de ponta e os melhores profissionais do mercado.
            </p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-shield-halved" /></span>
              <h3>100% Seguro</h3>
            </div>
            <p>Rede interna protegida contra ataques cibernéticos e vazamento de dados, do início ao fim de todos os nossos projetos.</p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-clock"/></span>
              <h3>Em Tempo Real</h3>
            </div>
            <p>Nossa equipe oferece informações em tempo real sobre o progresso do seu projeto. Oferecemos relatórios diários e semanais.</p>
          </div>

        </div>

      </div >
    </>

  )
}

export default Services;

