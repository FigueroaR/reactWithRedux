import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}
const SeasonDisplay = (props) => {
    console.log(props, "---------", getSeason())
    const season = getSeason(props.latitude, new Date().getMonth())
    const text = season === 'winter' ? 'Burrr! it cold! uhh' : "Swiming with fish"
    return (<div>{text} </div>)
}

export default SeasonDisplay