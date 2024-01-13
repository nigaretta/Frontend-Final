import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/apple.css'




const Apple = (props) => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <div className="general">
      <div className="service-container">
        <div className="box5" data-aos="fade-up"
          data-aos-anchor-placement="top-center">
          <img src={props.image} />
          <h4>{props.name}</h4>
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

export default Apple