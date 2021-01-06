import React, {useState} from 'react';
//import Accordion from './components/Accordion';
//import Search from './components/Search';
//import Dropdown from './components/Dropdown'
import Translate from './components/Translate'


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

// dropdown
// export default () => {
//     const [selected, setSelected] = useState(options[0])
//     const [showDropdown,  setShowDropdown] = useState(true)
//     return (
//         <div>
//             <button onClick={() => setShowDropdown(!showDropdown)} >
//                 Toggle Drowpdown
//             </button>
//             {showDropdown ? (
//                 <Dropdown 
//                 onSelectedChange={setSelected}
//                 selected={selected} 
//                 options={options}
//                 />) : null 
//             }
             
//         </div>
//     ) 
// }

//trasnalte
export default () => {
    
    return (
        <div>
             < Translate />
        </div>
    ) 
}