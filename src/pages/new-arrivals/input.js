// TEXT input for "ProductCategory"
const input = {
  // General Information
  name: {
    category:'New Arrivals',
  },

  // Sort Filter
  sortOptions: [
      { name: 'Most Popular', href: 'https://www.google.com/', current: true },
      { name: 'Best Rating', href: 'https://www.google.com/', current: false },
      { name: 'Newest', href: 'https://www.google.com/', current: false },
      { name: 'Price: Low to High', href: 'https://www.google.com/', current: false },
      { name: 'Price: High to Low', href: 'https://www.google.com/', current: false },
  ],

  // Category Filter
  subCategories: [
      { name: 'Totes', href: 'https://www.google.com/' },
      { name: 'Backpacks', href: 'https://www.google.com/' },
      { name: 'Travel Bags', href: 'https://www.google.com/' },
      { name: 'Hip Bags', href: 'https://www.google.com/' },
      { name: 'Laptop Sleeves', href: 'https://www.google.com/' },
  ],

  // Specific Category Filters
  filters: [
      {
        id: 'gender',
        name: 'Gender',
        options: [
            { value: 'male', label: 'Male', checked: false },
            { value: 'female', label: 'Female', checked: false },
            { value: 'unisex', label: 'Unisex', checked: false },
        ]
      },
      {
          id: 'color',
          name: 'Color',
          options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
          ],
        },
        {
          id: 'category',
          name: 'Category',
          options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
          ],
        },
        {
          id: 'size',
          name: 'Size',
          options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: false },
          ],
        },
  ],

  // Product Listing
  products: [
    {
      id: 1,
      name: 'Earthen Bottle',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$38',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      category: "Men's T-Shirts",
      href: 'https://www.google.com/',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
}

export default input;