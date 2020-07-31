import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45 PM" 
                    commentText="Yeerr" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            

            <CommentDetail 
                author="Pepe" 
                timeAgo="Today at 9:50 PM" 
                commentText="Yoooo" 
                avatar={faker.image.avatar()}
            />

            <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 2:15 PM" 
                commentText="Yuzz" 
                avatar={faker.image.avatar()}
            />
        </div>
        
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))