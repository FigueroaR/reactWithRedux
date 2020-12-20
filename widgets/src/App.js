import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front and JS framework'
    },
    {  
        title: 'Why use React?',
        content: 'React is a favoorite JS library'
    },
    {
        title: 'How to use react?',
        content: 'By creating components'
    }
];

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    ) 
}