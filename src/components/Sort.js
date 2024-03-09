import React from "react";

function Sort({setSortMethod}){
    return <label htmlFor="Sort">Sort by:
            <select name="Sort" onChange={setSortMethod}>
                <option value='name'>name</option>
                <option value='weight'>weight</option>
            </select>
        </label>
}

export default Sort