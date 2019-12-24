import React from 'react';

//CSS
import './categories.css';

//COMPONENTS
import List from '../Lists/Lists'


function Categories (props) {
    return (
        <>
            <div className='category_container'>
                <div className='category_name'>{props.name}</div>
            </div> 
            
            <div>
            {
                props.list_items.map((e,i) => {
                    return <List list_name={e.name} />
                })
            }
            </div>
        </>
    )
};

export default Categories;