import React, { Component } from 'react';

//CSS
import './lists.css'

class List extends Component {
    state = {
        input: '',
        list_items: this.props.list_items
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    handleAddBtn = e => {
        e.preventDefault();

        let { input, list_items } = this.state;

        list_items.push({name: input, is_completed: 'FALSE'})

        this.setState({ input: '', list_items: list_items})
    };

    handleListItem = e => {
        console.log(e)
    };


    render(){
        let { input, list_items } = this.state;
       
        return(
            <>
                <div className='input_container' >
                    <input className='submit_field' 
                           placeholder='Add a to your list' 
                           value={input} name='input' 
                           onChange={this.handleChange}/>
                    <button className='submit_btn' onClick={this.handleAddBtn} >+</button>
                </div>
                {
                    list_items.map((e, i) => {
                        return <div className='list_name' key={i} >{e.name} <button onClick={this.handleListItem}>X</button></div>
                    })
                }
            </>
        )
    }
}

export default List;