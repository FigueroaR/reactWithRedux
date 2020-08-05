import React from 'react'

const Spinner = (props) => {
    return (
        
            <div class="ui active dimmer">
                <div class="ui massive text loader">{props.message}</div>
            </div>
           
        
    )
}

Spinner.defaultPorps = {
    message: 'Loading..'
}

export default Spinner 