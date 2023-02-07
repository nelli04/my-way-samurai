import React from 'react';
import m from "./myposts.module.css";
import {Post} from "./Post/Post";



export function MyPosts () {
    return (
        <div className={m.myposts}>
            <textarea></textarea>
            <button>Отправить</button>
            <div className={m.post}>
                <Post message = 'Hi'/>
                <Post message = 'Hey Hey'/>
            </div>

        </div>
    )
}