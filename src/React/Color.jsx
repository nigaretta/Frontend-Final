import React from 'react';
import phone1 from '../IMG/phone1.png';

const Color = () => {


    return (
      
            <div className="section">
                <div className="color">
                    <div className="color-container">
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="blue"></div>
                        <div className="orange"></div>
                        <div className="pink"></div>
                    </div>
                    <div className="swiper">
                        <div className="section-part">
                            <div className="first">
                                <div className="color-text">
                                    <h1>Buy & Sell<br />What's Now & Next</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis<br /> malesuada et leo faucibus </p>
                                </div>
                                <div className="image">
                                    <img src={phone1} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
           
        
    );
};

export default Color;
