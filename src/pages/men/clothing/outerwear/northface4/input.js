
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
        name: 'Corefire Down Jacket',
        price: '$320',
        to: '/luna-demomen/clothing/northface4/NorthFace4',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Outerwear', to: '/luna-demo/men/clothing/outerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 1',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_hero2?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 2',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 3',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_int?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
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
            'The Men’s Corefire Down Jacket uses the revolutionary FUTURELIGHT™ fabric and a combination of down and synthetic insulations to create a breathable, waterproof piece that keeps the elements at bay.',
        
        // Product Bulletpoints
        highlights: [
            'Standard fit',
            'Heatseeker™ Eco Insulation for warmth even in wet weather',
            'Fixed, helmet-compatible hood',
            'Exposed, VISLON® center front zip',
            'Oversize, secure-zip chest pocket',
        ],
        
        // Product Additional Information
        details:
            '50D x 20D 104 g/m² FUTURELIGHT™—100% recycled polyester with non-PFC durable water-repellent (non-PFC DWR) finish',
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
    
