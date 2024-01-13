import React from 'react'
import photo1 from '../IMG/photo1.png'
import photo2 from '../IMG/photo2.png'
import photo3 from '../IMG/photo3.png'
import lorem from '../JSON/lorem.json'
import Lorem from '../React/Lorem'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import slick1 from '../IMG/slick1.png'
import slick2 from '../IMG/slick2.png'
import slick3 from '../IMG/slick3.png'
import slick4 from '../IMG/slick4.png'
import slick5 from '../IMG/slick5.png'
import { FaAngleRight } from "react-icons/fa6"
import '../MediaQuery/photo-media.css'


const PhotoContainer = () => {
    /*-----slick-slider-----*/
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
  return (
<div className="general">
<div className="general-photo">
    <div className="photo-container">
        <div className="photo-left">
            <div className="text">
                <h3>Telefon</h3>
                <p>Məhsul sayı: 322</p>
                <a href="">Məhsullara keçid</a><FaAngleRight className='angle-icon'/>
            </div>
            <img src={photo1} />
        </div>
        <div className="photo-right">
            <div className="photo-box">
                <div className="text">
                    <h3>Smart Saat</h3>
                    <p>Məhsul sayı: 46</p>
                    <a href="">Məhsullara keçid</a><FaAngleRight className='angle-icon'/>
                </div>
                <div className="photo">
                    <img className="photo2" src={photo2} />
                </div>
            </div>
            <div className="photo-box2">
                <div className="text">
                    <h3>Aksesuar</h3>
                    <p>Məhsul sayı: 891</p>
                    <a href="">Məhsullara keçid</a><FaAngleRight className='angle-icon'/>
                </div>
                <div className="photo">
                    <img className="photo3" src={photo3} />
                </div>
            </div>
        </div>
    </div>
</div>

<div className="infos4">
    {
        lorem.map((m) => (
            <Lorem key={m.id} image={m.image} heading={m.heading} lorem={m.lorem} />
        )
        )
    }
</div>

<div className="slick">

    <Slider {...settings}>
        <div>
            <img src={slick1} alt="" />
        </div>
        <div>
            <img src={slick2} alt="" />
        </div>
        <div>
            <img src={slick3} alt="" />
        </div>
        <div>
            <img src={slick4} alt="" />
        </div>
        <div>
            <img src={slick5} alt="" />
        </div>
        <div>
            <img src={slick2} alt="" />
        </div>
    </Slider>
</div>
</div>
  )
}

export default PhotoContainer