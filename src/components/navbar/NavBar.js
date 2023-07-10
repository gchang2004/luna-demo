import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import lunaLetter from "../../assets/logos/luna-letter.png";

import { ShoppingCart } from "../../components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// TEXT INPUT CHANGE HERE ONLY
const navigation = {
  // Women & Men Sections
  categories: [
    // WOMEN SECTON
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/luna-demo/new-arrivals/",
          imageSrc: "https://img.freepik.com/premium-photo/model-women-dressed-fashionable-pastel-blazers-pants-with-stylish-sneakers-posing-cube-white-background-studio_8544-2564.jpg?w=740",
          imageAlt: "new arrivals - women",
        },
        {
          name: "Featured",
          href: "/luna-demo/women/",
          imageSrc: "https://img.freepik.com/free-photo/shirt-mockup-concept-with-plain-clothing_23-2149448737.jpg",
          imageAlt: "women collections",
        },
      ],

      sections: [
        // Women's Clothing
        {
          id: "clothing",
          name: "Clothing",
          href: "/luna-demo/women/clothing/",
          items: [
            { name: "Tops", href: "/luna-demo/women/clothing/tops/" },
            { name: "Bottoms", href: "/luna-demo/women/clothing/bottoms/" },
            { name: "Dresses & Skirts", href: "/luna-demo/women/clothing/dresses-&-skirts/" },
            { name: "Innerwear", href: "/luna-demo/women/clothing/innerwear/" },
            { name: "Outerwear", href: "/luna-demo/women/clothing/outerwear/" },
            { name: "Activewear", href: "/luna-demo/women/clothing/activewear/" },
            { name: "Browse All", href: "/luna-demo/women/clothing/" },
          ],
        },

        // Men's Accessories
        {
          id: "accessories",
          name: "Accessories",
          href: "/luna-demo/women/accessories/",
          items: [
            { name: "Hats", href: "/luna-demo/women/accessories/hats/" },
            { name: "Sunglasses", href: "/luna-demo/women/accessories/hats/sunglasses/" },
            { name: "Belts", href: "/luna-demo/women/accessories/belts/" },
            { name: "Wallets", href: "/luna-demo/women/accessories/wallets/" },
            { name: "Bags & Backpacks", href: "/luna-demo/women/accessories/bags-&-backpacks/" },
            { name: "Browse All", href: "/luna-demo/women/accessories/" },
          ],
        },

        // Brand Collaborations
        {
          id: "brands",
          name: "Brands",
          href: "/luna-demo/women/brands/",
          items: [
            { name: "PrettyLittleThing", href: "https://www.prettylittlething.us/" },
            { name: "Princess Polly", href: "https://us.princesspolly.com/" },
            { name: "Lululemon", href: "https://shop.lululemon.com/" },
            { name: "Alo Yoga", href: "https://www.aloyoga.com/" },
            { name: "Beginning Boutique",href: "https://www.beginningboutique.com/" },
          ],
        },
      ],
    },

    // MEN SECTION
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/luna-demo/new-arrivals/",
          imageSrc: "https://img.freepik.com/free-photo/handsome-man-autumn-setting_23-2149056580.jpg?w=740&t=st=1687738996~exp=1687739596~hmac=dfc9d6070d96915d23039569bd9e2e9d717e1ff6f9236f7dcf94307a630450af",
          imageAlt: "new arrivals - men",
        },
        {
          name: "Featured",
          href: "/luna-demo/men/",
          imageSrc: "https://img.freepik.com/premium-photo/shirt-mockup-concept-with-plain-clothing_23-2149448789.jpg?w=740",
          imageAlt: "mens collection",
        },
      ],

      sections: [
        // Men's Clothing
        {
          id: "clothing",
          name: "Clothing",
          href: "/luna-demo/men/clothing/",
          items: [
            { name: "Tops", href: "/luna-demo/men/clothing/tops/" },
            { name: "Bottoms", href: "/luna-demo/men/clothing/bottoms/" },
            { name: "Innerwear", href: "/luna-demo/men/clothing/innerwear/" },
            { name: "Outerwear", href: "/luna-demo/men/clothing/outerwear/" },
            { name: "Activewear", href: "/luna-demo/men/clothing/activewear/" },
            { name: "Browse All", href: "/luna-demo/men/clothing/" },
          ],
        },

        // Men's Accessories
        {
          id: "accessories",
          name: "Accessories",
          href: "/luna-demo/men/accessories/",
          items: [
            { name: "Hats", href: "/luna-demo/men/accessories/hats/" },
            { name: "Sunglasses", href: "/luna-demo/men/accessories/hats/sunglasses/" },
            { name: "Belts", href: "/luna-demo/men/accessories/belts/" },
            { name: "Wallets", href: "/luna-demo/men/accessories/wallets/" },
            { name: "Bags & Backpacks", href: "/luna-demo/men/accessories/bagsbackpacks/" },
            { name: "Browse All", href: "/luna-demo/men/accessories/" },
          ],
        },

        // Brand Collaborations
        {
          id: "collaborations",
          name: "Collaborations",
          href: "/luna-demo/men/brands/",
          items: [
            { name: "Suspicious Antwerp", href: "https://www.suspiciousantwerp.com/" },
            { name: "Vineyard Vines", href: "https://www.vineyardvines.com/" },
            { name: "Nike", href: "https://www.patagonia.com/home/" },
            { name: "Urban Outfitters", href: "/https://www.urbanoutfitters.com/" },
            { name: "Browse All", href: "/luna-demo/men/brands/" },
          ],
        },
      ],
    },
  ],

  // Additional NavBar Pages
  pages: [
    { name: "Company", href: "/luna-demo/error/" },
    { name: "Stores", href: "/luna-demo/error/" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  // Condition state for dropdown menu
  const [open, setOpen] = useState(false);

  // Condition state for shopping-cart menu
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Logic statement for handling shopping-cart menu
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  // stagger motion animation
  const containerMotion1 = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // stagger motion animation
  const containerMotion2 = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  // animation parameters for TEXT
  const textMotion = {
    // movement = FADE-IN
    hidden: { opacity: 0 }, // INITIAL STAGE
    visible: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } }, // ANIMATION STAGE
  };

  // animation parameters for TEXT
  const menuMotion = {
    // movement = FADE-IN
    hidden: { opacity: 0, y: -10 }, // INITIAL STAGE
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    }, // ANIMATION STAGE
  };

  return (
    <div className="bg-white">
      {/* MOBILE MENU */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-100 lg:hidden" onClose={setOpen}>
          {/* Fade-In Animation -> Main Screen */}
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

          {/* SideBar Menu */}
          <div className="fixed inset-0 z-100 flex">
            {/* Slide-In Animation - SideBar Only */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                {/* Close SideBar Button */}
                <motion.div
                  className="flex px-4 pb-2 pt-5"
                  variants={textMotion}
                >
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-indigo-600"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </motion.div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  {/* WOMEN & MEN TABS */}
                  <motion.div className="border-b border-gray-200"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={menuMotion}
                    >
                    <motion.span variants={textMotion}>
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900 hover:text-indigo-600',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </motion.span>
                  </motion.div>

                  {/* FEATURED COLLECTIONS + LINK LISTS */}
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        {/* Featured Collections -> IMAGES */}
                        <motion.div className="grid grid-cols-2 gap-x-4"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.2 }}
                          variants={containerMotion2}
                          >
                          {category.featured.map((item) => (
                            <motion.div key={item.name} className="group relative text-sm" variants={menuMotion}>
                              {/* Featured Image */}
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-xl bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              {/* Featured Title */}
                              <Link to={item.href} className="mt-6 block font-semibold text-gray-900 hover:text-indigo-600">
                                <span className="absolute inset-0 z-10"/>
                                {item.name}
                              </Link>
                              {/* Featured Subtitle */}
                              <p className="mt-1 text-gray-600 group-hover:text-gray-500">
                                Shop now
                              </p>
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* LINK Lists -> TEXT */}
                        {category.sections.map((section) => (
                          <motion.div key={section.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerMotion2}
                            >
                            {/* List Header */}
                            <Link to={section.href}>
                              <motion.p id={`${category.id}-${section.id}-heading-mobile`}
                                className="text-lg font-medium text-gray-900"
                                variants={menuMotion}>
                                  {section.name}
                              </motion.p>
                            </Link>
                            
                            {/* List Options */}
                            <motion.span variants={menuMotion}>
                              <ul
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-3 flex flex-col space-y-5"
                              >
                                {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <Link to={item.href} className="-m-2 block p-2 text-gray-500 hover:text-indigo-600">
                                        {item.name}
                                      </Link>
                                    </li>
                                ))}
                              </ul>
                              </motion.span>
                          </motion.div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>

                </Tab.Group>

                {/* Company and Store */}
                <motion.div
                  className="space-y-6 border-t border-gray-200 px-4 py-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={menuMotion}
                >
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900 hover:text-indigo-600"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </motion.div>

                {/* Sign In + Create Account */}
                <motion.div
                  className="space-y-6 border-t border-gray-200 px-4 py-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={menuMotion}
                >
                  <Link
                    to="/luna-demo/sign-in/"
                    className="-m-2 block p-2 font-medium text-gray-900 hover:text-indigo-600"
                  >
                    Sign In / Create Account
                  </Link>
                </motion.div>

                {/* Currency Setting */}
                <motion.div
                  className="border-t border-gray-200 px-4 py-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 1 }}
                  variants={menuMotion}
                >
                  {/* American Dollar -> Default Currencey */}
                  <Link
                    to="/luna-demo/error/"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/128/197/197484.png"
                      }
                      alt="United States of America"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium hover:text-indigo-600 hover:font-semibold">
                      USD
                    </span>
                  </Link>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* DESKTOP MENU */}
      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            className="border-b border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerMotion1}
          >
            <div className="flex h-16 items-center">
              {/* MOBILE BUTTON -> Hidden in Desktop View */}
              <motion.button
                variants={textMotion}
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 hover:text-indigo-600 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </motion.button>

              {/* COMPANY LOGO */}
              <motion.div className="ml-4 flex lg:ml-0" variants={textMotion}>
                <Link to="/luna-demo/">
                  <img
                    className="h-7 w-auto"
                    src={lunaLetter}
                    alt="Luna Inc."
                  />
                </Link>
              </motion.div>

              {/* CATEGORY HEADINGS */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8 items-center justify-center">
                  {/* Women + Men */}
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          {/* Category Heading Animations + Name */}
                          <motion.div
                            className="relative flex"
                            variants={textMotion}
                          >
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-800 hover:text-indigo-600",
                                "relative z-100 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </motion.div>

                          {/* Category Dropdown Animation */}
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            {/* Dropdown Menu Appearance */}
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="z-50 relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <motion.div
                                    className="grid grid-cols-2 gap-x-8 gap-y-10 py-10"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={containerMotion2}
                                  >
                                    {/* CATEGORY LISTING -> Text Format */}
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <motion.div
                                          key={section.name}
                                          variants={menuMotion}
                                        >
                                          {/* Category Title */}
                                          <Link to={section.href}>
                                            <p
                                              id={`${section.name}-heading`}
                                              className="font-medium text-gray-900"
                                            >
                                              {section.name}
                                            </p>
                                          </Link>

                                          {/* Category Listing*/}
                                          <ul
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-indigo-600"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </motion.div>
                                      ))}
                                    </div>

                                    {/* FEATURED COLLECTIONS -> Image Format */}
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <motion.div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                          variants={menuMotion}
                                        >
                                          {/* Image Panel */}
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>

                                          {/* Main Text */}
                                          <Link
                                            to={item.href}
                                            className="mt-6 block font-medium text-gray-900 hover:text-indigo-600"
                                          >
                                            <span
                                              className="absolute inset-0 z-100"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </Link>

                                          {/* Subtitle */}
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/* Company + Store */}
                  {navigation.pages.map((page) => (
                    <motion.span variants={textMotion}>
                      <Link
                        to={page.href}
                        className="flex items-center text-sm font-medium text-gray-800 hover:text-indigo-600"
                      >
                        {page.name}
                      </Link>
                    </motion.span>
                  ))}
                </div>
              </Popover.Group>

              {/* Navbar Additional Features */}
              <div className="ml-auto flex items-center">
                {/* Sign In + Create Account */}
                <motion.div
                  className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
                  variants={textMotion}
                >
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-3">
                    {/* Sign In Button */}
                    <Link to="/luna-demo/sign-in/">
                      {/* HOME ICON*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-400 hover:text-indigo-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                      </svg>
                    </Link>

                    {/* Separation Bar */}
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                    {/* Create Account Button */}
                    <Link
                      to="/luna-demo/error/"
                      className="text-sm font-medium text-gray-800 hover:text-indigo-600"
                    >
                      Create Account
                    </Link>
                  </div>
                </motion.div>

                {/* Currency Setting*/}
                <motion.div
                  className="hidden lg:ml-6 lg:flex"
                  variants={textMotion}
                >
                  <Link
                    to="/luna-demo/error/"
                    className="flex items-center text-gray-800 hover:text-indigo-600"
                  >
                    {/* American Dollar -> Default Currencey */}
                    <img
                      src={
                        "https://cdn-icons-png.flaticon.com/128/197/197484.png"
                      }
                      alt="United States of America"
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium hover:font-semibold">
                      USD
                    </span>
                  </Link>
                </motion.div>

                {/* Search Icon */}
                <motion.div className="flex lg:ml-6" variants={textMotion}>
                  <Link
                    to="/luna-demo/error/"
                    className="p-2 text-gray-400 hover:text-indigo-600"
                  >
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </Link>
                </motion.div>

                {/* Shopping Cart */}
                <motion.div
                  className="ml-4 flow-root lg:ml-6"
                  variants={textMotion}
                >
                  <div
                    onClick={handleCartClick}
                    className="group -m-2 flex items-center p-2"
                  >
                    {/* Cart Icon */}
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                    {/* # of Products Selected */}
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      0
                    </span>
                  </div>
                  {isCartOpen && <ShoppingCart variants={textMotion} />}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
