#!/bin/bash

#--------------------------------------------------------------------------------
# Script intended to automate the creation of new products and product categories
#--------------------------------------------------------------------------------

##### CONSTANTS

# Color Assignment
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
MAGENTA=$(tput setaf 5)
CYAN=$(tput setaf 6)
RESET=$(tput sgr0)

div="${MAGENTA}|${RESET}"

address="/Users/chang/Desktop/Dashboard/luna-demo/src/pages"

# Automation Task NAMES
option_1="Product Category"     # PURPOSE: category group
option_2="Product Listing"      # PURPOSE: individual product

##### FUNCTIONS

category()
{
    name=$filler_2
    
    echo "
    import React from 'react';
    import { NavBar, ProductCategory, Footer } from '../../../../components';

    // ONLY CHANGE INPUT.JS
    import input from './input';

    const $name = () => {
        return (
            <div className=\"bg-white\">
            <NavBar />
            <ProductCategory
                name={input.name}
                sortOptions={input.sortOptions}
                subCategories={input.subCategories}
                filters={input.filters}
                products={input.products} />
            <Footer />
            </div>
        )
    }

    export default $name
    "
}

category_INPUT()
{
    name=$filler_2

    if [[ "$filler_1" = men* ]]; then
        gender="men"
    else
        gender="women"
    fi

    echo "
    // TEXT input for \"ProductCategory\"
    const Input = {
        // General Information
        name: {
        category: \"$name\",
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
            { name: 'Tops', href:'/luna-demo/$gender/clothing/tops'},
            { name: 'Bottoms', href: '/luna-demo/$gender/clothing/bottoms' },
            { name: 'Innerwear', href: '/luna-demo/$gender/clothing/innerwear' },
            { name: 'Outerwear', href: '/luna-demo/$gender/clothing/outerwear' },
            { name: 'Activewear', href: '/luna-demo/$gender/clothing/activewear' },
        ],
    
        // Specific Category Filters
        filters: [
        {
            id: 'category',
            name: 'Category',
            options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
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
            name: 'clothing 1',
            href: 'https://www.google.com/',
            price: '\$21',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'clothin 2',
            href: 'https://www.google.com/',
            price: '\$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'clothin 3',
            href: 'https://www.google.com/',
            price: '\$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            href: 'https://www.google.com/',
            price: '\$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        // More products...
        ]
    }
    
    export default Input;
    "
}

listing()
{
    name=$filler_3

    echo "
    import React from 'react';
    import { NavBar, ProductOverview, ProductRecommendation, Footer } from '../../../../../components';

    // ONLY CHANGE INPUT.JS
    import input from './input';

    // DO NOT TOUCH WEBDESIGN LAYOUT
    const $name = () => {
        return (
            <div className='bg-white'>
            <NavBar />
            <ProductOverview product={input.product} reviews={input.reviews}/>
            <ProductRecommendation recommendation={input.recommendation}/>
            <Footer />
            </div>
        )
    }

    export default $name
    "
}

listing_INPUT()
{
    name=$filler_3

    if [[ "$filler_1" = men* ]]; then
        gender="men"
    else
        gender="women"
    fi
    
    echo "
    // TEXT input for \"ProductOverview\"
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
        name: '$filler_3',
        price: '\$192',
        to: '/luna-demomen/clothing/$filler_2/$filler_3',
        
        // Product Breadcrumbs
        breadcrumbs: [
            { id: 1, name: 'Men', to: '/luna-demo/$gender' },
            { id: 2, name: 'Clothing', to:'/luna-demo/$gender/clothing'},
            { id: 3, name: 'Tops', to: '/luna-demo/$gender/clothing/tops' },
        ],

        //Product Images
        images: [
            {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
            },
            {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
            },
            {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
            },
            {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
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
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: \"Black\". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        
        // Product Bulletpoints
        highlights: [
            'Hand cut and sewn locally',
            'Dyed with our proprietary colors',
            'Pre-washed & pre-shrunk',
            'Ultra-soft 100% cotton',
        ],
        
        // Product Additional Information
        details:
            'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
    },

    // Personalized Recommendation per Product
    recommendation: [
        {
            id: 1,
            name: 'Basic Tee',
            category: \"Men's T-Shirts\",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: \"Front of men's Basic Tee in black.\",
            price: '\$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            category: \"Men's T-Shirts\",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: \"Front of men's Basic Tee in black.\",
            price: '\$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            category: \"Men's T-Shirts\",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: \"Front of men's Basic Tee in black.\",
            price: '\$35',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            category: \"Men's T-Shirts\",
            href: '/luna-demo/error',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: \"Front of men's Basic Tee in black.\",
            price: '\$35',
            color: 'Black',
        },
        // More products...
    ]

    }

    export default input
    "
}

category_automate()
{
    echo "Please chose your ${CYAN}Folder Address${RESET} destination:
                
    ${BLUE}CHOOSE YOUR OPTIONS${RESET}:
    men $div women
    ${YELLOW}a)${RESET} clothing > tops $div bottoms $div innerwear $div outerwear $div activewear
    ${YELLOW}b)${RESET} accessories > hats $div sunglasses $div belts $div wallets $div bags&backpacks
    "
    read -r -p "Folder Address ./pages/" filler_1

    while true; do
    if [ -d "$address/$filler_1" ]; then
        # If directory is found, allow for file creation
        read -r -p "Please ${BLUE}NAME${RESET} the file (1st letter ${CYAN}capitalize${RESET}): " filler_2
        category > "$address/$filler_1/$filler_2".js
        category_INPUT > "$address/$filler_1/input".js

        # Confirmation message of successful creation
        echo "
        ${GREEN}The automation has been completed!${RESET}
        - Please add the following export line to ${MAGENTA}./pages/index.js${RESET}:
        ${YELLOW}export { default as $filler_2 } from './$filler_1/$filler_2';${RESET}

        - Please add the following export lint to ${MAGENTA}./App.js${RESET}:
        ${YELLOW}<Route path=\"/luna-demo/$filler_1\" element={<$filler_2 />} />${RESET}
        
        - Make sure to import ${CYAN}$filler_2${RESET} at the top of ${MAGENTA}./App.js${RESET}
        "
        break
    else
        # If directory is DNE, ask for retype
        echo "${RED}The directory you typed does not exist${RESET}"
        read -r -p "Folder Address ./pages/" filler_1
    fi
    done

    echo "
    ${CYAN}End of Script${RESET}"
}

