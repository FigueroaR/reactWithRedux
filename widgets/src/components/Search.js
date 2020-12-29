import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Search = () => {
const [term, setTerm] = useState('programming')
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

// we set dangerouslySetInnerHTML={{__html: result.snippet}} inside <span>
const renderedResults = results.map((result) => {
    return (
        <div key={result.pageid} className='item'>
            <div className='content'>   
                <div className='header'>
                    {result.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

            </div>
        </div>
    )
})

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
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    )
}


export default Search;