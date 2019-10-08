import React, {Component, Fragment} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';

export default class extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        const {open} = this.state
        return(
           <Fragment>
                <Button variant="contained" color="secondary" size="medium" onClick={this.handleOpen}>
                <CancelIcon>Cancel</CancelIcon>Cancel
            </Button>
             <Dialog open={open} onClose={this.handleOpen} aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description">
                 <DialogTitle id="alert-dialog-title">{"Do you want to cancel?"}</DialogTitle>
                 <DialogContent >
                     <DialogContentText id="alert-dialog-description">
                         This message alert you for the action you want to perform
                     </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                     <Button onClick={this.handleOpen} color="primary">No</Button>
                     <Button onClick={this.handleOpen} color="primary" autoFocus>Yes</Button>
                 </DialogActions>
             </Dialog>
           </Fragment>
        )
    }
}