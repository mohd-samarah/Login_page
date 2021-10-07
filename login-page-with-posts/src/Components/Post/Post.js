import React from 'react';
import './post.css';

const Post = ({title, body}) => {
    return (
            <div className='div-post'>
                <div className='div-title'>{title}</div>
                <div className='div-body'>{body}</div>
            </div>
        )
};

export default Post;
