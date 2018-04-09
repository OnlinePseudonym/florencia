import React from 'react';

const Appetizers = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu--item">
                <h3 className="menu--item__name">{item.name}</h3>
                {Array.isArray(item.price) ? ( item.price.map(size => {
                    return (
                        
                        <span className="menu--item__price">
                            {size.size[0].toUpperCase()} - {size.price}
                            {/* <span className="menu--item__price-size">{size.size[0].toUpperCase()} - {size.price}</span>
                            <span className="menu--item__price-price"> {size.price}</span> */}
                        </span>                        
                    )
                })):(
                    <span className="menu--item__price">{item.price}</span>
                )}
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
    console.log(output);
    return (
        <div className="menu">
            <h2 className="menu-title">Appetizers</h2>
            {output}
        </div>
    )
}

export default Appetizers;