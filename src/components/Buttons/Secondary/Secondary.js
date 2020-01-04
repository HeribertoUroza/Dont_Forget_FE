import React from 'react';

// CSS
import './secondary.css'

function Secondary(props) {
    return(
        <>
            <button className='secondary_btn' onClick={e => { console.log('click') }}>{props.btn_name}</button>
        </>
    )
}

export default Secondary;