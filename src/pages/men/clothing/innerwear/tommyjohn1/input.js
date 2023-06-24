
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
        name: 'Cool Cotton Trunk 4"',
        price: '$32',
        to: '/luna-demomen/clothing/tommyjohn1/TommyJohn1',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Innerwear', to: '/luna-demo/men/clothing/innerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Faceout_M_I_CC_4INBB_ICON_928e64f8-61c1-4a04-96f0-bd00f704631d.jpg?v=1680272209&w=1000',
            alt: 'image 1',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Detail_M_I_CC_4INBB_ICON_7fb1252e-62ef-4a11-bbb0-98f98bd64f03.jpg?v=1680272209&w=1000',
            alt: 'image 2',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Front_M_I_CC_4INBB_ICON_ae9c2d3d-9eea-4364-8d81-bce2bf8cdd0d.jpg?v=1680272209&w=1000',
            alt: 'image 3',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1000022_020001_Ecomm_Back_M_I_CC_4INBB_ICON_e6c5c2a5-d5aa-46ee-9d20-978374bab22f.jpg?v=1680272209&w=1000',
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
            'Breathable, moisture-wicking (sweat control) with a premium feel. Keeps You 2-3x Cooler Than Regular Cotton - More breathable, efficient fibers. Dries 4-5x Times Faster Than Regular Cotton - Allows sweat to evaporate quicker.',
        
        // Product Bulletpoints
        highlights: [
            'Horizontal Quick Draw® Fly - A solution to the ‘fly fishing’ caused by vertical and no-fly underwear. A uniquely intuitive horizontal opening for fast, easy access when nature calls.',
            'Contour Pouch - Designed for comfort and control, this curved pouch supports and flatters your natural shape, nestling the boys without restriction.',
            '86% Pima Cotton, 14% Spandex',
        ],
        
        // Product Additional Information
        details:
            'Designed for daily wear',
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
    
