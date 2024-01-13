import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Aksessuarlar = (props) => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (

        <div className="general3">
            <div className="service-container3">
                <div className="box3" data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <img src={props.image} />
                    <h4>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>

    )
}

export default Aksessuarlar