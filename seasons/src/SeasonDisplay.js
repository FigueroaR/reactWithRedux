import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Swiming with fish!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr its cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    //console.log(props, "---------", getSeason())
    const season = getSeason(props.latitude, new Date().getMonth())
    
    const { text, iconName} = seasonConfig[season];
    console.log(text ,iconName)
    return (
    <div>
            <i className={` massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={` massive ${iconName} icon`} />
        </div>)
}

export default SeasonDisplay