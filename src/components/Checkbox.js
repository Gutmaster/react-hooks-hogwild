import React from "react";

function Checkbox({filter, setFilter, text}){
    return <label>{text}
            <input type='checkbox' checked={!filter} onChange={setFilter}/>
        </label> 
}

export default Checkbox