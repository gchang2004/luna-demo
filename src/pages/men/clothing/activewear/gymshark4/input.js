
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
        name: 'Arrival Woven Joggers',
        price: '$40',
        to: '/luna-demomen/clothing/gymshark4/GymShark4',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Activewear', to: '/luna-demo/men/clothing/activewear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.A_ZH_ZH_1200x.jpg?v=1647041889',
            alt: 'image 1',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.B_ZH_ZH_640x.jpg?v=1647041889',
            alt: 'image 2',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.C_ZH_ZH_640x.jpg?v=1647041889',
            alt: 'image 3',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.D1_ZH_ZH_640x.jpg?v=1647041889',
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
            'Give some extra power, poise and purpose to your training. The Arrival Woven Joggers are focused on performance with a supportive fit, light-stretch polyester-elastane blend and customisable wear, keeping your movement weightless and your efforts effective.',
        
        // Product Bulletpoints
        highlights: [
            'Slim fit',
            'Lightweight material',
            'Tapered to leg',
            'Elasticated drawcord waistband',
            'Zipped ankle cuffs for easy wear',
            '87% Polyester, 13% Elastane',
        ],
        
        // Product Additional Information
        details:
            'Model is 6\'0" and wears size M',
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
    
