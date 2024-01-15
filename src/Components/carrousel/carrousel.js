import "./carrousel.css";
import imgStudio from './imgStudio';
import { Swiper, SwiperSlide } from 'swiper/react';



function Carrousel() {
    return (

        <div className="containerSd">
            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation

            >
                    {imgStudio.map(item => (
                        <SwiperSlide key={item.id}>
                        <img className="slide-item"  src={item.img} alt={item.alt} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>


    )
}

export default Carrousel;