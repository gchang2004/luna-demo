import React from 'react';
import { NavBar, Footer } from '../../components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const callouts = [
    {
      name: 'Clothing',
      description: 'Outfits Made for Everday Essentials',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/jamhdfront.jpg?v=1676282978&width=1540',
      imageAlt: 'suspiciousAntwerp_1',
      urlTag: '/luna-demo/men/clothing/',
    },
    {
      name: 'Accessories',
      description: 'Let Us Complete Your Look',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/sockssizes.jpg?v=1660808760&width=1540',
      imageAlt: 'suspiciousAntwerp_2',
      urlTag: '/luna-demo/men/accessories/',
    },
    {
      name: 'Brands',
      description: 'Powerful Collaborations with Industry Pioneers',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/products/23-JJ-1-VT-HD-OL-M.png?v=1681380429&width=1540',
      imageAlt: 'suspiciousAntwerp_3',
      urlTag: '/luna-demo/men/brands/',
    },
  ]

const MenClothing = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // animation parameters for TEXT
  const headerMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: 50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  // animation parameters for IMAGE
  const imageMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      {/* NAVIGATION BAR */}
      <NavBar />

      {/* HEADER SECION */}
      <div className="bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-photo/handsome-man-posing_144627-43637.jpg?w=1380&t=st=1686257680~exp=1686258280~hmac=726afead24dfc4f4278dba721ae69035073c374f588b3d9c614e3c197bbb5bfe')]">
        <div className="pb-44 pt-44 sm:pb-40 sm:pt-30 lg:pb-52 lg:pt-54">
            {/* HEADING TEXT */}
            <motion.div className="mx-auto sm:max-w-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                variants={containerMotion}
                >
                <motion.h1 className="flex justify-center text-center text-5xl lg:text-6xl font-semibold tracking-tight text-gray-700 mt-60 sm:mt-56 lg:mt-21" variants={headerMotion}>
                    Craft Your
                </motion.h1>
                <motion.h1 className="flex justify-center text-center text-5xl lg:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500" variants={headerMotion}>
                    Signature Look
                </motion.h1>
                <motion.h1 className="flex justify-center text-center text-2xl lg:text-3xl font-semibold tracking-tight text-gray-700 mt-4" variants={headerMotion}>
                    Style Your Game with Confidence.
                </motion.h1>
            </motion.div>
        </div>
      </div>

      {/* Collections - Grid View */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={containerMotion}
            >
          {/* SECTION TEXT */}
          <div className='flex'>
            <motion.h2 className="text-2xl font-bold text-gray-900 mr-1.5" variants={textMotion}>
              Discover
            </motion.h2>
            <motion.h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 mr-1.5" variants={textMotion}>
              Our Collections
            </motion.h2>
          </div>

          {/* REUSABLE TEMPlATE FORMAT */}
          <div className="mt-6 space-y-12 lg:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                
                {/* Collection Image */}
                <motion.div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 shadow-xl transition-transform duration-300 transform group-hover:scale-95 sm:h-64" variants={imageMotion}>
                  <Link to={callout.urlTag}>
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-80"
                    />
                  </Link>
                </motion.div>

                {/* TEXT SECTION */}
                <motion.span variants={textMotion}>
                  {/* Collection Title */}
                  <h3 className="mt-6 text-1xl font-none text-indigo-600">
                    <a href={callout.href}>
                      {callout.name}
                    </a>
                  </h3>

                  {/* Collection Description */}
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </motion.span>

              </div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* NAVIGATION BAR */}
      <Footer/>
    </div>
  )
}

export default MenClothing