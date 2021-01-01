import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = ()=>{
    return  (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="p1" timesAgo="Today at 4:00PM" content="Nice" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="p2" timesAgo="Today at 5:00PM" content="Humble" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="p3" timesAgo="Today at 6:00PM" content="Nice one" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="p4" timesAgo="Today at 7:00PM" content="Sexy" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/> , document.querySelector('#root'));