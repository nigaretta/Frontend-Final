// BrendMehsul.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/filtermehsul.css';

const BrendMehsul = (props) => {


  return (
    <div className="general-brend">
      <div className="brend-container">
        
          <div className="brend-box">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <div className="qiymet">
              <p className="price">{props.price}</p>
              <p className="sale">{props.sale}</p>
              <p>{props.ozprice}</p>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default BrendMehsul;











