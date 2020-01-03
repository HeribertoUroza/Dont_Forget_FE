import React from 'react';

// CSS
import './primary.css'

function Primary(props) {
    
    return(
        <> 
            <div className='primary_btn_container'>
                <button className='primary_btn' onClick={e => { console.log('click') }}>{props.btn_name}</button>
            </div>
        </>
    )
};

export default Primary;