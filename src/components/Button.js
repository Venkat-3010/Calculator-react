import React from "react";

const Button = ({id, className, value, onClick}) =>{
    return(
        <button id={id} className={className} value={value} onClick={() => onClick(value)}>
            {value}
        </button>
    );
};

export default Button;