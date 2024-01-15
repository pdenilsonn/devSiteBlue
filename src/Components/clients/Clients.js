import './clients.css';
import clients from './imgClients';

function Clients() {


    return (
        <>
            <div container id='clientes'>
                <div className='gTitles'>
                    <h3 className="titles">Clientes</h3>
                    <p className="line"></p>
                </div>
                {/* criar um carrossel em loop sempre ligado para ficar passando todoas as logos dos clienteas */}
                <div className='contentClient'>
                    <div className='logoClient'>
                        
                            {clients.map(item => (
                                <div className='img' key={item.id}><img alt={item.alt} src={item.img} /></div>
                            ))}
                        

                    </div>

                    <div>
                        <p>Além disso, a BlueBird já desenvolveu e ainda desenvolve milhares de trilhas sonoras para as principais emissoras brasileiras como: Rede Globo, SBT, RECORD e GAZETA!</p>

                        <div className='logoClient'>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Clients;