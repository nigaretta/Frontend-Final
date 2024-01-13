import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/satilan.css'
import '../MediaQuery/satilan-media.css'

const Satilan = (props) => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className="general">
            <div className="service-container">
                <div className="box" data-aos="fade-up"
                    data-aos-anchor-placement="top-center">
                    <img src={props.image} />
                    <h4>{props.name}</h4>
                    <h4>{props.color}</h4>
                    <div className="qiymet">
                        <p className="price">{props.price}</p>
                        <p>{props.ozprice}</p>
                        <p className="sale">{props.sale}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Satilan