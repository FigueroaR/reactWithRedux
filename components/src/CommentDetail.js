import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return(
    <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}></img>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00 PM</span>
                </div>
                <div className="text">Nice Blog ma dude</div>
            </div>
        </div>
    </div>
    )
};

export default CommentDetail