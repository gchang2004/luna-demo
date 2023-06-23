
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Bottoms",
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
            { name: 'Innerwear', href: '/luna-demo/men/clothing/innerwear' },
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
            { value: 'shorts', label: 'Shorts', checked: false },
            { value: 'pants', label: 'Pants', checked: false },
            { value: 'jeans', label: 'Jeans', checked: false },
            { value: 'sweatpants', label: 'Sweatpants', checked: false },
            { value: 'swimwear', label: 'Swimwear', checked: false },
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
            name: 'Comfort Pocket Pants',
            category: "Men's Pants",
            href: './zara1',
            price: '$50',
            imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/3284/442/251/2/w/1126/3284442251_2_4_1.jpg?ts=1673601386509',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: 'Cropped Cargo Pants',
            category: "Men's Pants",
            href: './zara2',
            price: '$60',
            imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/0600/401/821/2/w/1126/0600401821_2_1_1.jpg?ts=1686126729500',
            imageAlt: 'image 2',
        },
        {
            id: 3,
            name: 'Basic Soft Denim Shorts',
            category: "Men's Shorts",
            href: './zara3',
            price: '$45',
            imageSrc: 'https://static.zara.net/photos///2023/V/0/2/p/5862/400/250/2/w/1126/5862400250_2_1_1.jpg?ts=1676388969644',
            imageAlt: 'image 3',
        },
        {
            id: 4,
            name: 'Contrast Topstitching Shorts',
            category: "Men's Shorts",
            href: './zara4',
            price: '$40',
            imageSrc: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_2_1_1.jpg?ts=1684228604290',
            imageAlt: 'image 4',
        },
        {
            id: 5,
            name: 'Topstitched Ripped Jeans',
            category: "Men's Jeans",
            href: './zara5',
            price: '$70',
            imageSrc: 'https://static.zara.net/photos///2023/V/0/1/p/6688/411/400/2/w/1126/6688411400_2_1_1.jpg?ts=1674466071465',
            imageAlt: 'image 5',
        },
        // More products...
        ]
    }
    
    export default Input;
    
