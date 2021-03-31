import React from 'react';
import './Error.css'

const InputError = ({children}) => {

    if(!children){
        return null;
    }

    return(
        <div className='input-error'>
            {children}
        </div>
    
    )
}

export default InputError;