import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useActiveLink from '../React/useActiveLink';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logo from '../IMG/logo.png';
import heart from '../IMG/heart.svg';
import person from '../IMG/person.svg';
import shop from '../IMG/shop.svg';
import '../CSS/style.css';
import '../MediaQuery/style-media.css'

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
/*-----linklere clickledikde renginin yasil olaraq qalmasi ucun olan hisse,ardi ise asagida-----*/
    const isActiveYeni = useActiveLink('/yeni');
    const isActiveApple = useActiveLink('/apple');
    const isActiveSamsung = useActiveLink('/samsung');
    const isActiveXiaomi = useActiveLink('/xiaomi')
    const isActiveRedmi = useActiveLink('/redmi')
    const isActiveBrend = useActiveLink('/brend')
    const isActiveAksessuarlar = useActiveLink('/aksessuarlar')
    const isActiveEndirimler = useActiveLink('/endirimler')

    const activeLinkStyle = {
        color: '#00D68F',
    };

    return (
        <div className="nav">
            <header>
                <div className="head">
                    
                    <div className="logo-part">{isMenuOpen ? (<FaTimes onClick={toggleMenu} />):
                    (<GiHamburgerMenu className='hamburger' onClick={toggleMenu} />)}
                        <img src={logo} alt="" />
                    </div>
                    <div className={`search ${isMenuOpen ? 'hidden' : ''}`}>
                        <form action="">

                            <label htmlFor="searching">
                                <CiSearch className='search-icon' />
                                <input type="text" id="searching" name="searching" placeholder="Axtarış..." />
                            </label>
                        </form>

                    </div>
                    <div className={`icons ${isMenuOpen ? 'hidden' : ''}`}>
                        <img src={person} alt="" />
                        <img src={heart} alt="" />
                        <img src={shop} alt="" />
                    </div>
                </div>
            </header>
            <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <div className="nav-links">
                    <Link to="/yeni" style={isActiveYeni ? activeLinkStyle : {}}>Yeni</Link>
                    <Link to="/apple" style={isActiveApple ? activeLinkStyle : {}}>Apple</Link>
                    <Link to="/samsung" style={isActiveSamsung ? activeLinkStyle : {}}>Samsung</Link>
                    <Link to="/xiaomi" style={isActiveXiaomi ? activeLinkStyle : {}}>Xiaomi</Link>
                    <Link to="/redmi" style={isActiveRedmi ? activeLinkStyle : {}}>Redmi</Link>
                    <Link to="/brend" style={isActiveBrend ? activeLinkStyle : {}}>Bütün Brendlər</Link>
                    <Link to="/aksessuarlar" style={isActiveAksessuarlar ? activeLinkStyle : {}}>Aksessuarlar</Link>
                    <Link to="/endirimler" style={isActiveEndirimler ? activeLinkStyle : {}}>Endirimlər</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
