import React from 'react';
import './styles.scss';

export const BackBtn = (props) => {

    return(
        <button className='back-btn'
                onClick={() => props.onClick()}>
            Back
        </button>
    )

};

