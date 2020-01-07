import React, { Component } from 'react';

//CSS
import './landing.css';

//COMPONENTS
import Catergories from '../../components/Categories/Categories';
import Primary from '../../components/Buttons/Primary/Primary';
import Secondary from '../../components/Buttons/Secondary/Secondary';

class Landing extends Component {

    state = {
        catergories_name: 'Create Categories',
        list_items: [   {name:'Milk', is_completed: 'FALSE'}, 
                        {name:'Eggs', is_completed: 'FALSE'},  
                        {name:'Bread', is_completed: 'TRUE'}    ],
    };

    render(){
        let { catergories_name, list_items } = this.state;

        return (
            <>
                <div className='container'>
                    <Catergories name={ catergories_name } list_items={ list_items }/>
                    <Catergories name={catergories_name} list_items={list_items} />
                </div>
                
                <div className='title_container'>
                    <div className='title1'>So You</div>
                    <div className='title2'>Don't Forget...</div>
                </div>
                
                <div className='btn_container'>
                    <Primary btn_name='Sign Up' />
                    <Secondary btn_name='Login' />
                </div>
            </>
        )
    }
};

export default Landing;
