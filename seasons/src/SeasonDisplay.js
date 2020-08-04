import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Swiming with fish!',
        iconName: 'summer'
    },
    winter: {
        text: 'Burr its cold!',
        iconName: 'winter'
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
    console.log(season)
    const { text, iconName} = seasonConfig[season];

    return (
    <div>
            <i className={`${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon`} />
        </div>)
}

export default SeasonDisplay