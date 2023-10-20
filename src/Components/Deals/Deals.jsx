import React from 'react'
import{Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import "../Deals/Deals.css"
import data from "../../utils/slider.json"


const Deals = () => {
    return(
        <section className="d-wrapper">
            <div className="paddings innerWidth d-container">
                <div className="d-head flexColStart">
                    <span className = "orangeText">Deals</span>
                    
                </div>
                <Swiper
                slidesPerView={2}
                spaceBetween={0}  
                >
                    <SliderButtons/>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i} className = {`slide-${i}`}>
                                <div className="flexColStart d-card">
                                    <img src={card.image} alt="home" />
                                    <span className="secondaryText d-price">
                                        <span style={{color: "orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>

                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Deals


const SliderButtons = ()=> {

    const swiper = useSwiper();
    return(
        <div className="flexCenter d-buttons-container">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );

    };