import React, { Component } from 'react';

//CSS
import './landing.css';

//COMPONENTS
import Catergories from '../../components/Categories/Categories'

class Landing extends Component {

    state = {
        catergories_name: 'Categories',
        list_items: ['Milk', 'Eggs', 'Bread'],
    };
    
    render(){
        return (
            <>
                <div className='container'>
                    <Catergories />
                </div>
            </>
        )
    }
};

export default Landing;
