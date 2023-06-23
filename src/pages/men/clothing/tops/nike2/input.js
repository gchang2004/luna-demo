
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
        name: 'Nike Sportswear Club',
        price: '$30',
        to: '/luna-demomen/men/clothing/tops/nike2/Nike2',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/men/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/hfoqjmvml1z5itd4lzg5/sportswear-club-mens-t-shirt-ShrJfX.png',
            alt: 'image 1',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ro9bsziuxpk214z0zqam/sportswear-club-mens-t-shirt-ShrJfX.png',
            alt: 'image 2',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/r2rziqnvbc6nunjav8s4/sportswear-club-mens-t-shirt-ShrJfX.png',
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
            { name: 'XXL', inStock: true },
        ],

        // Product Introduction
        description:
            'The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.',
        
        // Product Bulletpoints
        highlights: [
            'Shown: University Red/White',
            'Style: AR4997-657',
        ],
        
        // Product Additional Information
        details:
            'Standard fit for a relaxed, easy feel. Fabric: 100% cotton and Machine wash',
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
    
