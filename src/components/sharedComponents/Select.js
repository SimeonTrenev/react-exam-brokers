import React from 'react';

const Select = (props) => {
    const collection = props.options ? props.options : [];

    const { defaultValue, name, changeFn, label } = props;

    let defaultOptions = (<option value=''>-- Избери --</option>)
    if(!defaultValue){
        defaultOptions = (<option defaultValue="" value=''>-- Избери --</option>)
    }

    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <select 
            name={name}
            onChange={changeFn}>
            {defaultOptions}
            {collection.map(e => {
                if(defaultValue && defaultValue === e._id){
                    return(<option key={e._id} selected={true} value={e._id}>{e.value}</option>)
                }
                return (<option key={e._id} value={e._id}>{e.value}</option>)
            })}
            </select>
        </div>
    )
}

export default Select;