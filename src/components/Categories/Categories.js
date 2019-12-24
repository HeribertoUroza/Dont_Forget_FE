import React from 'react';

//CSS
import './categories.css';

//COMPONENTS
import List from '../Lists/Lists'


function Categories (props) {
    return (
        <> 
            <div>{props.name}</div>
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