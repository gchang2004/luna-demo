import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Purpose = product listing in grid format
const ProductList = ( {products} ) => {
  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN + UPWARDS movement
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.25, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      {/* Product Grid Format */}
      <div className="mx-auto max-w-2xl px-4 py-2 sm:max-w-4xl lg:max-w-4xl">
        <motion.div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-3 lg:gap-x-8"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
          variants={containerMotion}
          >
          {products.map((product) => (
            <motion.span variants={textMotion}>
              <Link key={product.id} to={product.href} className="group">
                {/* Product Image */}
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7 transition-transform duration-300 transform group-hover:scale-95 shadow-lg" variants={textMotion}>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>

                {/* Product Name */}
                <h2 className="mt-5 ml-1 text-md sm:text-lg text-gray-900">{product.name}</h2>

                {/* Product Category */}
                <h3 className="mt-0 ml-1 text-sm sm:text-md text-gray-400">{product.category}</h3>

                {/* Product Price */}
                <p className="mt-1 ml-1 text-sm sm:text-md font-medium text-gray-900">{product.price}</p>
              </Link>
            </motion.span>
          ))}
        </motion.div>
        
      </div>
    </div>
  )
}

export default ProductList