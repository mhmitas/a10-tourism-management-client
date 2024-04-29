import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const BannerTypeWriter = () => {
    return (
        <div>
            <Typewriter words={['Explore...', 'Share...', 'Inspire...',]}
                loop={10}
            >

            </Typewriter>
        </div>
    );
};

export default BannerTypeWriter;