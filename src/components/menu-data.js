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
            price: {
                individual: '3.95',
                small: '5.95',
                large: '7.95',
            },
            toppings: ['lettuce','croutons','romano','tossed in ceasar dressing'],
        },{
            name: 'garden',
            price: {
                individual: '3.95',
                small: '5.95',
                large: '7.95',
            },
            toppings: ['lettuce','cucumber','tomato','carrot','onion','red bell pepper','your choice of dressing'],
        },{
            name: 'greek',
            price: {
                small: '5.95',
                large: '7.95',
            },
            toppings: ['lettuce','cucumber','tomato','red onion','red bell pepper','calamata olive','feta',
                       'pepperoncini','balsamic vinaigrette'],
        },{
            name: 'mista',
            price: {
                small: '6.95',
                large: '8.95',
            },
            toppings: ['field greens','tomato','walnuts','feta','balsamic vinaigrette'],
        },{
            name: 'antipasto',
            price: {
                small: '7.95',
                large: '9.95',
            },
            toppings: ['lettuce','salami','pepperoni','ham','fresh mozzarella','clamata olives','perpperoncini',
                       'red onion','feta','your choice of dressing'],
        },{
            name: 'spinach',
            price: {
                small: '6.95',
                large: '8.95',
            },
            toppings: ['spinach','tomato','cucumber','bacon','fresh mozzarella','romano','balsamic vinaigrette'],
        },{
            name: 'caprese',
            price: {
                small: '6.95',
                large: '8.95',
            },
            toppings: ['tomato','fresh mozzarella','calamata olive','basil','romano','balsamic reduction',
                       'balsamic vinaigrette'],
        },{
            name: 'caprista',
            price: {
                small: '7.95',
                large: '9.95',
            },
            toppings: ['field greens','tomato','fresh mozzarella','calamata olive','walnut','feta','basil','romano',
                       'balsamic reduction','balsamic vinaigrette'],
        },{
            name: 'veggie saute',
            price: '8.95',
            toppings: ['sauteed spinach','onion','broccoli','mushroom','zucchini','tomato','red bell pepper','garlic'],
            option: {
                mozzarella: '1.00',
                sausage: '1.50',
                meatball: '1.50',
            },
        },{
            name: 'dressings',
            toppings: ['balsamic vinaigrette','raspberry vinaigrette','caesar','thousand island','oily italian',
                       'ranch','blue cheese','creamy italian'],
        }
    ],
    pizzas: [],
    sandwiches: [],
    calzonis: [],
    kids: [],
    desserts: [],

}

export default menuData;