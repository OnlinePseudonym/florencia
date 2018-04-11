import React from 'react';

const Salads = (props) => {
    const output = props.menu.map(item => {
        return (
            <div className="menu--item">
                <h3 className="menu--item__name">{item.name}</h3>
                <p className="menu--item__desc">{item.toppings.join(', ')}</p>
                <span className="menu--item__prices">
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