import React from 'react';

function Select(props) {
    const { label, name, onChange, options } = props;

    const generateOptions = () => {
        return options.map(o => {
            return(
                <options key={o.id} value={o.id}>{o.name}</options>
            )
        })
    };

    return(
        <div>
            <label>{label}</label>
            <select onChange={onChange} name={name}>
                {generateOptions()}
            </select>
        </div>
    );
}

export default Select;