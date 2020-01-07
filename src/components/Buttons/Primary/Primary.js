import React from 'react';

// CSS
import './primary.css'

function Primary(props) {
    
    return(
        <> 
            <button className='primary_btn' onClick={e => { console.log('click') }}>{props.btn_name}</button>
        </>
    )
};

export default Primary;