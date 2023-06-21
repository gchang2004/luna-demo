import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, x: -50 }, // INITIAL STAGE
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const colMotion_UP = {
    // movement = FADE-IN + SLIDE UP
    hidden: { opacity: 0, y: 100 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 1.25, ease: 'easeInOut' } }, // ANIMATION STAGE
  };
  
  // animation parameters for IMAGE
  const colMotion_DOWN = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0, y: -100 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 1.25, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* INITIAL PAGE SETUPS -> TAILWINDCSS */}
      <div className="pb-80 pt-12 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          
          {/* HEADING TEXT */}
          <motion.div className="sm:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={containerMotion}>
            <motion.h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl" variants={textMotion}>
              Indulge in the
            </motion.h1>
            <motion.h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 sm:text-6xl" variants={textMotion}>
              extraordinary
            </motion.h1>
            <motion.h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2" variants={textMotion}>
              A New Dimension to Style.
            </motion.h1>
            {/* SUBHEADING TEXT */}
            <motion.p className="mt-4 text-xm text-gray-500" variants={textMotion}>
            Inspired by the cosmic wonders, we curated a collection that blends elegance, innovation, and a touch of magic. Here, its one small step for Luna, one celestial leap for fashion.
            </motion.p>
          </motion.div>

          <motion.div className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={containerMotion}
            >
            {/* HEADER IMAGES */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  {/* IMAGE COLUMN #1 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_DOWN}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 shadow-xl">
                        <img
                          src="https://img.freepik.com/free-photo/portrait-young-japanese-woman-with-jacket_23-2148870728.jpg?w=1060&t=st=1685827748~exp=1685828348~hmac=8247323d7f6fff5068b790839868220d87314e0075f43712ac8177ba83764ba8"
                          alt="model-1-F"
                          className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-teenager_23-2149153333.jpg?w=740&t=st=1685828167~exp=1685828767~hmac=f56b561b57198a5389bfa423612a6c963c154adf9df8aba9fefdca6be9409fbf"
                        alt="model-2-M"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* IMAGE COLUMN #2 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_UP}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/free-photo/darkskinned-woman-jeans-outfit-green-tshirt-thoughtfully-posing-pink-background-portrait-lady-denim-jacket-skirt-isolated-backdrop_197531-29005.jpg?w=740&t=st=1685827964~exp=1685828564~hmac=9ee11a926a818dd5cb330982f36724b2ca00421b6a21fd8cdb29eec659539c5c"
                        alt="model-3-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/premium-photo/young-japanese-man-portrait_23-2148870772.jpg?w=740"
                        alt="model-4-M"
                        className="h-full w-full object-cover object-center shadow-xl"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/free-photo/beautiful-young-female-wearing-jumpsuit_23-2148880211.jpg?w=826&t=st=1685832799~exp=1685833399~hmac=e3a2ea0ebcbaf3cb01de0af5461cd5b6b8f2a1501be18ea8ece3f224291f62bc"
                        alt="model-5-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  {/* IMAGE COLUMN #3 */}
                  <motion.div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8" variants={colMotion_DOWN}>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/premium-photo/urban-street-style-girl-details-everyday-look-casual-beige-outfit-accessories_161568-13008.jpg?w=740"
                        alt="model-6-F"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg shadow-xl">
                      <img
                        src="https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137838.jpg?t=st=1685820439~exp=1685821039~hmac=eb39e74444f343265f3d27801638e78a89c3da104e5b7c949c128f33d5917b51"
                        alt="model-7-M"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>

            {/* HEADER BUTTON */}
            <motion.span variants={textMotion}>
              <Link to="/luna-demo/new-arrivals/" className="inline-block rounded-full border border-transparent bg-indigo-600 px-4 lg:px-8 py-2 lg:py-3 text-center font-medium text-white transition-transform duration-300 transform hover:scale-95 hover:bg-gradient-to-l from-blue-500 to-purple-500 shadow-lg">
                Explore Collection
              </Link>
            </motion.span>
            
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Header