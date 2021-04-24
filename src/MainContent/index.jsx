import React from 'react';
import styles from './MainContent.module.css';

export default function MainContent() {
    return (
        <div className={styles.container}>
            <h1>
                <span style={{ color: '#4081EC' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4081EC' }}>g</span>
                <span style={{ color: '#32A350' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
            </h1>
            <div className={styles.search}>
                <input type="text" />
            </div>
            <div className={styles.buttons}>
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <p>
                It’s Drug Take Back Day:
                <span>
                    <a class={styles.linkItem} href="#">
                        Dispose of unneeded medication today before 2 PM
                    </a>
                </span>
            </p>
        </div>
    )
}
