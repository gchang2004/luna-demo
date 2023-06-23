import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductOverview = ({ product, reviews }) => {
  // Color Selection -> default = none is selected
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Size Selection -> default = none is selected
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  // Image Selection -> default = first image is shown
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.05 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      <motion.div className="pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        variants={containerMotion}
        >
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-6 lg:max-w-7xl lg:px-10">
            {/* Breadcrumb FUNNEL Texts */}
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  {/* Breadcrumb Text */}
                  <motion.span variants={textMotion}>
                    <Link
                      to={breadcrumb.to}
                      className="mr-2 text-sm font-medium text-gray-500 hover:text-indigo-600"
                    >
                      {breadcrumb.name}
                    </Link>
                  </motion.span>

                  {/* Breadcrumb Backslash SVG */}
                  <motion.span variants={textMotion}>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                  </motion.span>
                </div>
              </li>
            ))}

            {/* Breadcrumb PRODUCT Text */}
            <li className="text-sm">
              <motion.span variants={textMotion}>
                <Link
                  to={product.href}
                  aria-current="page"
                  className="font-medium text-gray-900 hover:text-indigo-600"
                >
                  {product.name}
                </Link>
              </motion.span>
            </li>
          </ol>
        </nav>

        {/* PRODUCT */}
        <div className="flex flex-col mx-auto lg:flex-row lg:max-w-7xl">
          {/* IMAGE GALLERY */}
          <div className="flex-1 mx-auto mt-6 pb-4 sm:pb-6 lg:pb-32 max-w-2xl sm:px-6 lg:px-8">
            {/* Main Image */}
            <motion.div className="overflow-hidden sm:rounded-lg shadow-lg flex justify-center items-center lg:mr-5 lg:ml-5" variants={textMotion}>
              {/* Image 0 is shown first = first image on list */}
              <img
                src={product.images[selectedImageIndex].src}
                alt={product.images[selectedImageIndex].alt}
                className="h-full w-auto object-cover object-center"
              />
            </motion.div>

            {/* Small Images */}
            <motion.div className="lg:flex flex justify-center space-x-4 border-t border-gray-300 pt-1 mt-8" variants={textMotion}>
              {/* Indexes through image list for gallery effect */}{
              product.images.slice(0).map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  // Image panels
                  className={`mt-8 h-28 w-28 rounded-lg shadow-lg object-cover object-center cursor-pointer ${
                    selectedImageIndex === index ? 'opacity-75 transition-transform duration-300 transform hover:scale-95' : ''
                  }`}
                  // Auto switch feature if mouse hovers on panel
                    onMouseEnter={() => setSelectedImageIndex(index)} //switch image when hovering
                    onMouseLeave={() => setSelectedImageIndex(selectedImageIndex)} //maintain image when hovering
                    onClick={() => setSelectedImageIndex(index)} //maintain image when clicked
                />
              ))}
            </motion.div>
          </div>

          {/* PRODUCT INFO */}
          <div className="flex-1 mx-auto max-w-2xl px-6 pb-4 pt-4 sm:px-7 lg:max-w-7xl lg:px-14 lg:pt-8">
            {/* Product Name */}
            <motion.h1 className="pt-5 lg:pt-0 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" variants={textMotion}>
              {product.name}
            </motion.h1>

            {/* Product Options -> COLUMN */}
            <div className="mt-4">
              {/* Price */}
              <motion.p className="text-2xl tracking-tight text-gray-900 sm:text-3xl" variants={textMotion}>
                {product.price}
              </motion.p>

              {/* 5 Star Reviews */}
              <motion.div className="mt-6 mb-10" variants={textMotion}>
                <div className="flex items-center">
                  {/* Star Rating Display */}
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* # of Reviews */}
                  <Link
                    to={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </Link>
                </div>
              </motion.div>

              {/* COLOR OPTION */}
              <motion.div variants={textMotion}>
                {/* Color Selection HEADER */}
                <h3 className="text-md font-medium text-gray-900 mb-4">
                  Color
                </h3>

                {/* Color Selection DISPLAY */}
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          // Color Selection RING
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            // selected color ring display logic
                          )
                        }
                      >
                        {/* Color Selection CIRCLE */}
                        <span
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </motion.div>

              {/* SIZE OPTION */}
              <motion.div className="mt-10" variants={textMotion}>
                {/* Size Selection HEADER */}
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium text-gray-900">Size</h3>
                  <Link
                    to="/luna-demo/error/"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size Guide
                  </Link>
                </div>

                {/* Size Selection DISPLAY */}
                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-6">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        // Size Selection RING
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-lg border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            {/* Size Name */}
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {/* IN-STOCK Boxes*/}
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-lg"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              // OUT-OF-STOCK Boxes
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-lg border-2 border-gray-200"
                              >
                                {/* Out-of-Stock Backslash*/}
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </motion.div>

              {/* BUY Button */}
              <motion.span variants={textMotion}>
                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {/* Shopping bag icon */}
                  <ShoppingBagIcon
                    className="h-5 w-5 text-white mr-2"
                    aria-hidden="true"
                  />
                  Add to Bag
                </button>
              </motion.span>
            </div>

            {/* Product Description & Details */}
            <div className="pt-10 lg:pb-16 lg:pr-8">
              {/* Main Product Info */}
              <motion.p className="text-base text-gray-900" variants={textMotion}>{product.description}</motion.p>

              {/* Product Bulletpoints */}
              <div className="mt-8">
                {/* Bulletpoint Title */}
                <motion.h3 className="text-md font-medium text-gray-900" variants={textMotion}>
                  Highlights
                </motion.h3>

                {/* Bulletpoint Text */}
                <div className="mt-4">
                  <motion.ul className="list-disc space-y-2 pl-4 text-md" variants={textMotion}>
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-500">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </motion.ul>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                {/* Detail Header */}
                <motion.h2 className="text-md font-medium text-gray-900" variants={textMotion}>Details</motion.h2>

                {/* Detail Description */}
                <motion.div className="mt-3" variants={textMotion}>
                  <p className="text-sm text-gray-600">{product.details}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductOverview;
