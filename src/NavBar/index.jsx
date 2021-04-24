import React from 'react';
import style from './NavBar.module.css';

export default function index() {
    return (

        <div class={style.navbar}>
            <div className="left-nav">
                <a href="#">About</a>
                <a href="#">Store</a>
            </div>
            <div className="right-nav">
                <a href="#">Gmail</a>
                <a href="#">Images</a>
                <a href="#">Icon</a>
                <a href="#" className={style.avatar}>D</a>
            </div>
        </div>

    )
}
