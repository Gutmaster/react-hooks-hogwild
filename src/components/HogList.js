import React from "react"
import Hog from "./Hog"

function HogList({hogs, sortMethod, filterGreased, filterUnGreased}){
    //check to see if the hogs match either of the filters for removal
    const filteredHogs = hogs.filter((hog) => !filterGreased || !hog.greased).filter((hog) => hog.greased || !filterUnGreased)
    //sort hogs by provided sort method
    const sortedHogs = filteredHogs.sort(function(a, b){
        if(sortMethod === 'name')
            return a.name.localeCompare(b.name)
        else if(sortMethod === 'weight')
            return a.weight - b.weight
    })

    return <div className='HogList'>
        <div className='ui grid container'>
            {sortedHogs.map((hog) => <Hog key={hog.name} hog={hog}/>)}
        </div>
    </div>
}

export default HogList