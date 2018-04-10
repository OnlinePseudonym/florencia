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
                name: 'Hawaiian',
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                toppings: ['mushroom','tomato','red bell pepper','green bell pepper','zucchini','olive','garlic'],
            },{
                name: 'trout',
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                toppings: ['chicken','fresh mozzarella','pepperoncini','green olive','feta'],
            },{
                name: 'sophia',
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
                price: [
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
    sandwiches: [],
    calzonis: [],
    kids: [],
    desserts: [],

}

export default menuData;