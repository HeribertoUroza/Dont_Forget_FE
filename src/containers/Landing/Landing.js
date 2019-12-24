import React from 'react';

//CSS
import './landing.css';

//COMPONENTS
import Catergories from '../../components/Categories/Categories'

function Landing() {
    return(
        <>
            <div className='container'>
                <Catergories />
            </div>
        </>
    );
}

export default Landing;
