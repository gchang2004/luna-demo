
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
        name: 'Nike Sportswear Max90',
        price: '$45',
        to: '/luna-demomen/men/clothing/tops/nike3/Nike3',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/men/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8989c881-7198-4c89-8831-d22601a1076f/sportswear-max90-mens-t-shirt-svKSmj.png',
            alt: 'image 1',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab6acf56-1f0f-4b24-a425-df380310448b/sportswear-max90-mens-t-shirt-svKSmj.png',
            alt: 'image 2',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00bf8a2e-5c7e-4282-bb25-2451c3eb3bba/sportswear-max90-mens-t-shirt-svKSmj.png',
            alt: 'image 3',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/03d47abc-f7c5-4f97-ab3f-43f257a9df54/sportswear-max90-mens-t-shirt-svKSmj.png',
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
            'Made with soft, midweight cotton in our signature Max90 fit, this loose-fitting Nike tee brings the festival dance vibes with chill graphics and flashy colors.',
        
        // Product Bulletpoints
        highlights: [
            'Ribbed collar',
            '100% cotton',
            'Machine wash',
        ],
        
        // Product Additional Information
        details:
            'Dropped shoulders, longer sleeves and a roomy fit through the body and hips give the Max90 tee a relaxed and casual look.',
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
    
