import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // hook up context Object to class Object
    //static contextType = LanguageContext;

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        //const text = this.context === 'english' ? 'Sumbit' : 'Voorleggen'
        //console.log(this.context)
        return(
            <ColorContext.Consumer>
            {(color) => this.renderButton(color)
                
            }
                
            </ColorContext.Consumer>
        )
    }
}

export default Button;