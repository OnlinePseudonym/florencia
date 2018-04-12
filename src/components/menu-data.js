const menuData = {
    appetizers: [
        {
            name: 'garlic bread',
            prices: [
                {
                    size: null,
                    price: '2.50',
                }/* ,{
                    size: 'with mozzarella',
                    price: '3.50',
                },{
                    size: 'with mozzarella and tomatoes',
                    price: '3.95',
                } */
            ],
            toppings: ['\nadd mozzarella 1.00','\nadd mozzarella and tomato 1.45'],
        },{
            name: 'pesto bread',
            prices: [
                {
                    size: null,
                    price: '4.95'
                }
            ],
            toppings: ['pesto','mozzarella','tomato'],
        },{
            name: 'Barry\'s pesto bread',
            prices: [
                {
                    size: null,
                    price: '6.95'
                }
            ],
            toppings: ['pesto','mozzarella','tomato','roasted red bell pepper','jalapeno','walnut'],
        },{
            name: 'EJ\'s pesto bread',
            prices: [
                {
                    size: null,
                    price: '7.95'
                }
            ],
            toppings: ['pesto','fresh mozzarella','chicken','sausage','pepperoncini','lettuce'],
        },{
            name: 'mozzarella sticks',
            prices: [
                {
                    size: null,
                    price: '5.95'
                }
            ],
            toppings: ['side of sauce'],
        },{
            name: 'panini pizzeta',
            prices: [
                {
                    size: null,
                    price: '6.95',
                }/* ,{
                    size: 'with cheese',
                    price: '7.95',
                } */
            ],
            toppings: ['seasoned pizza dough','garlic','side of sauce','\nadd mozzarella 1.00'],
        },{
            name: 'bruschetta',
            prices: [
                {
                    size: null,
                    price: '5.95'
                }
            ],
            toppings: ['garlic bread','mozzarella','diced tomato','roasted garlic','basil','balsamic vinaigrette'],
        },{
            name: 'zesty meatballs',
            prices: [
                {
                    size: null,
                    price: '4.50'
                }
            ],
            toppings: ['meatball','mozzarella','tomato sauce'],
        }
    ],
    salads: [
        {
            name: 'ceasar',
            prices: [
                {
                    size: 'Ind',
                    price: '3.95',
                },{
                    size: 'S',
                    price: '5.95',
                },{
                    size: 'L',
                    price: '7.95',
                }
            ],
            toppings: ['lettuce','croutons','romano','tossed in ceasar dressing'],
        },{
            name: 'garden',
            prices: [
                {
                    size: 'Ind',
                    price: '3.95',
                },{
                    size: 'S',
                    price: '5.95',
                },{
                    size: 'L',
                    price: '7.95',
                }
            ],
            toppings: ['lettuce','cucumber','tomato','carrot','onion','red bell pepper','your choice of dressing'],
        },{
            name: 'greek',
            prices: [
                {
                    size: 'S',
                    price: '5.95',
                },{
                    size: 'L',
                    price: '7.95',
                }
            ],
            toppings: ['lettuce','cucumber','tomato','red onion','red bell pepper','calamata olive','feta',
                       'pepperoncini','balsamic vinaigrette'],
        },{
            name: 'mista',
            prices: [
                {
                    size: 'S',
                    price: '6.95',
                },{
                    size: 'L',
                    price: '8.95',
                }
            ],
            toppings: ['field greens','tomato','walnuts','feta','balsamic vinaigrette'],
        },{
            name: 'antipasto',
            prices: [
                {
                    size: 'S',
                    price: '7.95',
                },{
                    size: 'L',
                    price: '9.95',
                }
            ],
            toppings: ['lettuce','salami','pepperoni','ham','fresh mozzarella','clamata olives','perpperoncini',
                       'red onion','feta','your choice of dressing'],
        },{
            name: 'Spinach',
            prices: [
                {
                    size: 'S',
                    price: '6.95',
                },{
                    size: 'L',
                    price: '8.95',
                }
            ],
            toppings: ['spinach','tomato','cucumber','bacon','fresh mozzarella','romano','balsamic vinaigrette'],
        },{
            name: 'caprese',
            prices: [
                {
                    size: 'S',
                    price: '6.95',
                },{
                    size: 'L',
                    price: '8.95',
                }
            ],
            toppings: ['tomato','fresh mozzarella','calamata olive','basil','romano','balsamic reduction',
                       'balsamic vinaigrette'],
        },{
            name: 'caprista',
            prices: [
                {
                    size: 'S',
                    price: '7.95',
                },{
                    size: 'L',
                    price: '9.95',
                }
            ],
            toppings: ['field greens','tomato','fresh mozzarella','calamata olive','walnut','feta','basil','romano',
                       'balsamic reduction','balsamic vinaigrette'],
        },{
            name: 'veggie saute',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['sauteed spinach','onion','broccoli','mushroom','zucchini','tomato','red bell pepper','garlic',
                       '\nadd mozzarella 1.00','\nadd sausage or meatball 1.50'],
        },/* {
            name: 'dressings',
            toppings: ['balsamic vinaigrette','raspberry vinaigrette','caesar','thousand island','oily italian',
                       'ranch','blue cheese','creamy italian'],
        } */
    ],
    pizzas: {
        traditional: [
            {
                name: 'margherita',
                prices: [
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
                prices: [
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
                prices: [
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
                name: 'Hawaiian',
                prices: [
                    {
                        size: 'S',
                        price: '12.95',
                    },{
                        size: 'M',
                        price: '15.75',
                    },{
                        size: 'L',
                        price: '17.75',
                    },{
                        size: 'XL',
                        price: '19.75',
                    },
                ],
                toppings: ['ham','pepperoni','pineapple'],
            },{
                name: 'flaumbay',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['pepperoni','green bell peppers','pineapple'],
            },{
                name: 'spinaci',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['spinach','ricotta','mushroom','garlic'],
            },{
                name: 'fiesta',
                prices: [
                    {
                        size: 'S',
                        price: '14.75',
                    },{
                        size: 'M',
                        price: '18.50',
                    },{
                        size: 'L',
                        price: '20.50',
                    },{
                        size: 'XL',
                        price: '22.50',
                    },
                ],
                toppings: ['pepperoni','chorizo','jalapeno','tomato','onion'],
            },{
                name: 'clark\'s classic',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['buffalo chicken','pepperoni'],
            },{
                name: 'vegetarian',
                prices: [
                    {
                        size: 'S',
                        price: '14.75',
                    },{
                        size: 'M',
                        price: '18.50',
                    },{
                        size: 'L',
                        price: '20.50',
                    },{
                        size: 'XL',
                        price: '22.50',
                    },
                ],
                toppings: ['mushroom','tomato','onion','red bell pepper','green bell pepper','zucchini','olive','garlic'],
            },{
                name: 'trout',
                prices: [
                    {
                        size: 'S',
                        price: '12.95',
                    },{
                        size: 'M',
                        price: '15.75',
                    },{
                        size: 'L',
                        price: '17.75',
                    },{
                        size: 'XL',
                        price: '19.75',
                    },
                ],
                toppings: ['pepperoni','pepperoncini','mushroom'],
            },{
                name: 'valentinos',
                prices: [
                    {
                        size: 'S',
                        price: '12.95',
                    },{
                        size: 'M',
                        price: '15.75',
                    },{
                        size: 'L',
                        price: '17.75',
                    },{
                        size: 'XL',
                        price: '19.75',
                    },
                ],
                toppings: ['salami','pepperoncini','tomato'],
            },{
                name: 'pomodoro',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['breaded eggplant','mushroom','tomato','garlic'],
            },{
                name: 'zagar',
                prices: [
                    {
                        size: 'S',
                        price: '12.95',
                    },{
                        size: 'M',
                        price: '15.75',
                    },{
                        size: 'L',
                        price: '17.75',
                    },{
                        size: 'XL',
                        price: '19.75',
                    },
                ],
                toppings: ['sausage','roasted red bell pepper','mushroom'],
            },{
                name: 'BBQ chicken',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['BBQ sauce','BBQ chicken','capers','onion','romano','garlic'],
            },
        ],
        oliveOil: [
            {
                name: 'stefanos',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['spinach','feta','calamata olive','onion','tomato'],
            },{
                name: 'Melanzane',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['breaded eggplant','chicken','roasted red bell pepper','feta','tomato','garlic'],
            },{
                name: 'DPR\'s inferno',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['sausage','jalapeno','extra garlic'],
            },{
                name: 'mykonos',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['artichoke heart','bacon','feta','calamata olive','garlic'],
            },{
                name: 'new yorker',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['ricotta','broccoli','garlic'],
            },{
                name: 'tuscany',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['salami','onion','garlic'],
            },{
                name: 'puttanesca',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['chicken','calamata olive','capers','onion','tomato','garlic'],
            },{
                name: 'bravo',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['sausage','goat cheese','fennel seed','garlic'],
            },{
                name: 'fiorentina',
                prices: [
                    {
                        size: 'S',
                        price: '15.50',
                    },{
                        size: 'M',
                        price: '17.50',
                    },{
                        size: 'L',
                        price: '19.50',
                    },{
                        size: 'XL',
                        price: '21.50',
                    },
                ],
                toppings: ['spinach','sausage','feta','roasted red bell pepper','garlic'],
            },{
                name: 'winchester',
                prices: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['chicken','feta','mushroom','garlic'],
            },{
                name: 'stratford',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['sausage','cherry peppers','fresh arugula','garlic'],
            },{
                name: 'spicy goat',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '15.95',
                    },{
                        size: 'L',
                        price: '17.95',
                    },{
                        size: 'XL',
                        price: '19.95',
                    },
                ],
                toppings: ['goat cheese','jalapeno','mushroom','onion','zucchini','garlic','crushed red pepper'],
            },{
                name: 'clevenger',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['traditional crust','spinach','sausage','feta','onion','garlic'],
            },{
                name: 'hawaii five-O',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '17.95',
                    },{
                        size: 'L',
                        price: '19.95',
                    },{
                        size: 'XL',
                        price: '21.95',
                    },
                ],
                toppings: ['traditional crust','pineapple habanero chicken','jalapeno','bacon','pineapple','onion'],
            },{
                name: 'snow white',
                prices: [
                    {
                        size: 'S',
                        price: '10.95',
                    },{
                        size: 'M',
                        price: '12.95',
                    },{
                        size: 'L',
                        price: '14.95',
                    },{
                        size: 'XL',
                        price: '16.95',
                    },
                ],
                toppings: ['tomato','basil','garlic'],
            },
        ],
        pesto:  [
            {
                name: 'original pesto',
                prices: [
                    {
                        size: 'S',
                        price: '10.95',
                    },{
                        size: 'M',
                        price: '12.95',
                    },{
                        size: 'L',
                        price: '14.95',
                    },{
                        size: 'XL',
                        price: '16.95',
                    },
                ],
                toppings: ['tomato'],
            },{
                name: 'patagonian',
                prices: [
                    {
                        size: 'S',
                        price: '15.95',
                    },{
                        size: 'M',
                        price: '18.95',
                    },{
                        size: 'L',
                        price: '21.95',
                    },{
                        size: 'XL',
                        price: '23.95',
                    },
                ],
                toppings: ['pesto tomato sauce','chicken','fresh mozzarella','pepperoncini','green olive','feta'],
            },{
                name: 'sophia',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['artichoke','roasted red bell pepper','tomato'],
            },{
                name: 'bo-be',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['spinach','mushroom','tomato','garlic'],
            },{
                name: 'raspotle',
                prices: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['chicken','roasted red bell pepper','raspberry chipotle sauce','choice of feta or goat cheese'],
            },{
                name: 'green-eyed chicken',
                prices: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['chicken','jalapeno','garlic','romano','crushed red pepper'],
            },
        ],
        ranch: [
            {
                name: 'cadillac',
                prices: [
                    {
                        size: 'S',
                        price: '13.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['breaded buffalo chicken','pepperoni'],
            },{
                name: 'BBQ bacon ranch',
                prices: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['breaded BBQ chicken','jalapeno','bacon','feta'],
            },{
                name: 'ranchero',
                prices: [
                    {
                        size: 'S',
                        price: '14.95',
                    },{
                        size: 'M',
                        price: '16.95',
                    },{
                        size: 'L',
                        price: '18.95',
                    },{
                        size: 'XL',
                        price: '20.95',
                    },
                ],
                toppings: ['breaded chicken','onion','tomato','basil'],
            },
        ]
    },
    sandwiches: [
        {
            name: 'eggplant parmigiana',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['breaded eggplant','tomato sauce','mozzarella'],
        },{
            name: 'meatball parmigiana',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['meatball','tomato sauce','mozzarella'],
        },{
            name: 'chicken parmigiana',
            prices: [
                {
                    size: null,
                    price: '9.95',
                }
            ],
            toppings: ['breaded chicken','tomato sauce','mozzarella'],
        },{
            name: 'italian submarine',
            prices: [
                {
                    size: null,
                    price: '10.95',
                }
            ],
            toppings: ['ham','salami','pepperoni','mozzarella'],
            options: ['pepperoncini','tomato','onion','lettuce'],
        },{
            name: 'hot ham & cheese',
            prices: [
                {
                    size: null,
                    price: '9.95',
                }
            ],
            toppings: ['ham','mozzarella'],
            options: ['pepperoncini','tomato','onion','lettuce'],            
        },{
            name: 'BLT',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['bacon','lettuce','tomato','jalapeno','fresh mozzarella','mozzarella'],
        },
    ],
    paninis: [
        {
            name: 'chicken panini',
            prices: [
                {
                    size: null,
                    price: '11.95',
                }
            ],
            toppings: ['breaded chicken breast cutlet','field greens','tomato','onion','balsamic vinaigrette'],
        },{
            name: 'benson',
            prices: [
                {
                    size: null,
                    price: '11.95',
                }
            ],
            toppings: ['sliced breaded chicken','lettuce','onion','tomato',
                       'tossed in your choice of ranch or creamy italian dressing'],
        },{
            name: 'italiano',
            prices: [
                {
                    size: null,
                    price: '12.95',
                }
            ],
            toppings: ['ham','salami','perpperoni','mozzarella'],
            options: ['pepperoncini','tomato','onion','lettuce'],
        },{
            name: 'pesto panini',
            prices: [
                {
                    size: null,
                    price: '10.95',
                }
            ],
            toppings: ['pesto','fresh mozzarella','tomato','basil','field greens'],
        },
    ],
    calzones: [
        {
            name: 'spinach',
            prices: [
                {
                    size: null,
                    price: '11.95',
                }
            ],
            toppings: ['spinach','ricotta','garlic','mozzarella'],
        },{
            name: 'pesto',
            prices: [
                {
                    size: null,
                    price: '14.95',
                }
            ],
            toppings: ['pesto','chicken','calamata olive','tomato','garlic','mozzarella'],
        },{
            name: 'sausage & mushroom',
            prices: [
                {
                    size: null,
                    price: '13.95',
                }
            ],
            toppings: ['suasage','mushroom','ricotta','garlic','mozzarella'],
        },
    ],
    kids: [
        {
            name: 'meatballs',
            prices: [
                {
                    size: null,
                    price: '4.50',
                }
            ],
            toppings: ['meatballs','mozzarella','tomato sauce'],
        },{
            name: 'tortizza',
            prices: [
                {
                    size: null,
                    price: '3.50',
                }
            ],
            toppings: ['flour tortilla','pepperoni','mozzarella'],
        },{
            name: 'chicken tenders',
            prices: [
                {
                    size: null,
                    price: '5.95',
                }
            ],
            toppings: ['breaded chicken breast cutlets'],
            options: ['ranch','ketchup','BBQ sauce'],
        },{
            name: 'hot \'n cheesy sammy',
            prices: [
                {
                    size: null,
                    price: '3.50',
                }
            ],
            toppings: ['italian roll','mozzarella'],
        },
    ],
    desserts: [
        {
            name: 'ice cream delight',
            prices: [
                {
                    size: null,
                    price: '3.50',
                }
            ],
            toppings: ['vanilla ice cream','chocolate syrup','rainbow sprinkles'],
        },{
            name: 'cookie monster',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['chocolate chip cookie baked inside sweetened pizza dough','vanilla ice cream','brown suger',
                       'cinnamon','maple syrup'],
        },{
            name: 'apple pizazz',
            prices: [
                {
                    size: null,
                    price: '8.95',
                }
            ],
            toppings: ['apple pie filling','walnuts','cinnamon','vanilla ice cream'],
        },{
            name: 'cookie \'n cream',
            prices: [
                {
                    size: null,
                    price: '5.95',
                }
            ],
            toppings: ['half pound chocolate chip or macadamia nut cookie','vanilla ice cream'],
            options: ['ask about our cookie of the month']
        },
    ],

}

export default menuData;