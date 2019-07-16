import React from 'react';
import './styles.scss';

export let HeaderTitle = (props) => {

    return(
        <div className='header-title'>
            {
                props.pageNum === 2 ? 'Thank you!' : 'Signup'
            }
        </div>
    )
};