import React from 'react';
import { NavBar, Footer } from '../../components';
import armstrong from '../../assets/logos/armstrong.png'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Error = () => {
// stagger motion animation
const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
};

// animation parameters for IMAGE
const textMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0}, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }, // ANIMATION STAGE
};

return (
  <motion.div className="bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{once: true, amount: 0.2}}
    variants={containerMotion}
    >
    {/* NAVIGATION BAR */}
    <NavBar />

    <main className="py-60 sm:py-56">
        <div className='text-center'>
        {/* 404 Error */}
        <motion.p className="text-base font-semibold text-indigo-600 mb-2" variants={textMotion}>404</motion.p>

        {/* Company Logo */}
        <motion.span variants={textMotion}>
            <Link to="/luna-demo/">
            <img
                className="mx-auto h-24 w-auto"
                src={armstrong}
                alt="Company Logo"
            />
            </Link>
        </motion.span>
        
        {/* Error Message */}
        <motion.h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" variants={textMotion}>Page not found</motion.h1>
        <motion.p className="mt-6 text-base leading-7 text-gray-600" variants={textMotion}>
            Sorry, we couldn’t find the page you’re looking for.
        </motion.p>
        
        {/* BUTTON OPTIONS */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* Home Page Button */}
            <motion.span variants={textMotion}>
                <Link to="/luna-demo/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-none hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Go back home
                </Link>
            </motion.span>

            {/* Send Email Button */}
            <motion.a href='mailto:contact@luna.io
                    ?subject=Luna%20Support:%20[INSERT%20Name]%20-%20[For%20Questions%20or%20Inquiries]%20
                    &body=Type%20Your%20Message%20Here'
                      className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
                      variants={textMotion}>
            Contact Support
            </motion.a>
        </div>

        </div>
    </main>

    {/* NAVIGATION BAR */}
    <Footer/>
</motion.div>
)
}

export default Error