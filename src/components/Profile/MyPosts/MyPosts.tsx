import React from 'react';
import m from "./myposts.module.css";

export function MyPosts () {
    return (
        <div className={m.myposts}>
           <div>
               MyPosts
           </div>
            <div>
                NewPost
            </div>
            <div className={m.item}>
                post1
            </div>
            <div className={m.item}>
                post2
            </div>
        </div>
    )
}