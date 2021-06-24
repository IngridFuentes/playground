import React from 'react';
import { useSelector } from 'react-redux';

const AnotherData = () => {
    const posts = useSelector((state) => state.slideControl.posts)
    // console.log(posts)
    return (
        <div>
            {posts && posts.map(i => {
                return(
                    <ul>
                        <li>{i.title}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default AnotherData;
