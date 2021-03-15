import React from 'react';

function Input(props) {
const { label, placeholder, name, value, onChange, type } = props;

return( 
    <div>
        <label>{label}</label>
        <input 
         type = {type}
         name = {name}
         placeholder = {placeholder}
         value = {value}
         onChange = {onChange}
        />
    </div>
)
}

export default Input;