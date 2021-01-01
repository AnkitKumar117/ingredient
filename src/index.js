import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
const App = ()=>{
    return  (
        <div className="ui container comments">
            <CommentDetail author="p1" />
            <CommentDetail author="p2" />
            <CommentDetail author="p3" />
            <CommentDetail author="p4" />
            
        </div>
    );
};

ReactDOM.render(<App/> , document.querySelector('#root'));