import React from 'react';
import './styles.scss';
import RightArrow from '@material-ui/icons/ArrowForward';

export const NextBtn = (props) => {

    return(
        <button className='next-btn'
                disabled={props.disabled}
                onClick={() => props.onClick()}>
            Next
            <RightArrow />
        </button>
    )

};
