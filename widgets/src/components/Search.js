import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
const [term, setTerm] = useState('')
const [results, setResults] = useState([]);

// we configure useEffect to be used on first render, rerender, or change
// we can add a second argument like array

// array : initial render 
// nothing : initial render and rerender 
// array with data : initial R, rerender , and rerender if data change 
useEffect(() => {
    const search = async () => {
        const {data} = await axios.get(`https://en.wikipedia.org/w/api.php`, {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term
            }
        })
        setResults(data.query.search)
    }

        search()
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