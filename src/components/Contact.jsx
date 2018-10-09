import React, { Component } from 'react';


class Contact extends Component {
    constructor(){
        super()
        this.state ={
            contact_name:'',
            email:'',
            phone:'',
            message:''
        }
    }
    updateState = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    sendMessage = () =>{
        
    }
    render() {

        return (
            <div className='Contact'>
                <h1 className='title myContact'>Contact Me</h1>
                <div className="contact-wrapper">
                    <input type="text" className='input contactName' id = 'contact_name'  onClick={(event)=>this.updateState(event)} placeholder='Name' />

                    <input type="text" className='input contactEmail' id='email'  onClick={(event)=>this.updateState(event)} placeholder='Email Address' />

                    <input type="text" className='input contactPhone' id='phone' onClick={(event)=>this.updateState(event)}  placeholder='Phone Number' />

                    <textArea placeholder='Message' id='message' onClick={(event)=>this.updateState(event)} className='input text contactMessage'></textArea>

                </div>
                <button className='sendButton'>Send</button>
            </div>
        )
    }
}
export default Contact