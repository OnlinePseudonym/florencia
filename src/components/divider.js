import React from 'react';

const Divider = (props) => {
    return (
        <svg className={`divider ${props.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <polygon points="0,1000 1000,0 1000,1000"/>
        </svg>
    )
}

export default Divider;