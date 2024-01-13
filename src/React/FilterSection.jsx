import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import '../CSS/filtermehsul.css';
import BrendMehsul from './BrendMehsul';
import brend from '../JSON/brend.json';
import '../MediaQuery/brend-media.css'

const FilterSection = () => {
      /*Responsivelikde gorunub gorunmemesi ucun event*/
    const [showFilters, setShowFilters] = useState(false);

    const handleFilterClick = () => {
      setShowFilters(!showFilters);
    };

    /*kategoriyanin acilib-baglanmasi eventi*/ 
    const [sectionStates, setSectionStates] = useState({
        brendOpen: false,
        typeOpen: false,
    });

    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleSectionClick = (section) => {
        setSectionStates((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    /* filterleme hissesi*/

    const handleBrandCheckboxChange = (brand) => {
        setSelectedBrand(brand === selectedBrand ? null : brand);
    };

    const displayedBrands = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];

    // Filter products based on selected brand
    const filteredProducts = brend.filter((product) => {
        return selectedBrand === null || product.name.toLowerCase().includes(selectedBrand.toLowerCase());
    });

    return (
        <div className="filter-container">
            <div className="govde">
                <div className="filter">
                    <div className="links">
                    <Link to="/">
                        Ana səhifə<FaAngleRight className="filter-icon" />
                    </Link>
                        <a href="">
                            Telefonlar
                            <FaAngleRight className="filter-icon" />
                        </a>
                        <a className='apple' href="">Apple</a>
                    </div>
                    <div className="sira-filter" onClick={handleFilterClick}>
                            <p>Sıralama</p>
                            <p>Filterləmələr</p>
                        </div>
                    <div className={`filters ${showFilters ? 'show' : ''}`}>
                        <div className="features">
                            <div className="features-parts" onClick={() => handleSectionClick('brendOpen')}>
                                <p>Brend ({displayedBrands.length})</p>
                                {sectionStates.brendOpen ? <FiMinus /> : <FaPlus />}
                            </div>
                            {sectionStates.brendOpen && (
                                <div className="checkbox-brends">
                                    <form action="">
                                        {displayedBrands.map((brand) => (
                                            <div key={brand}>
                                                <input
                                                    type="checkbox"
                                                    id={brand.toLowerCase()}
                                                    name={brand.toLowerCase()}
                                                    value={brand}
                                                    checked={selectedBrand === brand}
                                                    onChange={() => handleBrandCheckboxChange(brand)}
                                                />
                                                <label htmlFor={brand.toLowerCase()}>{brand}</label><br />
                                            </div>
                                        ))}
                                    </form>
                                </div>
                            )}
                        </div>
                        <div className="features">
                            <div className="features-parts" onClick={() => handleSectionClick('typeOpen')}>
                                <p>Type</p>
                                {sectionStates.typeOpen ? <FiMinus /> : <FaPlus />}
                            </div>
                            {sectionStates.typeOpen && (
                                <div className="checkbox-brends">
                                    <form action="">
                                        {displayedBrands.map((brand) => (
                                            <div key={brand}>
                                                <input
                                                    type="checkbox"
                                                    id={brand.toLowerCase()}
                                                    name={brand.toLowerCase()}
                                                    value={brand}
                                                    checked={selectedBrand === brand}
                                                    onChange={() => handleBrandCheckboxChange(brand)}
                                                />
                                                <label htmlFor={brand.toLowerCase()}>{brand}</label><br />
                                            </div>
                                        ))}
                                    </form>
                                </div>
                            )}
                        </div>
                        <div className="features">
                            <div className="features-parts">
                                <p>Category</p>
                                <FaPlus className='filter-icon' />
                            </div>
                        </div>
                        <div className="features">
                            <div className="features-parts">
                                <p>Rəng</p>
                                <FaPlus className='filter-icon' />
                            </div>
                        </div>
                        <div className="features">
                            <div className="features-parts">
                                <p>Qiymət</p>
                                <FaPlus className='filter-icon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="phone-data">
                    <div className="selection">
                        <p>{filteredProducts.length} məhsul tapıldı</p>
                        <select id="mehsul-secimi">
                            <option value="yeni">Ən yenilər</option>
                            <option value="satilan">Ən çox satılanlar</option>
                            <option value="endirim">Endirimdə olanlar</option>
                        </select>
                    </div>
                    <div className="infos6">
                        {filteredProducts.map((m) => (
                            <BrendMehsul key={m.id} image={m.image} name={m.name} price={m.price} sale={m.sale} ozprice={m.ozprice} color={m.color} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSection;








