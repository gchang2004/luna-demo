import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
  
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductOverview = ({ product, reviews }) => {
  // Color Selection -> default = none is selected
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  // Size Selection -> default = none is selected
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-6 lg:max-w-7xl lg:px-10">
            {/* Breadcrumb FUNNEL Texts */}
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  {/* Breadcrumb Text */}
                  <Link to={breadcrumb.to} className="mr-2 text-sm font-medium text-gray-500 hover:text-indigo-600">
                    {breadcrumb.name}
                  </Link>

                  {/* Breadcrumb Backslash SVG */}
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

                </div>
              </li>
            ))}

            {/* Breadcrumb PRODUCT Text */}
            <li className="text-sm">
              <Link to={product.href} aria-current="page" className="font-medium text-gray-900 hover:text-indigo-600">
                {product.name}
              </Link>
            </li>

          </ol>
        </nav>
        
        {/* PRODUCT */}
        <div className="flex flex-col mx-auto lg:flex-row lg:max-w-7xl">
          {/* IMAGE GALLERY */}
          <div className="flex-1 mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:grid-cols-1 lg:gap-y-8 lg:px-8">
            {/* Image #1 */}
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Image #2 */}
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Image #3 */}
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Image #4 */}
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.images[3].src}
                alt={product.images[3].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="flex-1 mx-auto max-w-2xl px-6 pb-4 pt-4 sm:px-7 lg:max-w-7xl lg:px-14 lg:pt-8">
            {/* Product Name */}
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

            {/* Product Options -> COLUMN */}
            <div className="mt-4">
              {/* Price */}
              <p className="text-2xl tracking-tight text-gray-900 sm:text-3xl">{product.price}</p>

              {/* 5 Star Reviews */}
              <div className="mt-6 mb-10">
                <div className="flex items-center">
                  {/* Star Rating Display */}
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* # of Reviews */}
                  <Link to={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </Link>
                </div>
              </div>

              {/* COLOR OPTION */}
              <div>
                {/* Color Selection HEADER */}
                <h3 className="text-md font-medium text-gray-900 mb-4">Color</h3>

                {/* Color Selection DISPLAY */}
                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                        // Color Selection RING
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            // selected color ring display logic 
                          )
                        }
                      >
                        {/* Color Selection CIRCLE */}
                        <span className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* SIZE OPTION */}
              <div className="mt-10">
                {/* Size Selection HEADER */}
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-medium text-gray-900">Size</h3>
                  <Link to="/luna-demo/error" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size Guide
                  </Link>
                </div>
                
                {/* Size Selection DISPLAY */}
                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
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
                              ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            active ? 'ring-2 ring-indigo-500' : '',
                            'group relative flex items-center justify-center rounded-lg border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            {/* Size Name */}
                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                            {/* IN-STOCK Boxes*/}
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-indigo-500' : 'border-transparent',
                                  'pointer-events-none absolute -inset-px rounded-lg'
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
                                  <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
              
              {/* BUY Button */}
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
            </div>

            {/* Product Description & Details */}
            <div className="pt-10 lg:pb-16 lg:pr-8">
              {/* Main Product Info */}
              <p className="text-base text-gray-900">{product.description}</p>

              {/* Product Bulletpoints */}
              <div className="mt-8">
                {/* Bulletpoint Title */}
                <h3 className="text-md font-medium text-gray-900">Highlights</h3>
                
                {/* Bulletpoint Text */}
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-md">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-500">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8">
                {/* Detail Header */}
                <h2 className="text-md font-medium text-gray-900">Details</h2>
                
                {/* Detail Description */}
                <div className="mt-3">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>

            </div>

          </div>

        </div>
    </div>
  </div>
  )
}

export default ProductOverview