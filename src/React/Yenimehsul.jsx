import React, { useEffect } from 'react';
import '../CSS/satilan.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Yenimehsul = (props) => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className="general2">
            <div className="service-container2">
                <div className="box2"  data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <img src={props.image} />
                    <h4>{props.name}</h4>
                    <p className="price2">{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Yenimehsul