
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
        name: 'Contrast Topstitching Shorts',
        price: '$40',
        to: '/luna-demomen/clothing/zara4/Zara4',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Bottoms', to: '/luna-demo/men/clothing/bottoms' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_2_1_1.jpg?ts=1684228604290',
            alt: 'image 1',
            },
            {
            src: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_1_1_1.jpg?ts=1684228603223',
            alt: 'image 2',
            },
            {
            src: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_2_2_1.jpg?ts=1684228604053',
            alt: 'image 3',
            },
            {
            src: 'https://static.zara.net/photos///2023/I/0/2/p/5520/300/505/2/w/1126/5520300505_6_1_1.jpg?ts=1684158905963',
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
            'Relaxed fit shorts made of cotton fabric. Adjustable elastic waistband with interior drawstring. Front pockets and back patch pocket. All-over contrasting topstitching details.',
        
        // Product Bulletpoints
        highlights: [
            'Machine wash max',
            'Do not use bleach / whitener',
            'Do not dry clean',
            'Low temperature dryer may be used',
            '100% cotton',
        ],
        
        // Product Additional Information
        details:
            'To lengthen the life of your denim garments, always wash them inside out in low temperatures. This way we help preserve the colors and structure of the fabric and reduce energy consumption.',
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
    
