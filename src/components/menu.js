import React from 'react';

const Menu = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu__item">
                <h4 className="menu__item__name">{item.name}</h4>
                <p className="menu__item__desc">{item.toppings.join(', ')}</p>
                <span className="menu__item__prices">
                    {item.prices.map(price => {
                        return (
                            <span className="menu__item__price">{price.size && props.name.includes('Salads') ? `${price.size} - ${price.price}` : price.price}</span>
                        )
                    })}
                </span>
            </div>
        )
    })
    console.log(output);
    return (
        <div className="menu">
            <h3 className="menu__title">{props.name}</h3>
            {(props.name.includes('Pizza') && <div className="menu__header"><span className="menu-header-size">Small - 10"</span><span className="menu-header-size">Medium - 12"</span><span className="menu-header-size">Large - 14"</span><span className="menu-header-size">Extra Large - 16"</span></div>)}
            {output}
        </div>
    )
}

export default Menu;