listing_automate()
{
    echo "Please chose your ${CYAN}Folder Address${RESET} destination:
                
    ${BLUE}CHOOSE YOUR OPTIONS${RESET}:
    men $div women
    ${YELLOW}a)${RESET} clothing > tops $div bottoms $div innerwear $div outerwear $div activewear
    ${YELLOW}b)${RESET} accessories > hats $div sunglasses $div belts $div wallets $div bags&backpacks
    "
    read -r -p "Folder Address ./pages/" filler_1

    while true; do
    if [ -d "$address/$filler_1" ]; then
        # If directory is found, allow for file creation
        read -r -p "Please ${BLUE}NAME the product folder${RESET} (1st letter ${CYAN}lowercase${RESET}): " filler_2
        mkdir "$address/$filler_1/$filler_2"

        # Confirmation message of successful creation
        echo "
        ${GREEN}NEW FOLDER${RESET} has been created!"
        echo ""
        break
    else
        # If directory is DNE, ask for retype
        echo "${RED}The directory you typed does not exist${RESET}"
        read -r -p "Folder Address ./pages/" filler_1
    fi
    done

    # If directory is found, allow for file creation
    read -r -p "Please ${BLUE}NAME${RESET} the file (1st letter ${CYAN}capitalize${RESET}): " filler_3
    listing > "$address/$filler_1/$filler_2/$filler_3".js
    listing_INPUT > "$address/$filler_1/$filler_2/input".js

    # Confirmation message of successful creation
    echo "
    ${GREEN}The automation has been completed!${RESET}
    - Please add the following export line to ${MAGENTA}./pages/index.js${RESET}:
    ${YELLOW}export { default as $filler_3 } from './$filler_1/$filler_2/$filler_3';${RESET}
    
    - Please add the following export lint to ${MAGENTA}./App.js${RESET}:
    ${YELLOW}<Route path=\"/luna-demo/$filler_1/$filler_2\" element={<$filler_3 />} />${RESET}
    
    - Make sure to import ${CYAN}$filler_3${RESET} at the top of ${MAGENTA}./App.js${RESET}
    "

    echo "
    ${CYAN}End of Script${RESET}"
}

instructions()
{
    echo "
    ${BLUE}INSTRUCTIONS${RESET}:
        - please type the number corresponding to the available options
        - type ${CYAN}QUIT${RESET} to end script

    ${BLUE}AUTOMATION OPTIONS${RESET}:
        $div -> 1 <- $div $option_1
        $div -> 2 <- $div $option_2
    "
    read -r -p "Type your selection here: " text
    echo ""
}

##### MAIN PROGRAM

until [ "$text" = "QUIT" ]; do

instructions

case $text in
                            
    1 )             # Product Category automation method
                    category_automate
                    exit
                    ;;
            
    2 )             # Product Listing automation method
                    listing_automate
                    exit
                    ;;
                            
    "QUIT" )        # Quit Program
                    exit
                    ;;

    * )             # If the input is not listed
                    echo "${RED}UNKNOWN INPUT${RESET}: Please type in one of the options"
esac

done