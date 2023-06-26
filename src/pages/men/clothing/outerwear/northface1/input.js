
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
        name: 'Alta Vista Jacket',
        price: '$98',
        to: '/luna-demomen/clothing/northface1/NorthFace1',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Outerwear', to: '/luna-demo/men/clothing/outerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 1',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 2',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_model34?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 3',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_modelhood2?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
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
            'The Men’s Alta Vista Jacket, made with 100% recycled fabrics, will quickly become your go-to hike shell. With a water-repellent finish and technical features like an adjustable hood, pit-zip venting, and a secure-zip pocket, it’ll take your trail exploration to the next level.',
        
        // Product Bulletpoints
        highlights: [
            'Standard fit',
            'Waterproof, breathable, seam-sealed DryVent™ 2.5L shell with a non-PFC DWR finish helps keep you dry',
            'Attached, three-piece hood with a drawcord and cord locks for adjustability',
            'Exposed, water-repellent center front zip',
            'Vertical secure-zip chest pocket',
        ],
        
        // Product Additional Information
        details:
            '70D x 70D 95 g/m² DryVent™ 2.5L—100% recycled nylon with non-PFC durable water-repellent (non-PFC DWR) finish',
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
    
