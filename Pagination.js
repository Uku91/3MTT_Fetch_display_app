import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages === 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px' }}>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: '0 5px',
            padding: '6px 12px',
            backgroundColor: page === currentPage ? '#333' : '#eee',
            color: page === currentPage ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
