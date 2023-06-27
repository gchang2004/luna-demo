
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Activewear",
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
            { name: 'Browse All', href: '/luna-demo/men/clothing/' },
        ],
    
        // Specific Category Filters
        filters: [
        {
            id: 'category',
            name: 'Category',
            options: [
            { value: 'tops', label: 'Tops', checked: false },
            { value: 'bottoms', label: 'Bottoms', checked: false },
            { value: 'outwear', label: 'Outwear', checked: false },
            { value: 'tanks', label: 'Tanks', checked: false },
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
            name: 'Geo Seamless T-Shirt',
            category: "Men's Tops",
            href: './GymShark1',
            price: '$34',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R73_2216b052-7756-44c3-8a4f-c5d57736d301_3840x.jpg?v=1674591235',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: '315 Long Sleeve T-Shirt',
            category: "Men's Tops",
            href: './GymShark2',
            price: '$44',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJD_3840x.jpg?v=1665173568',
            imageAlt: 'image 2',
        },
        {
            id: 3,
            name: 'Vital Seamless Light Tank',
            category: "Men's Tanks",
            href: './GymShark3',
            price: '$26',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG_ZH_ZH_3840x.jpg?v=1645638287',
            imageAlt: 'image 3',
        },
        {
            id: 4,
            name: 'Arrival Woven Joggers',
            category: "Men's Bottoms",
            href: './GymShark4',
            price: '$40',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.A_ZH_ZH_1200x.jpg?v=1647041889',
            imageAlt: 'image 4',
        },
        {
            id: 5,
            name: 'Sport 1/4 Zip',
            category: "Men's Outwear",
            href: './GymShark5',
            price: '$40',
            imageSrc: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0509.50_9373747c-b932-4369-bbd0-c56a412d0e3a_1200x.jpg?v=1670268987',
            imageAlt: 'image 5',
        },
        // More products...
        ]
    }
    
    export default Input;
    
