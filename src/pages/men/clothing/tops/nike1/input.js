
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
        name: 'Nike Sportswear Premium Essentials',
        price: '$45',
        to: '/luna-demomen/men/clothing/tops/nike1/Nike1',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/men/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a439643-992e-4729-a170-b018a7e5c319/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png',
            alt: 'image 1',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/38c37f44-c667-4e47-8c96-b228bc9e8f67/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png',
            alt: 'image 2',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d58a453f-6d75-4c43-844b-257a88fadb52/sportswear-premium-essentials-mens-t-shirt-mkhTvc.png',
            alt: 'image 3',
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
            'The Nike Sportswear Premium Essentials T-Shirt has a loose fit for a carefree, comfortable look. Its heavyweight organic cotton fabric feels thick and soft. This product is made with at least 75% organic cotton fibers.',
        
        // Product Bulletpoints
        highlights: [
            'Shown: Space Purple',
            'Style: DO7392-567',
        ],
        
        // Product Additional Information
        details:
            'This product is made with at least 75% organic cotton fibers',
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
    
