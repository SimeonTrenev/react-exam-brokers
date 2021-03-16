import React from 'react';

function TextArea(props){
    const {name, label, changeFn, val, type } = props
    return(
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <textarea 
            onChange={changeFn}
            value={val || ''}
            type={type}
            className='form-control'
            name={name}
            id={name}
            placeholder={label}
            />
        </div>
    )
}

export default TextArea