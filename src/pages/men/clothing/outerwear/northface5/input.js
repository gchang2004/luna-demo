
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
        name: 'McMurdo Bomber',
        price: '$350',
        to: '/luna-demomen/clothing/northface5/NorthFace5',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Outerwear', to: '/luna-demo/men/clothing/outerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 1',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_back?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 2',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_model34?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            alt: 'image 3',
            },
            {
            src: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_modelhood2?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
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
            'The Men’s McMurdo Bomber has all of the technical features you need, now in a shorter silhouette. Made with waterproof, breathable DryVent™, 600-fill recycled down insulation, and designed with a mixture of secure-zip and hook-and-loop pockets, you’ll be protected from the elements.',
        
        // Product Bulletpoints
        highlights: [
            'Relaxed fit',
            'Waterproof, breathable, seam-sealed DryVent™ 2L shell with a non-PFC DWR finish helps keep you dry',
            '600 fill recycled waterfowl down',
            'Adjustable, three-piece hood with a removable faux-fur ruff',
            'Draft flap with a hidden hook-and-loop closure covers the center front zip',
        ],
        
        // Product Additional Information
        details:
            '70D x 160D DryVent™ 2L—100% nylon woven with non-PFC durable water-repellent (non-PFC DWR) finish',
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
    
