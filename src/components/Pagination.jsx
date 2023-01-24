import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Pagination({ pagination, onUpdate }) {
  const {
    current_page: currentPage,
    last_visible_page: lastVisiblePage,
  } = pagination;

  const listPagination = [];

  /**
   * TODO ubah agar pagination tidak memiliki panjang lebih dari 5
   * 1. memiliki 5 pagination
   * 2. ketika ditengah atur agar tetap ditengah
   */

  for (let i = 1; i <= lastVisiblePage; i++) {
    const className = i === currentPage ? 'text-cyan-500' : '';
    listPagination.push(
      <li key={i} className={`px-3 hover:text-cyan-500 ${className}`}>
        <button type="button" onClick={i === currentPage || i > lastVisiblePage ? null : () => onUpdate(i)}>{i}</button>
      </li>,
    );
  }

  return (
    <div className="text-white flex justify-center py-10">
      <ul className="inline-flex text-xl">
        <li className="px-3 flex">
          <button type="button" className="m-auto hover:text-cyan-500" onClick={currentPage === 1 ? null : () => onUpdate(currentPage - 1)}>
            <FiChevronLeft />
          </button>
        </li>
        {listPagination}
        <li className="px-3 flex">
          <button type="button" className="m-auto hover:text-cyan-500" onClick={currentPage === lastVisiblePage ? null : () => onUpdate(currentPage + 1)}>
            <FiChevronRight />
          </button>
        </li>
      </ul>
    </div>
  );
}

const paginationItemShape = {
  currentPage: PropTypes.number,
  lastVisiblePage: PropTypes.number,
};

Pagination.propTypes = {
  pagination: PropTypes.shape(paginationItemShape).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Pagination;
