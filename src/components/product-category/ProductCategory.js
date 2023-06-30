import { Fragment, useState } from 'react';
import { ProductList } from '../../components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProductCategory = ({ name, sortOptions, subCategories, filters, products }) => {
  // condition for opening and closing MOBILE filter button
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // condition for hiding the side column in DESKTOP view
  const [sideColumn, setSideColumn] = useState(true);

  // stagger motion animation
  const containerMotion = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' }}, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      {/* Mobile Filter */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
          {/* Filter Transition */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          
          {/* Mobile Filter Layout */}
          <motion.div className="fixed inset-0 z-40 flex"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.1}}
            variants={containerMotion}
            >
            {/* Layout Transition */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12">
                {/* Title + Exit Button */}
                <motion.div className="flex items-center justify-between px-5" variants={textMotion}>
                  {/* Filter Title */}
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  
                  {/* Exit Button */}
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-indigo-600"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6"/>
                  </button>
                </motion.div>

                {/* Category Filters */}
                <form className="mt-4 border-t border-gray-200 mx-1">
                  {/* Category Titles */}
                  <ul className="px-2 py-3 font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <motion.li key={category.name} variants={textMotion}>
                        <Link to={category.href} className="block px-2 py-3 hover:text-indigo-600">
                          {category.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* DROPDOWN Category Filters */}
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                      {({ open }) => (
                        <>
                          {/* Name + Icon to open dropdown feature */}
                          <motion.h3 className="-mx-2 -my-3 flow-root" variants={textMotion}>
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-indigo-600">
                              {/* Dropdown Name */}
                              <span className="font-medium text-gray-900 hover:text-indigo-600">
                                {section.name}
                              </span>

                              {/* Icon Switching Logic */}
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </motion.h3>

                          {/* Inside of Dropdown Panel */}
                          <Disclosure.Panel className="pt-5">
                            <motion.div className="space-y-6"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{once: true, amount: 0.2}}
                              variants={containerMotion}
                              >
                              {section.options.map((option, optionIdx) => (
                                <motion.div key={option.value} className="flex items-center px-1" variants={textMotion}>
                                  {/* Checkbox */}
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />

                                  {/* Dropdown Options */}
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500 hover:text-indigo-600"
                                  >
                                    {option.label}
                                  </label>

                                </motion.div>
                              ))}
                            </motion.div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}

                </form>

              </Dialog.Panel>
            </Transition.Child>
          </motion.div>

        </Dialog>
      </Transition.Root>

      {/* Desktop Filter */}
      <motion.main className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-9"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.1}}
        >
        {/* TOP ROW */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-5 pt-5">
          {/* Category Title*/}
          <motion.h1 className="text-3xl font-bold tracking-tight text-gray-900" variants={textMotion}>{name.category}</motion.h1>
          
          {/* Sort + Grid Icon */}
          <div className="flex items-center">
            {/* Dropdown SORT*/}
            <motion.span variants={textMotion}>
              <Menu as="div" className="relative inline-block text-left">
                {/* Sort Button */}
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-indigo-600">
                  Sort
                  {/* Dropdown Arrow */}
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-700 hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </Menu.Button>

                {/* Dropdown Layout */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <motion.div className="py-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once: true, amount: 0.1}}
                      variants={containerMotion}
                      >
                      {/* Dropdown Options */}
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <motion.span variants={textMotion}>
                              <Link to={option.href} className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'text-indigo-600' : '',
                                'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </Link>
                            </motion.span>
                          )}
                        </Menu.Item>
                      ))}
                    </motion.div>
                  </Menu.Items>
                </Transition>

              </Menu>
            </motion.span>

            {/* Square Icon Grid */}
            <motion.button type="button" className="hidden lg:block -m-2 ml-2 p-2 text-gray-500 hover:text-indigo-600 sm:ml-4 sm:mr-0.5" variants={textMotion}>
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="w-6 h-6"
                   onClick={() => setSideColumn(!sideColumn)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
            </motion.button>
            
            {/* Adjust Filter Icon -> MOBILE ONLY */}
            <motion.button
              type="button"
              className="-m-2 p-2 ml-2 text-gray-500 hover:text-indigo-600 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
              variants={textMotion}
            >
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* SIDE COLUMN + PRODUCT GRID */}
        <section className="pb-20 pt-6">    
          <div className="grid gap-x-8 lg:grid-cols-4">
            {/* Side Column */}
            <form className="hidden lg:block">
              {/* Categories */}
              <ul className="space-y-4 border-b border-gray-200 pb-6 text-md font-medium text-gray-900">
                {subCategories.map((category) => (
                  <motion.li key={category.name} variants={textMotion}>
                    <Link to={category.href} className='hover:text-indigo-600'>
                      {category.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              {/* Category Filters */}
              {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                  {({ open }) => (
                    <>
                      {/* Category Titles */}
                      <motion.h3 className="-my-3 flow-root" variants={textMotion}>
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-indigo-600">
                          {/* Dropdown Name */}
                          <span className="text-md font-medium text-gray-900 hover:text-indigo-600">{section.name}</span>
                          
                          {/* Icon Switching Logic */}
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <PlusIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </motion.h3>

                      {/* DROPDOWN Category Filters */}
                      <Disclosure.Panel className="pt-5">
                        <motion.div className="space-y-4 mx-1"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once: true, amount: 0.2}}
                          variants={containerMotion}
                          >
                          {section.options.map((option, optionIdx) => (
                            <motion.div key={option.value} className="flex items-center" variants={textMotion}>
                              {/* Checkbox */}
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              {/* Dropdown Options */}
                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-md text-gray-600 hover:text-indigo-600"
                              >
                                {option.label}
                              </label>
                            </motion.div>
                          ))}
                        </motion.div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {<ProductList products={products} />}
            </div>
          </div>
        </section>

      </motion.main>
    </div>
  )
}

export default ProductCategory