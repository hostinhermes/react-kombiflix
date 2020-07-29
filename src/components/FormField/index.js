import React from 'react';

function FormField({ type, label, ...props}) {
  return (
    <div>
        <label>{label}</label>
        {type ==='textarea'?
            <textarea
            type={type} 
            {...props} /> :
            <input 
                type={type} 
                {...props} />        
        }
       
    </div> 
  );
}

export default FormField;
