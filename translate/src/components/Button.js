import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component {
    // hook up context Object to class Object
    //static contextType = LanguageContext;

    render() {
        //const text = this.context === 'english' ? 'Sumbit' : 'Voorleggen'
        //console.log(this.context)
        return(
        <button className="ui button primary">
            <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
        </button>)
    }
}

export default Button;