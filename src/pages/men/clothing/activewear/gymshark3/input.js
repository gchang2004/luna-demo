
    // TEXT input for "ProductOverview"
    const input = {
    // Product REVIEWS
    reviews: {
        href: 'https://www.google.com/',
        average: 4,
        totalCount: 117
    },

    // Product DESCRIPTIONS
    product: {
        // General Information about the product
        name: 'Vital Seamless Light Tank',
        price: '$26',
        to: '/luna-demomen/clothing/gymshark3/GymShark3',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Activewear', to: '/luna-demo/men/clothing/activewear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG_ZH_ZH_3840x.jpg?v=1645638287',
            alt: 'image 1',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG1_ZH_ZH_640x.jpg?v=1645638287',
            alt: 'image 2',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG2_ZH_ZH_640x.jpg?v=1645638287',
            alt: 'image 3',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/VitalTankPapayaOrangeMarlA2A3F-A2A3F-OBGG3_ZH_ZH_640x.jpg?v=1645638287',
            alt: 'image 4',
            },
        ],

        // Product Colors
        colors: [
            { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
            { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
            { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
        ],

        // Product Sizing
        sizes: [
            { name: 'XS', inStock: false },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: 'XXL', inStock: false },
        ],

        // Product Introduction
        description:
            'Endeavour to perform every single time in the Vital Light Tank. With a performance-driven design, it’s made to move in any direction while keeping you cool and dry, thanks to its lightweight, breathable material and sweat-wicking technology. This workout top is here to make your best performance the norm.',
        
        // Product Bulletpoints
        highlights: [
            'Slim fit',
            'Heat-sealed Gymshark logo',
            'Lgithweight material for breathability',
            'Seamless design',
            '100% Nylon',
        ],
        
        // Product Additional Information
        details:
            'Model is 6\'2" and wears size M',
    },

    // Personalized Recommendation per Product
    recommendation: [
        {
            id: 1,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            category: "Men's T-Shirts",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        // More products...
    ]

    }

    export default input
    
