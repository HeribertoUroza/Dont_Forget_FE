import React from 'react';

function Primary(props) {
    
    return(
        <> 
            <button onClick={e => { console.log('click')}}>{ props.btn_name }</button>
        </>
    )
};

export default Primary;