import React from 'react'
import Apple from '../React/Apple'
import apple from '../JSON/apple.json'
import Color from '../React/Color'
import AdsContainer from '../React/AdsContainer'
import PhotoContainer from '../React/PhotoContainer'
import { FaAngleRight } from "react-icons/fa6"
import '../MediaQuery/satilan-media.css'
import '../MediaQuery/section-media.css'




const AppleSection = () => {
    return (
        <div className="section">
            <Color />
            <div className="en-cox-satilan">
                <p>Ən çox satılan məhsullar</p>
                <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon' />
                </div>
            </div>
            <div className="infos5">
                {
                    apple.map((m) => (
                        <Apple key={m.id} image={m.image} name={m.name} price={m.price} ozprice={m.ozprice} sale={m.sale} />
                    )
                    )
                }
            </div>
            <div className="yeni-mehsullar">
                <p>Yeni gələn məhsullar</p>
                <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon' />
                </div>
            </div>
            <div className="infos5">
                {
                    apple.map((m) => (
                        <Apple key={m.id} image={m.image} name={m.name} price={m.price} ozprice={m.ozprice} sale={m.sale} />
                    )
                    )
                }
            </div>
            <AdsContainer />
            <div className="aksessuarlar">
                <p>Yeni gələn aksessuarlar</p>
                <div className="hamisina-bax">
                    <a href="">Hamısına bax</a><FaAngleRight className='angle-icon' />
                </div>
            </div>
            <div className="infos5">
                {
                    apple.map((m) => (
                        <Apple key={m.id} image={m.image} name={m.name} price={m.price} ozprice={m.ozprice} sale={m.sale} />
                    )
                    )
                }
            </div>
            <PhotoContainer />
        </div>



    )
}

export default AppleSection