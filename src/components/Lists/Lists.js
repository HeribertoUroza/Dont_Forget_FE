import React from 'react';

//CSS
import './lists.css'

function List (props){
    console.log('list', props.list_items)
    let listItemArr = props.list_items

    return (
        <>  

            {
                listItemArr.map((e,i) => {
                    console.log(e)
                    return <div className='list_name' key={i}>{e.name}</div>
                })
            }
        </>
    )
};

export default List;