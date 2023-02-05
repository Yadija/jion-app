import React from 'react';

function Loading() {
  return (
    <div className="h-screen grid">
      <div className="m-auto flex">
        <h1 className="m-auto text-4xl text-white hidden md:inline-block">
          Loading
        </h1>
        <div className="m-auto translate-y-3 translate-x-1">
          <div className="w-3 h-3 mx-1 bg-cyan-600 rounded-[100%] inline-block animate-bounce" />
          <div className="w-3 h-3 mx-1 bg-cyan-500 rounded-[100%] inline-block animate-bounce" style={{ animationDelay: '.16s' }} />
          <div className="w-3 h-3 mx-1 bg-cyan-400 rounded-[100%] inline-block animate-bounce" style={{ animationDelay: '.32s' }} />
        </div>
      </div>
    </div>
  );
}

export default Loading;
