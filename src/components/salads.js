import React from 'react';

const Salads = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu--item">
                <h3 className="menu--item__name">{item.name}</h3>
                <span className="menu--item__prices-salad">
                    {Array.isArray(item.price) ? ( item.price.map(size => {
                        return (
                            <span className="menu--item__price">
                                {size.size[0].toUpperCase()} - {size.price}
                            </span>                        
                        )
                    })):(
                        <span className="menu--item__price">{item.price}</span>
                    )}
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
    console.log(output);
    return (
        <div className="menu">
            <h2 className="menu-title">Salads</h2>
            {output}
        </div>
    )
}

export default Salads;