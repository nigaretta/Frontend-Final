import React from 'react'
import  { useState } from 'react';
import Paginate from './Paginate';
import Pagination from './Pagination';

const FilterPagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
    
  return (
    /*pagination*/ 
    <div><Paginate currentPage={currentPage} />
    <Pagination currentPage={currentPage} onPageChange={handlePageChange} /></div>
  )
}

export default FilterPagination