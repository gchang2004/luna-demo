
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
        name: 'Second Skin Sleep Jogger',
        price: '$42',
        to: '/luna-demomen/clothing/tommyjohn5/TommyJohn5',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Innerwear', to: '/luna-demo/men/clothing/innerwear' },
        ],

        //Product Images
        images: [
            {
            src: 'https://tjproduction.imgix.net/products/1001129_400007_ECOMM_Front_M_S_SS_JGR_2.10.22.jpg?v=1676658684&w=1000',
            alt: 'image 1',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1001129_400007_ECOMM_Back_M_S_SS_JGR_2.10.22.jpg?v=1676658684&w=1000',
            alt: 'image 2',
            },
            {
            src: 'https://tjproduction.imgix.net/products/1001129_400007_ECOMM_Still_M_S_SS_JGR_2.10.22.jpg?v=1676658684&w=1000',
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
            'Sleepwear that works beyond bedtime for the ultimate at-home comfort. Silky-soft, modal fabric. Innovative stretch material that always keeps its shape. Tapered, jogger style fit from hips to ankle. Stay-put waistband gently hugs your body, and won\'t roll or leave a mark.',
        
        // Product Bulletpoints
        highlights: [
            'Two functional side pockets.',
            'Tagless label for enhanced comfort.',
            'Fabric Blend (Solid Colors and Prints): 90% Modal, 10% Spandex.',
            'Fabric Blend (Heathers): 47% Modal, 43% Polyester, 10% Spandex.',
        ],
        
        // Product Additional Information
        details:
            'Care Instructions: Machine wash. Tumble dry.',
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
    
