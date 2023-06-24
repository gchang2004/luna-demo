
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
        name: 'Second Skin Tank Stay-Tucked Undershirt',
        price: '$38',
        to: '/luna-demomen/clothing/tommyjohn3/TommyJohn3',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Innerwear', to: '/luna-demo/men/clothing/innerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_558.jpg?v=1659302209&w=1000',
            alt: 'image 1',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_678.jpg?v=1659302213&w=1000',
            alt: 'image 2',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Front_M_I_SS_TNK_5.5.22_590.jpg?v=1659302216&w=1000',
            alt: 'image 3',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000018_100001_Ecomm_Editorial_Back_M_I_SS_TNK_5.5.22_214_1.jpg?v=1659302219&w=1000',
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
            'Silky soft & smooth, naturally breathable with a luxurious feel. Patented Stay-Tucked Design - Eliminates accidental untucks. Improved Shape Retention - Always returns to its original shape, won’t stretch out. Non-Pilling - No lint balls or fuzz, wash after wash.',
        
        // Product Bulletpoints
        highlights: [
            'Memory Collar - Lay-flat collar that won’t stretch out to eliminate “bacon neck”.',
            'No EFG® - Our longer, tapered design eliminates “excess fabric gut”.',
            '90% Modal, 10% Spandex',
        ],
        
        // Product Additional Information
        details:
            'Streamlined fit, designed for daily wear.',
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
    
