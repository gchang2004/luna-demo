
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Innerwear",
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
            { name: 'Outerwear', href: '/luna-demo/men/clothing/outerwear' },
            { name: 'Activewear', href: '/luna-demo/men/clothing/activewear' },
            { name: 'Browse All', href: '/luna-demo/men/clothing/' },
        ],
    
        // Specific Category Filters
        filters: [
        {
            id: 'category',
            name: 'Category',
            options: [
            { value: 'socks', label: 'Socks', checked: false },
            { value: 'sleepwear', label: 'Sleepwear', checked: false },
            { value: 'undershirts', label: 'Undershirts', checked: false },
            { value: 'underwear', label: 'Underwear', checked: false },
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
            name: 'Cool Cotton Trunk 4"',
            category: "Men's Underwear",
            href: './TommyJohn1',
            price: '$32',
            imageSrc: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Faceout_M_I_CC_4INBB_ICON_928e64f8-61c1-4a04-96f0-bd00f704631d.jpg?v=1680272209&w=1000',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: 'Apollo Mid-Length Boxer Brief 6"',
            category: "Men's Underwear",
            href: './TommyJohn2',
            price: '$40',
            imageSrc: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Faceout_Crop_M_I_AP_6INBB_ICON_ec638629-0a8c-40a8-8afb-7d1dc071722e.jpg?v=1684262721&w=1000',
            imageAlt: 'image 2',
        },
        {
            id: 3,
            name: 'Second Skin Tank Stay-Tucked Undershirt',
            category: "Men's Undershirts",
            href: './TommyJohn3',
            price: '$38',
            imageSrc: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_558.jpg?v=1659302209&w=1000',
            imageAlt: 'image 3',
        },
        {
            id: 4,
            name: 'Second Skin Long Sleeve Sleep Top',
            category: "Men's Sleepwear",
            href: './TommyJohn4',
            price: '$62',
            imageSrc: 'https://tjproduction.imgix.net/products/1002982_020074_ECOMM_FRONT_M_S_SS_CRWNCK_10.28.21.jpg?v=1661805604&w=1000',
            imageAlt: 'image 4',
        },
        {
            id: 5,
            name: 'Second Skin Sleep Jogger',
            category: "Men's Sleepwear",
            href: './TommyJohn5',
            price: '$42',
            imageSrc: 'https://tjproduction.imgix.net/products/1001129_400007_ECOMM_Front_M_S_SS_JGR_2.10.22.jpg?v=1676658684&w=1000',
            imageAlt: 'image 5',
        },
        // More products...
        ]
    }
    
    export default Input;
    
