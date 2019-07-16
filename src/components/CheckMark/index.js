import React from 'react';
import Lottie from 'lottie-react-web';
import animation from './check-mark-success.json';

const CheckMark = () => (
    <Lottie
        options={{
            animationData: animation,
            loop: false
        }}
        speed={0.7}
        style={{
            width: '200px',
            height: '200px',
            marginBottom: '20px'
        }}
    />
);

export default CheckMark;