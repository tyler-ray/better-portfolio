import React, { Component } from 'react';
import axios from 'axios'
import swal from 'sweetalert2'

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            contact_name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
    updateState = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    sendMessage = () => {
        console.log(!this.state.contact_name)
        console.log(!this.state.email)
        console.log(!this.state.phone)
        console.log(!this.state.message)
        if (!this.state.contact_name || !this.state.email || !this.state.phone || !this.state.message) {
            swal({
                type:'warning',
                text:'Please fill in Name, Email, Phone and Message.'
            })
            console.log('missed something')
        } else {
            axios.post('/api/inquire', { name: this.state.contact_name, email: this.state.email, phone: this.state.phone, message: this.state.message }).then((response) => {
                console.log(response.data)
                if (response.data === 'successful') {
                    swal({
                        type:'success',
                        text:'Email was sent successfully'
                    })
                    this.setState({
                        contact_name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                    } else{
                        swal({
                            type:'error',
                            text:'Oops! something went wrong! Please contact contact@jtylerray.com.'
                        })
                    }
            }).catch(err => console.log(err))
        }


    }
    render() {
        // console.log(this.state.message)
        return (
            <div className='Contact'>
                <h1 className='title myContact'>Contact Me</h1>
                <div className="contact-wrapper">
                    <input type="text" className='input contact_name' id='contact_name' onChange={(event) => this.updateState(event)} placeholder='Name' value={this.state.contact_name} />

                    <input type="text" className='input contactEmail' id='email' onChange={(event) => this.updateState(event)} placeholder='Email Address' value={this.state.email} />

                    <input type="text" className='input contactPhone' id='phone' onChange={(event) => this.updateState(event)} placeholder='Phone Number' value={this.state.phone} />

                    <input type='text' placeholder='Message' id='message' onChange={(event) => this.updateState(event)} className='input text contactMessage' value={this.state.message} />

                </div>
                <button className='sendButton' onClick={() => this.sendMessage()}>Send</button>
            </div>
        )
    }
}
export default Contact