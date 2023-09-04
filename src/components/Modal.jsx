import PropTypes from 'prop-types';
import React from 'react';

function Modal({ handleModal, image, title }) {
  return (
    <>
      <button
        type='button'
        onClick={handleModal}
        className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden'
      >
        <div className='relative mx-auto my-6 w-auto max-w-3xl px-4'>
          <section className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg'>
            <img className='rounded-md shadow-md' src={image} alt={title} />
          </section>
        </div>
      </button>
      <div className='fixed inset-0 z-40 bg-white opacity-25' />
    </>
  );
}

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
