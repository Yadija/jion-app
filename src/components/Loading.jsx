import React from 'react';

function Loading() {
  return (
    <div className='grid h-screen bg-softPeach dark:bg-balticSea'>
      <div className='m-auto flex'>
        <h1 className='m-auto hidden text-4xl text-balticSea dark:text-softPeach md:inline-block'>
          Loading
        </h1>
        <section className='m-auto translate-x-1 translate-y-3'>
          <span className='mx-1 inline-block h-3 w-3 animate-bounce rounded-full bg-funBLue' />
          <span
            className='mx-1 inline-block h-3 w-3 animate-bounce rounded-full bg-cyan-500'
            style={{ animationDelay: '.16s' }}
          />
          <span
            className='mx-1 inline-block h-3 w-3 animate-bounce rounded-full bg-denimBLue'
            style={{ animationDelay: '.32s' }}
          />
        </section>
      </div>
    </div>
  );
}

export default Loading;
