import React from 'react';

function Loading() {
  return (
    <div className="grid h-screen">
      <div className="m-auto flex">
        <h1 className="m-auto hidden text-4xl text-white md:inline-block">Loading</h1>
        <div className="m-auto translate-y-3 translate-x-1">
          <div className="mx-1 inline-block h-3 w-3 animate-bounce rounded-[100%] bg-cyan-600" />
          <div
            className="mx-1 inline-block h-3 w-3 animate-bounce rounded-[100%] bg-cyan-500"
            style={{ animationDelay: '.16s' }}
          />
          <div
            className="mx-1 inline-block h-3 w-3 animate-bounce rounded-[100%] bg-cyan-400"
            style={{ animationDelay: '.32s' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
