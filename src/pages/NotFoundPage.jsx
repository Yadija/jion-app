import React from 'react';

function NotFoundPage() {
  document.title = 'Not Found';

  return (
    <div className='grid h-screen'>
      <h1 className='m-auto text-4xl text-white'>
        Not Found <span className='font-bold text-cyan-500'>404</span>
      </h1>
    </div>
  );
}

export default NotFoundPage;
