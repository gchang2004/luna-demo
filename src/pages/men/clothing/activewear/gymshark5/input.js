
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
        name: 'Sport 1/4 Zip',
        price: '$40',
        to: '/luna-demomen/clothing/gymshark5/GymShark5',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Activewear', to: '/luna-demo/men/clothing/activewear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0509.50_9373747c-b932-4369-bbd0-c56a412d0e3a_1200x.jpg?v=1670268987',
            alt: 'image 1',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0521.51_afb4e5f8-f204-4e38-b5fe-a4f461becf6d_640x.jpg?v=1670268987',
            alt: 'image 2',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0524.52_7a93f30d-d59f-4038-9b33-b6feb4d13b6b_640x.jpg?v=1670268987',
            alt: 'image 3',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/Sport1-4ZipWoodlandGreenA3A5T-EBR4-0503.49_aed71447-e3e0-4445-95ae-4740581afae5_640x.jpg?v=1670268987',
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
            'Durable, breathable, never-want-to-take-offable. Sport is a multi-activity training collection for those preparing for their next game day, finished off with reflective angled logos for a classic sport aesthetic.',
        
        // Product Bulletpoints
        highlights: [
            'Slim fit',
            '1/4 zip',
            'Angled stripe graphic panels to side',
            'Lightweight, breathable material',
            '92% Polyester, 8% Elastane',
        ],
        
        // Product Additional Information
        details:
            'Model is 6\'1" and wears size M',
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
    
