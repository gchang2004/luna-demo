
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
        name: 'Geo Seamless T-Shirt',
        price: '$34',
        to: '/luna-demomen/clothing/gymshark1/GymShark1',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Activewear', to: '/luna-demo/men/clothing/activewear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R73_2216b052-7756-44c3-8a4f-c5d57736d301_3840x.jpg?v=1674591235',
            alt: 'image 1',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R75_3b3de59d-e84e-465d-84f0-56f656100c0e_640x.jpg?v=1674591235',
            alt: 'image 2',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R74_728a1418-dc84-4967-926b-5115cb7e6876_640x.jpg?v=1674591235',
            alt: 'image 3',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/GeoSeamlessSsTFloraGreen-WillowGreenA5A2D-EB3R77_925a060d-aa26-4e0b-8092-4c0c397d1f22_640x.jpg?v=1674591235',
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
            'Get freedom \'til the finish in Geo Seamless. Sweat-wicking tech and breathable mesh structures keep you cool and dry. Lightweight material and minimal seams ensure zero distractions for maximum focus. And raglan sleeves accentuate your shoulders for a subtle nod to the physique you’ve worked for. It’s time to release your movement and reimagine your capabilities. You ready?',
        
        // Product Bulletpoints
        highlights: [
            'Slim fit',
            'All-over mesh structures',
            'Lightweight material',
            'Jacquard camo pattern',
            'Sweat-wicking',
            'Raglan sleeves',
            '73% Polyester, 27% Nylon',
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
    
