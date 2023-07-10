
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Hats",
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
            { name: 'Sunglasses', href:'/luna-demo/men/accessories/sunglasses'},
            { name: 'Belts', href: '/luna-demo/men/accessories/belts' },
            { name: 'Wallets', href: '/luna-demo/men/accessories/wallets' },
            { name: 'Bags & Backpacks', href: '/luna-demo/men/accessories/bagsbackpacks' },
            { name: 'Browse All', href: '/luna-demo/men/accessories/' },
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
            name: 'clothing 1',
            category: 'TEXT',
            href: './Adidas1',
            price: '$21',
            imageSrc: 'https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1200/https://f.shgcdn.com/6d50c1af-d632-4bb7-b2e3-c907f11eb9d4/',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: 'clothin 2',
            category: 'TEXT',
            href: './Adidas2',
            price: '$35',
            imageSrc: 'TEXT',
            imageAlt: 'image',
        },
        {
            id: 3,
            name: 'clothin 2',
            category: 'TEXT',
            href: './Adidas3',
            price: '$35',
            imageSrc: 'TEXT',
            imageAlt: 'image',
        },
        {
            id: 4,
            name: 'clothin 2',
            category: 'TEXT',
            href: './Adidas4',
            price: '$35',
            imageSrc: 'TEXT',
            imageAlt: 'image',
        },
        {
            id: 5,
            name: 'clothin 2',
            category: 'TEXT',
            href: './Adidas5',
            price: '$35',
            imageSrc: 'TEXT',
            imageAlt: 'image',
        },
        // More products...
        ]
    }
    
    export default Input;
    
