
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Wallets",
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
            { name: 'Tops', href:'/luna-demo/men/clothing/tops'},
            { name: 'Bottoms', href: '/luna-demo/men/clothing/bottoms' },
            { name: 'Innerwear', href: '/luna-demo/men/clothing/innerwear' },
            { name: 'Outerwear', href: '/luna-demo/men/clothing/outerwear' },
            { name: 'Activewear', href: '/luna-demo/men/clothing/activewear' },
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
            href: 'https://www.google.com/',
            price: '$21',
            imageSrc: 'TEXT',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: 'clothin 2',
            category: 'TEXT',
            href: 'https://www.google.com/',
            price: '$35',
            imageSrc: 'TEXT',
            imageAlt: 'image',
        },
        // More products...
        ]
    }
    
    export default Input;
    
