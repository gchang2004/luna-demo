import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lunaLetter from '../../assets/logos/luna-letter.png'

const SignIn = () => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for IMAGE
  const textMotion = {
    // movement = FADE-IN + SLIDE DOWN
    hidden: { opacity: 0, y: -50 }, // INITIAL STAGE
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeInOut' } }, // ANIMATION STAGE
  };

  return (
      <motion.div className="flex flex-col items-center justify-center min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        variants={containerMotion}
        >
        {/* LOGO + Title */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.span variants={textMotion}>
            <Link to="/luna-demo/">
              <img
                className="mx-auto h-12 w-auto"
                src={lunaLetter}
                alt="Company Logo"
              />
            </Link>
          </motion.span>
          <motion.h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" variants={textMotion}>
            Sign in to your account
          </motion.h2>
        </div>

        {/* Input Section */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/* Email Address */}
            <motion.div variants={textMotion}>
              {/* Text Label */}
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>

              {/* Text Input */}
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </motion.div>

            {/* Password */}
            <motion.div variants={textMotion}>
              <div className="flex items-center justify-between">
                {/* Text Label */}
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>

                {/* Forgot Password Link */}
                <div className="text-sm">
                  <Link to="/luna-demo/error/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* Text Input */}
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

            </motion.div>

            {/* Submit Button */}
            <motion.div variants={textMotion}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign In
              </button>
            </motion.div>

          </form>

          {/* SIGN UP Link */}
          <motion.p className="mt-10 text-center text-sm text-gray-500" variants={textMotion}>
            Not a member?{' '}
            <Link to="/error/" className="font-semibold leading-6 text-indigo-600 hover:text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500">
              Join today for free.
            </Link>
          </motion.p>

        </div>
        
      </motion.div>
  )
}

export default SignIn