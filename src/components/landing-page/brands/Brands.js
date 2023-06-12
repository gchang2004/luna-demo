import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

// stagger motion animation
const containerMotion = {
  visible: { transition: { staggerChildren: 0.2 } },
};

// animation parameters for TEXT
const textMotion = {
  //movement = FADE-IN
  hidden: { opacity: 0, y:-10}, // INITIAL STAGE
  visible: { opacity: 1, y:0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
};

const Brands = () => {
  return (
    <motion.div className="bg-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      variants={containerMotion}
      >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* INTRODUCTION TEXT */}
        <motion.div className='flex items-center justify-center' variants={textMotion}>
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mr-1">
            Collaboration with
          </h2>
          <h2 className="text-center text-lg font-semibold leading-8 text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500">
            brands you love
          </h2>
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 ml-1">
            around the world
          </h2>
        </motion.div>
        
        {/* ROTATING BRAND MARQUEE */}
        <motion.div className="flex items-center justify-center mx-auto mt-10 max-w-none" variants={textMotion}>
          <Marquee pauseOnHover="true" speed={35} gradient={true} gradientWidth={25}>
            <a href="https://www2.hm.com/en_us/index.html">
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Urban_Outfitters_logo.svg/640px-Urban_Outfitters_logo.svg.png"
                alt="Urban Outfitters"
              />
            </a>
            <a href="https://www2.hm.com/en_us/index.html">
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://www.nicepng.com/png/full/382-3821785_free-hbo-logo-transparent-h-m-logo-black.png"
                alt="H&M"
              />
            </a>
            <a href='https://www.patagonia.com/home/'>
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Patagonia_%28Unternehmen%29_logo.svg"
                alt="Patagonia"
              />
            </a>
            <a href='https://www.suspiciousantwerp.com/'>
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://cdn.shopify.com/s/files/1/1610/4725/files/sspcs_new_main-01_9d2ef6b5-6965-455b-829d-2792245f8c39.png?v=1632727014"
                alt="Suspicious Antwerp"
              />
            </a>
            <a href="https://us.princesspolly.com/">
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://www.loopreturns.com/wp-content/uploads/2022/06/princess-polly-logo-scaled.webp"
                alt="Princess Polly"
              />
            </a>
            <a href="https://bananarepublic.gap.com/">
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Banana_Republic.svg/2560px-Banana_Republic.svg.png"
                alt="Banana Republic"
              />
            </a>
            <a href="https://www.prettylittlething.us/">
              <img
                className="max-h-12 w-full object-contain sm:col-start-2 mr-16"
                src="https://www.creativebrief.com/user_files/25520/5ece1d423dbed_prettylittlething-prettybigthing-full-width-image.png"
                alt="PrettyLittleThing"
              />
            </a>
            <a href='https://www.zara.com/us/'>
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1024px-Zara_Logo.svg.png"
                alt="ZARA"
              />
            </a>
            <a href="https://www.tommybahama.com/">
              <img
                className="max-h-12 w-full object-contain mr-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tommy_Bahama_logo.svg/2560px-Tommy_Bahama_logo.svg.png"
                alt="Tommy Bahama"
              />
            </a>
          </Marquee>
        </motion.div>
        
      </div>
    </motion.div>
  )
}

export default Brands