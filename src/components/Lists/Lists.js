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
    }

    handleAddBtn = e => {
        e.preventDefault();
        let { input, list_items } = this.state
        console.log(input)

        list_items.push({name: input, is_completed: 'FALSE'})

        this.setState({ input: '', list_items: list_items})
        
        console.log(this.state)
    }


    render(){
        console.log(this.props.list_items)
        let { input, list_items } = this.state;
       
        return(
            <>
                <div className='input_container' >
                    <input className='submit_field' 
                           placeholder='Add a ToDo' 
                           value={input} name='input' 
                           onChange={this.handleChange}/>
                    <button className='submit_btn' onClick={this.handleAddBtn} >+</button>
                </div>
                {
                    list_items.map((e, i) => {
                        return <div className='list_name' key={i}>{e.name}</div>
                    })
                }
            </>
        )
    }
}

export default List;