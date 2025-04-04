import React from 'react';
import {motion} from "framer-motion"

const Hero = () => {
  const transition = {
    duration: 1.2, 
    delay: 0.5,
    ease: "easeInOut", 
  }
  return (
    <div className='w-full'>
      <motion.div 
        initial={{ scale: 0.5 }} 
        animate={{ scale: 1 }} 
        transition={transition}
      >
        <img
          src='/hero2.jpg'
          className='w-full h-[630px] object-cover '
        />
      </motion.div>
    </div>
  );
};

export default Hero;