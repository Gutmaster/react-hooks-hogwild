import React, {useState} from "react";

function Hog(hog){
    const [detailed, setDetailed] = useState(false)
    const data = hog.hog

    function toggleDetails(){
        setDetailed(!detailed)
    }

    let extraInfo = null
    if(detailed){
        extraInfo = <div>
            <p>Highest Medal Achieved: {data['highest medal achieved']}</p>
            <p>Weight: {data.weight}</p>
            <p>Specialty: {data.specialty}</p>
            <p>{data.greased ? 'Greased!' : 'Ungreased!'}</p>
        </div>
    }

    return <div className='ui eight wide column'>
        <div className='ui card' onClick={toggleDetails}>
            <p>{data.name}</p>
            <img src={data.image} alt={data.name}/>
            {extraInfo}
        </div>
    </div>
}

export default Hog