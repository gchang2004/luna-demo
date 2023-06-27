
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
        name: '315 Long Sleeve T-Shirt',
        price: '$44',
        to: '/luna-demomen/clothing/gymshark2/GymShark2',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Activewear', to: '/luna-demo/men/clothing/activewear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJD_3840x.jpg?v=1665173568',
            alt: 'image 1',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJD1_640x.jpg?v=1665173568',
            alt: 'image 2',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJD5_640x.jpg?v=1665173568',
            alt: 'image 3',
            },
            {
            src: 'https://cdn.shopify.com/s/files/1/0156/6146/products/315LsSeamlessT-ShirtCoreOlive-MarshGreenA2A9X-EBJDcopy_640x.jpg?v=1665173568',
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
            'There’s no room for distractions when you’re repping out. That’s why 315 is designed to fade seamlessly into the background, so you can tune out the world and focus on the lift. Sweat-wicking technology allows you to keep your cool, while seamless designs reduce irritation to hold your focus where you need it. Bar’s loaded, you ready?',
        
        // Product Bulletpoints
        highlights: [
            'Slim fit',
            'Sweat-wicking tech',
            'Knurkling inspired detailing',
            'Dipped hem',
            '62% Nylon, 38% Polyester',
        ],
        
        // Product Additional Information
        details:
            'Model is 5\'9" and wears size LT',
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
    
