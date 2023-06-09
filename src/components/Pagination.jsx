import React from 'react';
import PropTypes from 'prop-types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { usePagination, DOTS } from '../hooks/usePagination';

function Pagination({ pagination, onPageChange }) {
  const { current_page: currentPage, last_visible_page: lastVisiblePage } = pagination;

  const paginationRange = usePagination({
    currentPage,
    totalPageCount: lastVisiblePage,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className="flex justify-center py-10 text-white">
      <ul className="inline-flex text-xl">
        <li className="flex px-3">
          <button
            type="button"
            className="m-auto hover:text-cyan-500"
            onClick={currentPage === 1 ? null : () => onPageChange(currentPage - 1)}
          >
            <FiChevronLeft />
          </button>
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li key={pageNumber + Math.random()}>&#8230;</li>;
          }

          const className = pageNumber === currentPage ? 'text-cyan-500' : '';
          return (
            <li key={pageNumber} className={`px-3 hover:text-cyan-500 ${className}`}>
              <button
                type="button"
                onClick={
                  pageNumber === currentPage || pageNumber > lastVisiblePage
                    ? null
                    : () => onPageChange(pageNumber)
                }
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li className="flex px-3">
          <button
            type="button"
            className="m-auto hover:text-cyan-500"
            onClick={
              currentPage === lastVisiblePage ? null : () => onPageChange(currentPage + 1)
            }
          >
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
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
