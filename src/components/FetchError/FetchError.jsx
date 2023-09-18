import React from 'react';

const FetchError = () => {
  return (
    <div className='background-color-white grid h-screen'>
      <div className='m-auto flex flex-col p-14 text-center'>
        <h1 className='text-color-blue m-auto text-2xl font-bold md:text-4xl'>
          Failed to Retrieve Data
        </h1>
        <p className='lg:text-lg'>
          Data cannot be displayed due to an error on the server or because you are not
          connected to the internet and data is not available in the cache
        </p>
        <section>
          <button
            type='button'
            onClick={() => window.location.reload()}
            className='text-color-white background-color-blue mt-4 rounded-md px-4 py-2'
          >
            refresh
          </button>
        </section>
      </div>
    </div>
  );
};

export default FetchError;
