import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Paginations = ({ currentPage, onPageChange }) => {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Stack spacing={2} sx={{ display:'flex',alignItems:'flex-end',marginRight:'15rem',padding:'1rem 2rem' }}>
    <Pagination
      count={7}
      page={currentPage}
      onChange={handleChange}
      sx={{ 
        '& .MuiPaginationItem-root': {
          borderRadius: '10px',
          color: '#000',
          margin: '0 4px',
        },
        '& .Mui-selected': {
          backgroundColor: '#2DD06E',
          color: '#fff',
        },
      }}
    />
  </Stack>
  );
};

export default Paginations