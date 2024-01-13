import React from 'react';
import FilterSection from '../React/FilterSection';


const Paginate = ({ currentPage }) => {
  
  return (
    /*pagination ucun olan sehifeleri yerlesdirme*/ 
    <div className='pag'>
      {currentPage === 1 && <FilterSection/>}
      {currentPage === 2 && <FilterSection/>}
      
      
    </div>
  );
};

export default Paginate;