import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../IMG/logo.png'
import '../CSS/footer.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import '../MediaQuery/footer-media.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo-icon">
          <img src={logo} alt="" />
          <div className="icon">
            <FaInstagram />
            <FiFacebook className="social-icon" />
            <AiOutlineYoutube className="social-icon" />
            <CiTwitter className="social-icon" />
          </div>
        </div>
        <div className="menu">
          <p>Menu</p>
          <a href="">Yeni</a>
          <a href="">Endirimlər</a>
          <a href="">Aksessuarlar</a>
          <a href="">Bütün brendlər</a>
        </div>
        <div className="menu">
          <p>Kömək</p>
          <Link to="/faq">Tez-tez soruşulan suallar</Link>
          <a href="">Çatdırılma xidməti</a>
          <a href="">Geri qaytarılma şərtləri</a>
        </div>
        <div className="contact">
          <p>Əlaqə</p>
          <div className="right">
            <CiLocationOn className='righticon' /><a href=""><span>M. K. Ataturk avenue 89, Baku,<br /> Azerbaijan</span></a>
          </div>
          <div className="right">
            <FaRegEnvelope className='righticon' /><a href="">example@gmail.com</a>
          </div>
          <div className="right">
            <FiPhone className='righticon' /><a href="">*2108</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="last-part">
        <div className="left">
          <p>&copy; ProjectX 2021. Bütün hüquqlar qorunur.</p>
        </div>
        <div className="right">
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer