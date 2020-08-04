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
    const icon = season === 'winter' ? 'snowflake' : "sun"
    return (
    <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>)
}

export default SeasonDisplay