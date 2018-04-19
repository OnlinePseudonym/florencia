import React from 'react';
import './create_your_own.css';

const CreateYourOwn = () => {
    return (
        <div className="menu">
            <h3 className="menu__title">Create Your Own Pizza</h3>
            <div className="menu__header">
                <span className="menu-header--size">Small - 10"</span>
                <span className="menu-header--size">Medium - 12"</span>
                <span className="menu-header--size">Large - 14"</span>
                <span className="menu-header--size">Extra Large - 16"</span>
                <span className="menu-header--price">9.95</span>
                <span className="menu-header--price">11.95</span>
                <span className="menu-header--price">13.95</span>
                <span className="menu-header--price">15.95</span>
                <h4 className="topping-title">Price Per Topping</h4>
                <span className="menu-header--price">1.50</span>
                <span className="menu-header--price">1.75</span>
                <span className="menu-header--price">2.00</span>
                <span className="menu-header--price">2.25</span>
                <h4 className="topping-title">Premium Topping</h4>
                <span className="menu-header--price">2.50</span>
                <span className="menu-header--price">2.75</span>
                <span className="menu-header--price">3.00</span>
                <span className="menu-header--price">3.25</span>
            </div>
            <div className="menu__toppings">
                <h4>Bases</h4>
                <p className="toppings">
                    BBQ, Olive Oil, Pesto, Ranch, Tomato Sauce
                </p>
                <h4>Protiens</h4>
                <p className="toppings">
                    Anchovies, Bacon, *Breaded Chicken, Cajun Sausage, Canadian Bacon, *Chicken, Chorizo,
                    Italian Sausage, Ham, Meatball, Pepperoni, Salami
                </p>
                <h4>Cheeses</h4>
                <p className="toppings">
                    Feta Cheese, Fresh Mozzarella, Goat Cheese, Ricotta Cheese
                </p>
                <h4>Vegetables</h4>
                <p className="toppings">
                    Arugula, Artichoke heart, Basil, Black Olive, Breaded eggplant, Broccoli, Calamata Olive, Capers,
                    Cherry Pepper, Fennel Seed, Garlic, Green Bell Pepper, Green Olive, Jalapeno, Mushroom, Onion,
                    Pineapple, Pepperoncini, Red Bell Pepper, Roasted Red Bell Pepper, Sauteed Onion, Spinach,
                    Sundreid Tomato, Tomato, Walnut, Zucchini
                </p>
                <h4>Sauces</h4>
                <p className="toppings">
                    BBQ, Franks Hot Sauce, Pesto, Raspberry Chipotle, Roasted Pineapple Habenero,
                </p>
                <p>* denotes premium topping</p>
            </div>
        </div>
    );
}

export default CreateYourOwn;