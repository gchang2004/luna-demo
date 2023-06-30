// TEXT input for "ProductCategory"
const Input = {
    // General Information
    name: {
      category:'Collaborations',
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
        { name: 'Suspicious Antwerp', href:'https://www.suspiciousantwerp.com/en-us'},
        { name: 'Vineyard Vines', href: 'https://www.vineyardvines.com/' },
        { name: 'Nike', href: 'https://www.nike.com/' },
        { name: 'Urban Outfitters', href: 'https://www.urbanoutfitters.com/' },
    ],
  
    // Specific Category Filters
    filters: [
      {
        id: 'category',
        name: 'Category',
        options: [
          { value: 'tops', label: 'Tops', checked: false },
          { value: 'bottoms', label: 'Bottoms', checked: false },
          { value: 'innerwear', label: 'Innerwear', checked: false },
          { value: 'outerwear', label: 'Outerwear', checked: false },
          { value: 'activewear', label: 'Activewear', checked: false },
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
        name: 'The Odyssey Hoodie',
        category: "Suspicious Antwerp X Luna",
        href: 'https://www.suspiciousantwerp.com/en-us/collections/coming_soon/products/suspicious-x-yacht-week-the-odyssey-hoodie-soft-blue',
        price: '$122',
        imageSrc: 'https://cdn.shopify.com/s/files/1/1610/4725/files/ywhdblueback.jpg?v=1687791114&width=1540',
        imageAlt: 'image 1',
      },
      {
        id: 2,
        name: 'Lacrosse Whale Short-Sleeve Pocket Tee',
        category: "Vineyard Vines X Luna",
        href: 'https://www.vineyardvines.com/mens-t-shirts/lacrosse-whale-fill-short-sleeve-pocket-tee/1V018693.html?dwvar_1V018693_color=3084&cgid=men-graphic-tees#start=6&cgid=men-graphic-tees',
        price: '$45',
        imageSrc: 'https://www.vineyardvines.com/dw/image/v2/AAHW_PRD/on/demandware.static/-/Sites-vineyardvines-master/default/dw333de260/images/2023/1V018693_3084_LD_0992_B.jpg?sw=1680&sh=2000&sm=cut&strip=false',
        imageAlt: 'image 2',
      },
      {
        id: 3,
        name: 'Nike Air Force 1',
        category: "Nike X Luna",
        href: 'https://www.nike.com/t/air-force-1-07-mens-shoes-jBrhbr/CW2288-111',
        price: '$110',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
        imageAlt: 'image 3',
      },
      {
        id: 4,
        name: 'Polo Oxford Striped Short',
        category: "Urban Outfitters X Luna",
        href: 'https://www.urbanoutfitters.com/shop/frankie-collective-rework-polo-oxford-striped-short-012?category=mens-shorts&color=066&type=REGULAR&size=S&quantity=1',
        price: '$80',
        imageSrc: 'https://images.urbndata.com/is/image/UrbanOutfitters/85292746_066_m?$xlarge$&fit=constrain&fmt=webp&qlt=80&wid=1314',
        imageAlt: 'image 4',
      },
      // More products...
    ]
  }
  
  export default Input;