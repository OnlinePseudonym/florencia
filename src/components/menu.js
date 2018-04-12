import React from 'react';

const Menu = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu--item">
                <h3 className="menu--item__name">{item.name}</h3>
                <p className="menu--item__desc">{item.toppings.join(', ')}</p>
                <span className="menu--item__prices">
                    {item.prices.map(price => {
                        return (
                            <span className="menu--item__price">{price.size && props.name.includes('Salads') ? `${price.size} - ${price.price}` : price.price}</span>
                        )
                    })}
                </span>
            </div>
        )
    })
    console.log(output);
    return (
        <div className="menu">
            <h2 className="menu-title">{props.name}</h2>
            {(props.name.includes('Pizza') && <div className="menu-header"><span className="menu-header-sizes"><span className="menu-header-size">Small - 10"</span><span className="menu-header-size">Medium - 12"</span><span className="menu-header-size">Large - 14"</span><span className="menu-header-size">Extra Large - 16"</span></span></div>)}
            {output}
        </div>
    )
}

export default Menu;