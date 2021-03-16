import React from 'react';

function Input(props) {
const { label,  name, val,  type, changeFn } = props;

return( 
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
         type = {type}
         name = {name}
         placeholder = {label}
         className='form-control'
         value = {val || ''}
         onChange = {changeFn}
         id={name}
        />
    </div>
)
}

export default Input;