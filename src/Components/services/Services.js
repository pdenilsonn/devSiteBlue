import './Services.css';

function Services() {
  return (
    <>
      <div className='container' id='servicos' >
        <div className='gTitles'>
          <h3 className="titles">Services</h3>
          <p className="line"></p>
        </div>
        
        <div className="blocoContentS">
          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-microphone-lines" /></span>
              <h3>Recording</h3>
            </div>
            <p>Structure to meet urgent production demands efficiently and swiftly. Capacity for over 200 hours of monthly recording.
            </p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-sliders" /></span>
              <h3>As The Original</h3>
            </div>
            <p>Studios designed with acoustic excellence, utilizing cutting-edge technology and the best professionals in the market.
            </p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-shield-halved" /></span>
              <h3>100% Safe</h3>
            </div>
            <p>Internal network protected against cyber attacks and data leaks from the beginning to the end of all our projects.</p>
          </div>

          <div className="serviceCard">
            <div className='cardTitle'>
              <span><i class="fa-solid fa-clock"/></span>
              <h3>In Real Time</h3>
            </div>
            <p>Our team provides real-time information about the progress of your project. We offer daily and weekly reports.</p>
          </div>

        </div>

      </div >
    </>

  )
}

export default Services;

