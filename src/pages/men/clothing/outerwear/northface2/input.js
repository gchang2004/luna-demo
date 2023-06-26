
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
        name: 'Denali Anorak',
        price: '$140',
        to: '/luna-demomen/clothing/northface2/NorthFace2',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Outerwear', to: '/luna-demo/men/clothing/outerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR3_EFS_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 1',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR3_EFS_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 2',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR3_EFS_model34?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
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
            'Days in the city can get just as frigid as those in the wild. For cold-weather protection, the relaxed-fit Men’s Denali Anorak is the perfect crossover option. The water-repellent finish, nylon overlay, and soft Polartec® fleece help you stay dry and warm in changing conditions.',
        
        // Product Bulletpoints
        highlights: [
            'Relaxed fit',
            'Woven overlay on hood, chest and back of yoke and sleeves',
            'Attached, three-piece hood with an internal elastic drawcord for adjustability',
            'Center front half zip',
            'Two covered, secure-zip chest pockets',
        ],
        
        // Product Additional Information
        details:
            '70D x 160D 121 g/m² 100% recycled nylon with non-PFC durable water-repellent (non-PFC DWR) finish',
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
    
