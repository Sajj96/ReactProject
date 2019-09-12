import React, {Component} from 'react';
import { Button, TextField} from "@material-ui/core"
import './App.css';


class Form extends Component{
    render(){
        return(
        <div className="myform-div">
        <form className="myform">
            <h1>Materialized Contact Form</h1> 
            <TextField margin="normal" label="Name" id="name" type="text" />
            <TextField margin="normal" label="Email" id="email" type="email" />
            <TextField margin="normal" label="Address" id="address" type="text" />
            <TextField margin="normal" defaultValue="Some message here" multiline rows={4} id="message" />
            <br />
            <Button variant="contained" color="primary" size="medium">Send</Button>
            {'    '}
            <Button variant="contained" color="secondary" size="medium">Cancel</Button>
        </form>
        </div>
        )
    }
}

export default Form;