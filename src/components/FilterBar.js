import React, {useState} from "react";
import Sort from "./Sort"
import Checkbox from "./Checkbox";
import HogList from "./HogList";
import hogs from "../porkers_data";

function FilterBar(){
    const [filterGreased, setFilterGreased] = useState(false)
    const [filterUnGreased, setFilterUnGreased] = useState(false)
    const [sortMethod, setSortMethod] = useState('none')

    function handleSort(event){
        setSortMethod(event.target.value)
    }

    function handleGreasedFilter(){
        setFilterGreased(!filterGreased)
    }
    function handleUnGreasedFilter(){
        setFilterUnGreased(!filterUnGreased)
    }

    return <div>
        <Sort setSortMethod={handleSort}/>
        <Checkbox filter={filterGreased} setFilter={handleGreasedFilter} text=' Greased '/>
        <Checkbox filter={filterUnGreased} setFilter={handleUnGreasedFilter} text=' Ungreased '/>
        <HogList hogs={hogs} sortMethod={sortMethod} filterGreased={filterGreased} filterUnGreased={filterUnGreased}/>
    </div>
}

export default FilterBar