import React from 'react'
import Color from '../React/Color'
import '../CSS/section.css'
import '../MediaQuery/section-media.css'
import satilan from '../JSON/satilan.json'
import Satilan from '../React/Satilan'
import yenimehsul from '../JSON/yenimehsul.json'
import Yenimehsul from '../React/Yenimehsul'
import aksessuarlar from '../JSON/aksessuarlar.json'
import Aksessuarlar from '../React/Aksessuarlar'
import '../CSS/photo.css'
import AdsContainer from '../React/AdsContainer'
import PhotoContainer from '../React/PhotoContainer'
import { FaAngleRight } from "react-icons/fa6"




const Section = () => {
    return (
        <div className="section">
            <Color />
            <div className="general">
                <div className="en-cox-satilan">
                    <p>Ən çox satılan məhsullar</p>
                    <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon'/>
                    </div>
                </div>
                <div className="infos">
                    {
                        satilan.map((m) => (
                            <Satilan key={m.id} image={m.image} name={m.name} color={m.color} price={m.price} ozprice={m.ozprice} sale={m.sale} />
                        )
                        )
                    }
                </div>

                <div className="yeni-mehsullar">
                    <p>Yeni gələn məhsullar</p>
                    <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon'/>
                    </div>
                </div>

                <div className="infos2">
                    {
                        yenimehsul.map((m) => (
                            <Yenimehsul key={m.id} image={m.image} name={m.name} price={m.price} />
                        )
                        )
                    }
                </div>
                <AdsContainer />



                <div className="aksessuarlar">
                    <p>Yeni gələn aksessuarlar</p>
                    <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon'/>
                    </div>
                </div>

                <div className="infos3">
                    {
                        aksessuarlar.map((m) => (
                            <Aksessuarlar key={m.id} image={m.image} name={m.name} price={m.price} />
                        )
                        )
                    }
                </div>
                <PhotoContainer />


            </div>
        </div>
    )
}

export default Section