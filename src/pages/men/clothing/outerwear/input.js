
    // TEXT input for "ProductCategory"
    const Input = {
        // General Information
        name: {
        category: "Outerwear",
        },
    
        // Sort Filter
        sortOptions: [
            { name: 'Most Popular', href: 'https://www.google.com/', current: true },
            { name: 'Best Rating', href: 'https://www.google.com/', current: false },
            { name: 'Newest', href: 'https://www.google.com/', current: false },
            { name: 'Price: Low to High', href: 'https://www.google.com/', current: false },
            { name: 'Price: High to Low', href: 'https://www.google.com/', current: false },
        ],
    
        // Category Filter
        subCategories: [
            { name: 'Tops', href:'/luna-demo/men/clothing/tops'},
            { name: 'Bottoms', href: '/luna-demo/men/clothing/bottoms' },
            { name: 'Innerwear', href: '/luna-demo/men/clothing/innerwear' },
            { name: 'Activewear', href: '/luna-demo/men/clothing/activewear' },
            { name: 'Browse All', href: '/luna-demo/men/clothing/' },
        ],
    
        // Specific Category Filters
        filters: [
        {
            id: 'category',
            name: 'Category',
            options: [
            { value: 'jackets', label: 'Jackets', checked: false },
            { value: 'vests', label: 'Vests', checked: false },
            { value: 'coats', label: 'Coats', checked: false },
            { value: 'blazers', label: 'Blazers', checked: false },
            ],
        },    
        {
            id: 'color',
            name: 'Color',
            options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: false },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
            ],
        },
        {
            id: 'size',
            name: 'Size',
            options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: false },
            ],
        },
        ],
    
        // Product Listing
        products: [
        {
            id: 1,
            name: 'Alta Vista Jacket',
            category: 'Men\'s Jackets',
            href: './NorthFace1',
            price: '$98',
            imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7QAW_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            imageAlt: 'image 1',
        },
        {
            id: 2,
            name: 'Denali Anorak',
            category: 'Men\'s Jackets',
            href: './NorthFace2',
            price: '$140',
            imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR3_EFS_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            imageAlt: 'image 2',
        },
        {
            id: 3,
            name: 'Retro Eco Vest',
            category: 'Men\'s Vests',
            href: './NorthFace3',
            price: '$90',
            imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A7UR4_LK5_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            imageAlt: 'image 3',
        },
        {
            id: 4,
            name: 'Corefire Down Jacket',
            category: 'Men\'s Coats',
            href: './NorthFace4',
            price: '$320',
            imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A4QWY_6Q9_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            imageAlt: 'image 4',
        },
        {
            id: 5,
            name: 'McMurdo Bomber',
            category: 'Men\'s Coats',
            href: './NorthFace5',
            price: '$350',
            imageSrc: 'https://images.thenorthface.com/is/image/TheNorthFace/NF0A5GD9_JK3_hero?wid=1300&hei=1510&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0',
            imageAlt: 'image 5',
        },
        // More products...
        ]
    }
    
    export default Input;
    
