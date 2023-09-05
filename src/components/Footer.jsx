import React from 'react';
import { TbHeart } from 'react-icons/tb';

function Footer() {
  return (
    <footer className='background-color-blue py-4 text-center text-soft-peach selection:bg-soft-peach dark:selection:bg-soft-peach'>
      <p className='inline-flex'>
        Create with <TbHeart className='mx-1 translate-y-[0.3rem] text-pink-500' /> by
        yadija
      </p>
    </footer>
  );
}

export default Footer;
