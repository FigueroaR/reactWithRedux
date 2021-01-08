import React from 'react';

const Link =({href, className, children}) => {
    const handleClick = (e) => {
        if (e.metaKey || e.ctrlKey) {
            // when we press ctrl and click on option link
            // if either is true, we return early
            return
        }


        e.preventDefault();
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate');
        //dispatchEvent is built in
        window.dispatchEvent(navEvent);
    }

    return <a 
            onClick={handleClick}
            className={className} 
            href={href}  
            >{children}</a>
}

export default Link