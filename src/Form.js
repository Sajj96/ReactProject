import React, {Component} from 'react';
import { Button, TextField} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import './App.css';
import Alert from './Alerts.js';


class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            caption: 'Materialized'
        }
        this.showSubmittedmsg = this.showSubmittedmsg.bind(this)
    };
    
    showSubmittedmsg = event => {
        this.setState({caption: 'Submitted'})
    }

    render(){
        return(
        <div className="myform-div">
        <form className="myform">
            <h1>{this.state.caption} Contact Form</h1> 
            <TextField margin="normal" label="Name" id="name" type="text" />
            <TextField margin="normal" label="Email" id="email" type="email" />
            <TextField margin="normal" label="Address" id="address" type="text" />
            <TextField margin="normal" defaultValue="Some message here" multiline rows={4} id="message" />
            <br />
            <Button variant="contained" size="medium" onClick={this.showSubmittedmsg} className="btn-send">
              <SendIcon>Send</SendIcon> Send
            </Button>
            {'    '}
            <Alert />
        </form>
        </div>
        )
    }
}

export default Form;