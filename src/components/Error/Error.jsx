import React from 'react';

const Error = ({ message = '' }) => {
  return (
    <div className='background-color-white grid h-screen'>
      <div className='m-auto flex flex-col'>
        <h1 className='text-color-black m-auto text-4xl font-bold'>
          {message ? `Error: ${message}` : 'Error'}
        </h1>
        <button
          type='button'
          onClick={() => window.location.reload()}
          className='text-color-blue'
        >
          refresh
        </button>
      </div>
    </div>
  );
};

export default Error;
