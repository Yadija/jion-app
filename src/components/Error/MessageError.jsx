import React from 'react';

const MessageError = ({ title, message }) => {
  return (
    <div className='background-color-white grid h-screen'>
      <div className='m-auto flex flex-col p-14 text-center'>
        <h1 className='text-color-blue m-auto text-2xl font-bold md:text-4xl'>{title}</h1>
        <p className='text-color-black lg:text-lg'>{message}</p>
      </div>
    </div>
  );
};

export default MessageError;
