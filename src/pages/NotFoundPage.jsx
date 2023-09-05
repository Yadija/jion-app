import React from 'react';

function NotFoundPage() {
  document.title = 'Not Found';

  return (
    <div className='grid h-screen'>
      <h1 className='text-color-black m-auto text-4xl'>
        Not Found <span className='text-color-blue font-bold'>404</span>
      </h1>
    </div>
  );
}

export default NotFoundPage;
