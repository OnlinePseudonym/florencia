import React from 'react';

const Divider = (props) => {
    return (
        <svg className={`divider ${props.className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={props.fill} points="0,100 100,0 100,100"/>
        </svg>
    )
}

export default Divider;