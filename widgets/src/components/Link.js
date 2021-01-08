import React from 'react';

const Link =({href, className, children}) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', href)
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return <a 
            onClick={handleClick}
            className={className} 
            href={href}  
            >{children}</a>
}

export default Link