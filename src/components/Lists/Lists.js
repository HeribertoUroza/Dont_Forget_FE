import React from 'react';

//CSS
import './lists.css'

function List (props){
    console.log('list', props.list_items)
    let listItemArr = props.list_items
    //listItemArr.push({name:'test', is_completed: 'TRUE'})
    return ( 
        <>  
            <div className='input_container' >
                <input className='submit_field' placeholder='Add a ToDo' /><button className='submit_btn'>+</button>
            </div>
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