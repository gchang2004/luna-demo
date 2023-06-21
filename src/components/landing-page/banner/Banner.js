import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

function Banner (props) {
// animation parameters for banner
const bannerAnimation = {
  //movement = FADE-IN + DOWNWARDS movement
  hidden: { opacity: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25, ease: 'easeInOut' } },
};

return ( // when the trigger is initialized (begin as true), meaning that the banner will appear!
  <AnimatePresence>
    {props.trigger && (
      <motion.div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gradient-to-l from-blue-500 to-purple-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 hover:text-white"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={bannerAnimation}
        >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {/* BANNER TEXT */}
          <p className="text-sm leading-6 text-white">
            <strong className="font-semibold">Get free delivery on orders over $100</strong>
          </p>

          {/* BANNER BUTTON */}
          <Link
            to="/luna-demo/sign-in/"
            className="flex-none rounded-full bg-white text-indigo-600 px-3.5 py-1 text-sm font-semibold shadow-sm hover:bg-indigo-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-transform duration-300 transform hover:scale-95"
          >
            Join Today &rarr;
          </Link>
        </div>

        {/* EXIT BUTTON */}
        <div className="flex flex-1 justify-end">
          <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px] mr-2">
            <XMarkIcon className="h-5 w-5 text-white hover:scale-110"
                      aria-hidden="true"
                      onClick={() => props.setTrigger(false)}/>
          </button>
        </div>
        
      </motion.div>
    )}
  </AnimatePresence>
)
}

export default Banner