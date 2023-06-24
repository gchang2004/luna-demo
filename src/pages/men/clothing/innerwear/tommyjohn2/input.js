
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
        name: 'Apollo Mid-Length Boxer Brief 6"',
        price: '$40',
        to: '/luna-demomen/clothing/tommyjohn2/TommyJohn2',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Innerwear', to: '/luna-demo/men/clothing/innerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Faceout_Crop_M_I_AP_6INBB_ICON_ec638629-0a8c-40a8-8afb-7d1dc071722e.jpg?v=1684262721&w=1000',
            alt: 'image 1',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Detail_M_I_AP_6INBB_ICON_f59c7679-f455-40c6-b69e-5924ba807be3.jpg?v=1684262721&w=1000',
            alt: 'image 2',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Front_M_I_AP_6INBB_ICON_aa55ff49-06a6-4ee6-ab6a-a28dbd7fd87b.jpg?v=1684262721&w=1000',
            alt: 'image 3',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1002636_400013_Ecomm_Back_M_I_AP_6INBB_ICON_a5d02a16-9538-4585-9e13-a13caefbd8fd.jpg?v=1684262721&w=1000',
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
            'Soft, durable, moisture-wicking (sweat control) with a lasting luxurious feel. Keeps You Up To 7ºF Cooler Than Regular Cotton - Pulls perspiration and allows for air to flow. Dries 4x Faster Than Regular Cotton - drirelease® tech pulls and evaporates sweat insanely fast.',
                
        // Product Bulletpoints
        highlights: [
            'Horizontal Quick Draw® Fly - A solution to the ‘fly fishing’ caused by vertical and no-fly underwear. A uniquely intuitive horizontal opening for fast, easy access when nature calls.',
            'Contour Pouch - Designed for comfort and control, this curved pouch supports and flatters your natural shape, nestling the boys without restriction.',
            'Stay-Put Waistband - Won’t roll, bunch, pinch or leave marks.',
            '79% Polyester, 14% Modal, 7% Spandex',
        ],
        
        // Product Additional Information
        details:
            'Designed to be the ultimate in daily wear, even at the gym.',
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
    
