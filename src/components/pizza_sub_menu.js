import React from 'react';

const PizzaSubMenu = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu--item">
                <h3 className="menu--item__name">{item.name}</h3>
                <span className="menu--item__prices">                
                    {item.price.map(size => {
                        return (
                            <span className="menu--item__price">{size.price}</span>
                        )
                    })}
                </span>
                <p className="menu--item__desc">{item.toppings.join(', ')}</p>
                {(item.options && item.options.map(option => (
                    <div className="menu--item__addition">
                        <span className="menu--item__addition-name">add {option.item}</span>
                        <span className="menu--item__addition-price"> {option.price}</span>
                    </div>
                )))}
            </div>
        )
    })

    return (
        <div className="menu">
            <h3 className="menu-title">{props.name}</h3>
            <div className="menu-header"><span className="menu-header-sizes"><span className="menu-header-size">Small - 10"</span><span className="menu-header-size">Medium - 12"</span><span className="menu-header-size">Large - 14"</span><span className="menu-header-size">Extra Large - 16"</span></span></div>
            {output}
        </div>
    )
}

export default PizzaSubMenu