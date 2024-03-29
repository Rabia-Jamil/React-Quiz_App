import React from 'react';
import './input.css'

const Input = (props) => {
    const { type, value, id, name, label, placeholder, errors, onChange } = props;
    return( 
        <div className="inputContainer">
            <label htmlFor = {id}>
                <span className="label">{label}</span>
                <div className="inputWrpper">
                    <input 
                        type={type} 
                        value={value}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        onChange={(event) => onChange && onChange(event)}
                    />
                </div>
            </label>
                    {errors && errors.errorsObj[name] && <div className="error-wrapper">
                    <p className="error">{errors.errorsObj[name].message}</p>
                    
            </div>}
        </div>
    )
}

export {Input} ;