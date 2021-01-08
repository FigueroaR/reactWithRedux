import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {  
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0])

    // when we send component inside route, it becomes a child (children)
    return (
        <div>
            <Header />
            <Route path='/'> <Accordion items={items}/> </Route>
            <Route path='/list'> <Search /> </Route>
            <Route path='/dropdown'> <Dropdown 
                                        options={options}
                                        label='select a color'
                                        selected={selected}
                                        onSelectedChange={setSelected}
                                        /> 
                                    </Route>
            <Route path='/translate'> <Translate/> </Route>
            
        </div>
    ) 
}