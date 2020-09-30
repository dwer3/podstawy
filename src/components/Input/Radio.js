import React from 'react';

const Radio = ({children, name, ...props}) => (
    <>
        <input 
            id={name} 
            type="radio"
            {...props}
        />
        <label htmlFor={name}>{children}</label>
    </>
)

export default Radio;