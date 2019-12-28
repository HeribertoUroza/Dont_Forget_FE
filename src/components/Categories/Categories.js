import React from 'react';

//CSS
import './categories.css';

//COMPONENTS
import List from '../Lists/Lists'


function Categories (props) {
    console.log(props.list_items)
    return (
        <>  
            <div className='category_container'>
                <div className='category_name_container'>
                    <div className='category_name'>{props.name}</div>
                </div>
                <List list_items={props.list_items}/>
            </div>
             
            
            
            

        </>
    )
};

export default Categories;