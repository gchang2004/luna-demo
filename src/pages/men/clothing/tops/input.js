// TEXT input for "ProductCategory"
const Input = {
  // General Information
  name: {
    category: 'Tops',
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
      { name: 'Bottoms', href: '/men/clothing/bottoms' },
      { name: 'Innerwear', href: '/men/clothing/innerwear' },
      { name: 'Outerwear', href: '/men/clothing/outerwear' },
      { name: 'Activewear', href: '/men/clothing/activewear' },
      { name: 'Browse All', href: '/men/clothing' },
  ],

  // Specific Category Filters
  filters: [
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 't-shirts', label: 'T-Shirts', checked: false },
        { value: 'long sleeves', label: 'Long Sleeves', checked: false },
        { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
        { value: 'hoodies', label: 'Hoodies', checked: false },
        { value: 'polo shirts', label: 'Polo Shirts', checked: false },
      ],
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
      name: 'Basic Tee 6-Pack',
      category: "Men's T-Shirts",
      href: '/men/clothing/tops/basic-tee',
      price: '$192',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      imageAlt: 'blah blah',
    },
    {
      id: 2,
      name: 'XNomad Tumbler',
      category: "Men's T-Shirts",
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      category: "Men's T-Shirts",
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      category: "Men's T-Shirts",
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Earthen Bottle',
      category: "Men's T-Shirts",
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      category: "Men's T-Shirts",
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      category: "Men's T-Shirts",
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      category: "Men's T-Shirts",
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
}

export default Input;