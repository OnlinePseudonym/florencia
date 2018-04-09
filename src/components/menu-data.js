const menuData = {
    appetizers: [
        {
            name: 'garlic bread',
            price: '2.50',
            toppings: [],
            options: [
                {
                    item: 'mozzarella',
                    price: '1.00',
                },{
                    item: 'tomato',
                    price: '.45',
                }
            ],
        },{
            name: 'pesto bread',
            price: '4.95',
            toppings: ['pesto','mozzarella','tomato'],
        },{
            name: 'Barry\'s pesto bread',
            price: '6.95',
            toppings: ['pesto','mozzarella','tomato','roasted red bell pepper','jalapeno','walnut'],
        },{
            name: 'EJ\'s pesto bread',
            price: '7.95',
            toppings: ['pesto','fresh mozzarella','chicken','sausage','pepperoncini','lettuce'],
        },{
            name: 'mozzarella sticks',
            price: '5.95',
            toppings: ['side of sauce'],
        },{
            name: 'panini pizzeta',
            price: '5.95',
            toppings: ['seasoned pizza dough','garlic','side of sauce'],
            options: [
                {
                    item: 'mozzarella',
                    price: '1.00',
                },
        ],
        },{
            name: 'bruschetta',
            price: '5.95',
            toppings: ['garlic bread','mozzarella','diced tomato','roasted garlic','basil','balsamic vinaigrette'],
        },{
            name: 'zesty meatballs',
            price: '4.50',
            toppings: ['meatball','mozzarella','tomato sauce'],
        }
    ],
    salads: [
        {
            name: 'ceasar',
            price: [
                {
                    size: 'individual',
                    price: '3.95',
                },{
                    size: 'small',
                    price: '5.95',
                },{
                    size: 'large',
                    price: '7.95',
                },
            ],
            toppings: ['lettuce','croutons','romano','tossed in ceasar dressing'],
        },{
            name: 'garden',
            price: [
                {
                    size: 'individual',
                    price: '3.95',
                },{
                    size: 'small',
                    price: '5.95',
                },{
                    size: 'large',
                    price: '7.95',
                },
            ],
            toppings: ['lettuce','cucumber','tomato','carrot','onion','red bell pepper','your choice of dressing'],
        },{
            name: 'greek',
            price: [
                {
                    size: 'small',
                    price: '5.95',
                },{
                    size: 'large',
                    price: '7.95',
                },
            ],
            toppings: ['lettuce','cucumber','tomato','red onion','red bell pepper','calamata olive','feta',
                       'pepperoncini','balsamic vinaigrette'],
        },{
            name: 'mista',
            price: [
                {
                    size: 'small',
                    price: '6.95',
                },{
                    size: 'large',
                    price: '8.95',
                },
            ],
            toppings: ['field greens','tomato','walnuts','feta','balsamic vinaigrette'],
        },{
            name: 'antipasto',
            price: [
                {
                    size: 'small',
                    price: '7.95',
                },{
                    size: 'large',
                    price: '9.95',
                },
            ],
            toppings: ['lettuce','salami','pepperoni','ham','fresh mozzarella','clamata olives','perpperoncini',
                       'red onion','feta','your choice of dressing'],
        },{
            name: 'spinach',
            price: [
                {
                    size: 'small',
                    price: '6.95',
                },{
                    size: 'large',
                    price: '8.95',
                },
            ],
            toppings: ['spinach','tomato','cucumber','bacon','fresh mozzarella','romano','balsamic vinaigrette'],
        },{
            name: 'caprese',
            price: [
                {
                    size: 'small',
                    price: '6.95',
                },{
                    size: 'large',
                    price: '8.95',
                },
            ],
            toppings: ['tomato','fresh mozzarella','calamata olive','basil','romano','balsamic reduction',
                       'balsamic vinaigrette'],
        },{
            name: 'caprista',
            price: [
                {
                    size: 'small',
                    price: '7.95',
                },{
                    size: 'large',
                    price: '9.95',
                },
            ],
            toppings: ['field greens','tomato','fresh mozzarella','calamata olive','walnut','feta','basil','romano',
                       'balsamic reduction','balsamic vinaigrette'],
        },{
            name: 'veggie saute',
            price: '8.95',
            toppings: ['sauteed spinach','onion','broccoli','mushroom','zucchini','tomato','red bell pepper','garlic'],
            option: [
                {
                    item: 'mozzarella',
                    price: '1.00',
                },{
                    item: 'sausage',
                    price: '1.50',
                },{
                    item: 'meatball',
                    price: '1.50',
                },
            ],
        },{
            name: 'dressings',
            toppings: ['balsamic vinaigrette','raspberry vinaigrette','caesar','thousand island','oily italian',
                       'ranch','blue cheese','creamy italian'],
        }
    ],
    pizzas: {
        traditional: [
            {
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'combo',
                price: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '18.95',
                    },{
                        size: 'L',
                        price: '20.95',
                    },{
                        size: 'XL',
                        price: '22.95',
                    },
                ],
                toppings: ['pepperoni','sausage','mushroom','onion','red bell pepper','green bell pepper','olive'],
            },{
                name: 'gladiator',
                price: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '19.95',
                    },{
                        size: 'L',
                        price: '21.95',
                    },{
                        size: 'XL',
                        price: '23.95',
                    },
                ],
                toppings: ['pepperoni','chicken','canadian bacon','sausage','fresh mozzarella'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },{
                name: 'margherita',
                price: [
                    {
                        size: 'S',
                        price: '11.95',
                    },{
                        size: 'M',
                        price: '13.95',
                    },{
                        size: 'L',
                        price: '15.95',
                    },{
                        size: 'XL',
                        price: '17.95',
                    },
                ],
                toppings: ['fresh mozzarella','garlic','basil'],
            },
        ],
        oliveOil: [

        ],
        pesto:  [

        ],
        Ranch: [
             
            0 
        ]
    },
    sandwiches: [],
    calzonis: [],
    kids: [],
    desserts: [],

}

export default menuData;