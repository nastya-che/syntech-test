import React from 'react';
import './styles.scss';

export let ProgressLine = (props) => {

    function switchLinePos() {
        switch (props.pageNum) {
            case 0: return '33%';
            case 1: return'66%';
            case 2: return'100%';
            default: return'33%';
        }
    }

    return(
        <div className='progress-line'>
            <span style={{
                width: switchLinePos()
            }} />
        </div>
    )
};