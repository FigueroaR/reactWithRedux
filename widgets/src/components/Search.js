import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
const [term, setTerm] = useState('')

// we configure useEffect to be used on first render, rerender, or change
// we can add a second argument like array

// array : initial render 
// nothing : initial render and rerender 
// array with data : initial R, rerender , and rerender if data change 
useEffect(() => {
    const search = async () => {
        await axios.get('')
    }
    
    search();
}, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> ENter Searh Term </label>
                    <input
                        value={term} 
                        onChange={e => setTerm(e.target.value)}
                        className="input"/>
                </div>
                
            </div>

        </div>
    )
}


export default Search;