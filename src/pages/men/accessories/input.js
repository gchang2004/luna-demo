// TEXT input for "ProductCategory"
const Input = {
    // General Information
    name: {
      category:'Accessories',
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
        { name: 'Hats', href:'/luna-demo/men/accessories/hats'},
        { name: 'Sunglasses', href: '/luna-demo/men/accessories/sunglasses' },
        { name: 'Belts', href: '/luna-demo/men/accessories/belts' },
        { name: 'Wallets', href: '/luna-demo/men/accessories/wallets' },
        { name: 'Bags & Backpacks', href: '/luna-demo/men/accessories/bagsbackpacks' },
    ],
  
    // Specific Category Filters
    filters: [
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
        name: 'Nike Sportswear Premium Essentials',
        category: "Men's T-Shirts",
        href: './tops/nike1',
        price: '$45',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a439643-992e-4729-a170-b018a7e5c319/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png',
        imageAlt: 'image 1',
      },
      {
        id: 2,
        name: 'Nike Sportswear Club',
        category: "Men's T-Shirts",
        href: './tops/nike2',
        price: '$30',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hfoqjmvml1z5itd4lzg5/sportswear-club-mens-t-shirt-ShrJfX.png',
        imageAlt: 'image 2',
      },
      {
        id: 3,
        name: 'Nike Sportswear Max90',
        category: "Men's T-Shirts",
        href: './tops/nike3',
        price: '$45',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8989c881-7198-4c89-8831-d22601a1076f/sportswear-max90-mens-t-shirt-svKSmj.png',
        imageAlt: 'image 3',
      },
      {
        id: 4,
        name: 'Nike ACG',
        category: "Men's T-Shirts",
        href: './tops/nike4',
        price: '$55',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17c9ba57-557b-4436-a616-4c3966b4babd/acg-mens-t-shirt-rhKHRp.png',
        imageAlt: 'image 4',
      },
      {
        id: 5,
        name: 'Nike Dri-FIT',
        category: "Men's T-Shirts",
        href: './tops/nike5',
        price: '$30',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ylfy1desh7d7fzidimas/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
        imageAlt: 'image 5',
      },
      // More products...
    ]
  }
  
  export default Input;