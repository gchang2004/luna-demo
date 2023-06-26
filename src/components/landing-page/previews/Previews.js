import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ENTER TEXT DESCRIPTIONS HERE
const callouts = [
  {
    name: 'New Arrivals',
    description: 'Discover the Latest Styles',
    imageSrc: 'https://img.freepik.com/free-photo/cute-couple-posing-together_23-2149056554.jpg?w=740&t=st=1687739009~exp=1687739609~hmac=3475bd712bf99f18c6a36d83f0960901dd30d0383d0b24e4870482269f262fe6',
    imageAlt: 'trending collection #1',
    to: '/luna-demo/new-arrivals/',
  },
  {
    name: 'Summertime Vibes',
    description: 'Step Into Summer with Confidence',
    imageSrc: 'https://img.freepik.com/free-photo/smiling-young-man-showing-away-beach_23-2148165049.jpg?w=740&t=st=1685852410~exp=1685853010~hmac=4fdcc0a45cf473840a0f0410dda1a2d220898a300eec12c2465579d0cc96284b',
    imageAlt: 'trending collection #2',
    to: '/luna-demo/summer-sale/',
  },
  {
    name: 'Activewear for All',
    description: 'Unlease Your Workout Game',
    imageSrc: 'https://img.freepik.com/free-photo/beautiful-woman-yoga-outfit-with-headband-sportswear-fashion-shoot_53876-102114.jpg?w=1060&t=st=1685852311~exp=1685852911~hmac=58f5d012db313ecce9e510937dff23aad92315654e9267c8be034a834ee9faa5',
    imageAlt: 'trending collection #3',
    to: '/luna-demo/activewear/',
  },
  {
    name: 'Accessories',
    description: 'Find The Perfect Finishing Touch',
    imageSrc: 'https://img.freepik.com/free-photo/gold-chain-plants-arrangement_23-2149836424.jpg?w=740&t=st=1685853152~exp=1685853752~hmac=b3e21e576b583fa15c398a0b4e552ceb439b207eed86a1573fb941e66461a1a3',
    imageAlt: 'trending collection #3',
    to: '/luna-demo/accessories/',
  },
]

const Previews = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
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
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl py-14 lg:max-w-none lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerMotion}
          >
          {/* SECTION TEXT */}
          <div className='flex'>
            <motion.h2 className="text-2xl font-bold text-gray-900 mr-1.5" variants={textMotion}>
              Explore
            </motion.h2>
            <motion.h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 mr-1.5" variants={textMotion}>
              Trending
              </motion.h2>
            <motion.h2 className="text-2xl font-bold text-gray-900" variants={textMotion}>
              Collections
            </motion.h2>
          </div>

          {/* REUSABLE TEMPlATE FORMAT */}
          <div className="mt-6 space-y-12 lg:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                
                {/* Collection Image */}
                <motion.div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 shadow-xl transition-transform duration-300 transform group-hover:scale-95 sm:h-64" variants={imageMotion}>
                  <Link to={callout.to}>
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
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                  
                </motion.span>

              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  )
}

export default Previews