import React from 'react';


const Accordion = ({items}) => {

    const onTitleClick = (index) => {
        console.log('helper funct', index)
    }

    const renderedItems = items.map( (i,index) => {
        return (
        <React.Fragment key={i.title}>    
            <div 
                className="title active"
                onClick={ () => onTitleClick(index) }>
                <i className="dropdown icon"></i>
                {i.title}
            </div>
            <div className="content active">
                <p >{i.content}</p>
            </div>
        </React.Fragment>)
    })
    
    return (
        <div>
            <div className="ui styled accordion">
            {renderedItems}
            </div>
        </div>
        
        )
}

export default Accordion;