import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// TEXT INPUT HERE
const products = [
  {
    id: 1,
    name: 'Palm Silk T-Shirt',
    category: "Men's Casual T-Shirts",
    href: '/luna-demo/men/clothing/tops/basic-tee/',
    price: '$158.00',
    quantity: 2,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/ST326336_11438_main?$main_detail_500$',
    imageAlt: 'image 1',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    category: "Women's Accessories",
    href: '/luna-demo/error/',
    price: '$60.00',
    quantity: 1,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/BR34723BLWG_1055_main?$main_detail_500$',
    imageAlt: 'image 2',
  },
  {
    id: 3,
    name: 'Coastal Breeze Polo Shirt',
    category: "Men's Polo Shirt",
    href: '/luna-demo/error/',
    price: '$90.00',
    quantity: 2,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/T220856_19393_main?$main_detail_500$',
    imageAlt: 'image 3',
  },
  {
    id: 4,
    name: 'Chip Shot 10-Inch Shorts',
    category: "Men's Pants",
    href: '/luna-demo/error/',
    price: '$110.00',
    quantity: 1,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/ST889700_2939_main?$main_detail_500$',
    imageAlt: 'image 4',
  },
  {
    id: 5,
    name: 'Palm Silk T-Shirt',
    category: "Men's Casual T-Shirts",
    href: '/luna-demo/error/',
    price: '$158.00',
    quantity: 1,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/ST326336_11438_main?$main_detail_500$',
    imageAlt: 'image 1',
  },
  {
    id: 6,
    name: 'Medium Stuff Satchel',
    category: "Women's Accessories",
    href: '/luna-demo/error/',
    price: '$60.00',
    quantity: 1,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/BR34723BLWG_1055_main?$main_detail_500$',
    imageAlt: 'image 2',
  },
  {
    id: 7,
    name: 'Coastal Breeze Polo Shirt',
    category: "Men's Polo Shirt",
    href: '/luna-demo/error/',
    price: '$90.00',
    quantity: 2,
    imageSrc: 'https://tommybahama.scene7.com/is/image/TommyBahama/T220856_19393_main?$main_detail_500$',
    imageAlt: 'image 3',
  },

  // More products...
];

const ShoppingCart = () => {
  // Condition state for opening and closing of shopping cart menu
  const [open, setOpen] = useState(true);

  // Condition state for calculating total price in shopping cart
  const [totalPrice, setTotalPrice] = useState(0);
  
  // Function to add up price
  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      for (const product of products) {
        const price = parseFloat(product.price.replace('$', ''));
        const quantity = product.quantity;
        total += price * quantity;
      }
      setTotalPrice(total);
    };
  
    calculateTotalPrice();
  });

  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.25, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  const handleCheckout = async () => {

      fetch('/create-checkout-session', {
        method: 'POST',
      })
      .then(res => res.json())
      .then(url => {
        window.location.href = url
      })
      .catch(err => console.log(err))
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* Background Screen Transition */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Background Screen */}
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </Transition.Child>
        
        {/* Shopping Cart Menu Position */}
        <motion.div className="fixed inset-y-0 right-0 flex max-w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
          variants={containerMotion}
          >
          {/* Side Menu Transition */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            {/* Shopping Cart Menu Settings */}
            <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  {/* Title + Exit Button */}
                  <motion.div className="flex items-start justify-between" variants={textMotion}>
                    {/* Header Text */}
                    <h1 className="text-lg font-medium text-gray-900">Shopping Cart</h1>
                    
                    {/* Exit Button */}
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-indigo-600"
                        onClick={() => setOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Product Image + Info + Description + Price */}
                  <motion.div className="mt-8" variants={textMotion}>
                      <ul className="-my-6 divide-y divide-gray-200"> {/* Border Divider */}
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            {/* Product Image */}
                            <Link to={product.href}>
                              <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg shadow transition-transform duration-300 transform hover:scale-95">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center hover:opacity-75"
                                />
                              </div>
                            </Link>

                            <div className="ml-4 flex flex-1 flex-col">
                              {/* Product Description */}
                              <div className="flex justify-between">
                                {/* Product Name */}
                                <Link to={product.href}>
                                  <h3 className='text-base font-medium text-gray-900 hover:text-indigo-600'>
                                    {product.name}
                                  </h3>
                                </Link>

                                {/* Product Price */}
                                <p className="ml-4 text-base font-medium text-gray-900">{product.price}</p>
                              </div>

                              {/* Product Category */}
                              <p className="mt-1 text-sm text-gray-400">{product.category}</p>
                              
                              {/* Quantity + Remove Features */}
                              <div className="flex flex-1 items-end justify-between text-sm">
                                {/* Product Quantity */}
                                <p className="text-gray-500">Qty {product.quantity}</p>

                                {/* Remove Button */}
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-normal text-indigo-600 hover:underline"
                                  >
                                    Remove
                                  </button>
                                </div>
                                
                              </div>
                              
                            </div>
                          </li>
                        ))}
                      </ul>
                  </motion.div>
                </div>

                {/* STATIONARY Checkout Tab */}
                <motion.div className="border-t border-gray-200 px-4 py-6 sm:px-6" variants={textMotion}>
                  {/* Subtotal Price */}
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>

                    {/* Subtotal Price to in US locale (commas) and TWO Decimal Places */}
                    <p>${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>

                  {/* Subtitle Information */}
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>

                  {/*<Link to="/create-checkout-session"
                      type="submit"
                      className="flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-indigo-700 hover:shadow-none"
                    >
                      Checkout
                    </Link>/*
                  
                  {/* Checkout Button */}
                  <div className="mt-6">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </button>
                    
                  </div>
                  
                  {/* Additional Information */}
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-purple-500 ml-1"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping &rarr;
                      </button>
                    </p>
                  </div>
                  
                </motion.div>

              </div>
            </Dialog.Panel>

          </Transition.Child>
        </motion.div>

      </Dialog>
    </Transition.Root>
  )
}

export default ShoppingCart