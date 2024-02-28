import React from 'react'
import styles from './button.module.css'


function Button(props) {

    /*
        props = {
            children,
            className,
            id,
            style
        }
    */

    return (
        <button 
            className={styles.btn + ' fancy ' + (props.className ? props.className : '')}
            id={props.id ? props.id : ''}
            style={props.style ? props.style : {}}>
            <div className={styles.btnContent}>
                {props.children}
            </div>
        </button>
    )
}

export default Button