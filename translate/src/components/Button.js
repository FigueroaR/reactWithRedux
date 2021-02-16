import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
    // hook up context Object to class Object
    static contextType = LanguageContext;

    render() {
        console.log(this.context)
        return(
        <button className="ui button primary">Submit</button>)
    }
}

export default Button;