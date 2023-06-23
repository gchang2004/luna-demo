
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
        name: 'Nike ACG',
        price: '$55',
        to: '/luna-demo/men/clothing/tops/nike4/Nike4',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/men/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17c9ba57-557b-4436-a616-4c3966b4babd/acg-mens-t-shirt-rhKHRp.png',
            alt: 'image 1',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a3cbb4f-4110-4d39-9954-b54584e58ac0/acg-mens-t-shirt-rhKHRp.png',
            alt: 'image 2',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f59020b-0697-425c-a6fb-9567ad9e36c4/acg-mens-t-shirt-rhKHRp.png',
            alt: 'image 3',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7441de3-abc7-4ab5-a93f-935822594d9c/acg-mens-t-shirt-rhKHRp.png',
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
            'Designed to feel roomy through the shoulders, chest and body for easy movement and layering, this T-shirt is made with premium heavyweight fabric that wicks sweat to help you stay dry.',
        
        // Product Bulletpoints
        highlights: [
            'Shown: Summit White',
            'Style: FB8119-121',
        ],
        
        // Product Additional Information
        details:
            'This product is made with 100% sustainable materials, using a blend of both recycled polyester and organic cotton fibers. The blend is at least 10% recycled fibers or at least 10% organic cotton fibers.',
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
    
