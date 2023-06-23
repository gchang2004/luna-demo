
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
        name: 'Nike Dri-FIT',
        price: '$30',
        to: '/luna-demomen/men/clothing/tops/nike5/Nike5',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/men' },
            { id: 2, name: 'Clothing', to:'/luna-demo/men/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/men/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ylfy1desh7d7fzidimas/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
            alt: 'image 1',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/mtiphh66afig1i1xl4ki/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
            alt: 'image 2',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/xsqj9a1ye0jf0utxp5v0/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
            alt: 'image 3',
            },
            {
            src: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0zi6fokz8z1wxjo13lr/dri-fit-mens-fitness-t-shirt-nhgSHx.png',
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
            'The Nike Dri-FIT T-Shirt delivers a soft feel, sweat-wicking performance and a great range of motion to get you through your workout in total comfort.',
        
        // Product Bulletpoints
        highlights: [
            'Standard fit for a relaxed, easy feel',
            'Fabric: 57-60% cotton/40-43% polyester',
        ],
        
        // Product Additional Information
        details:
            'Dri-FIT technology helps keep you dry and comfortable. Small Swoosh design appears on the left chest.',
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
    
