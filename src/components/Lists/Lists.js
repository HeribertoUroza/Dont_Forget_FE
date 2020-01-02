import React, { Component } from 'react';

//CSS
import './lists.css'

class List extends Component {
    state = {
        input: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        console.log(this.props.list_items)
        let { input } = this.state;
        let listItemArr = this.props.list_items
        return(
            <>
                <div className='input_container' >
                    <input className='submit_field' 
                           placeholder='Add a ToDo' 
                           value={input} name='input' 
                           onChange={this.handleChange}/>
                    <button className='submit_btn'>+</button>
                </div>
                {
                    listItemArr.map((e, i) => {
                        return <div className='list_name' key={i}>{e.name}</div>
                    })
                }
            </>
        )
    }
}

export default List;