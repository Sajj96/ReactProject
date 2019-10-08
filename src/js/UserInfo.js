import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Link} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import '../css/GooglegrandHotelFonts.css';


const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        backgroundColor: '#212121',
        margin: '13px 0px',
        justifyContent: 'center',
    },
    profilepic:{
        width: 80,
        height: 80,
        margin: '8px 20px',
        border: '3px solid #FF8E53',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            height: 120,
            margin: '20px 150px',
            border: '3px solid #FF8E53',
          },
    },
    userdetails:{
        display: 'flex',
        margin: '15px 20px',
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            margin: '25px 70px',
        },
    },
    username:{
        fontFamily: 'Proxima',
        fontSize: '20px',
        color: '#FFFFFF',
        padding: '0 20px',
        [theme.breakpoints.up('sm')]: {
            fontFamily: 'Proxima',
            fontSize: '20px',
            color: '#FFFFFF',
            padding: '0 20px',
        },
    },
    btnfollow:{
        fontSize: '10px',
        fontWeight: 300,
        textTransform: 'capitalize',
        color: '#FFFFFF',
        padding: '0 25px',
        backgroundColor: 'green',
        blockSize: '20px',
        borderColor: '#FFFFFF',
        '&:hover':{
            backgroundColor: 'green',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px',
            fontWeight: 600,
            textTransform: 'capitalize',
            color: '#FFFFFF',
            padding: '0 20px',
            backgroundColor: 'green',
            blockSize: '30px',
        },
    },
    btndropdown:{
        color: '#FFFFFF',
        borderColor: '#FFFFFF', 
        margin: '0 10px',
        fontWeight: 100,
        blockSize: '20px',
        padding: '0 -1.5em',
        [theme.breakpoints.up('sm')]: {
            color: '#FFFFFF',
            borderColor: '#FFFFFF', 
            margin: '0 10px',
            blockSize: '30px',
            padding: '0 -1.5em',

        },
    },
    moreicon:{
       display: 'none',
        [theme.breakpoints.up('sm')]: {
            margin: '0 10px',
            color: '#FFFFFF',
            display: 'block',
        },
    },
    userdetailscount:{
        fontFamily: 'Proxima',
        display: 'flex',
        color: '#FFFFFF',
        margin: '0 40px',
        [theme.breakpoints.up('sm')]: {
            fontFamily: 'Proxima',
            display: 'flex',
            color: '#FFFFFF',
            margin: '0 90px',
        },
    },
    posts:{
        fontSize: '16px !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px !important',
        },
    },
    followers:{
        padding: '0 2em',
        fontSize: '16px !important',
        [theme.breakpoints.up('sm')]: {
            padding: '0 2em',
            fontSize: '16px !important',
        },
    },
    following:{
        fontSize: '16px !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px !important',
        },
    },
    otherdetails:{
        fontFamily: 'Proxima',
        color: '#FFFFFF',
        margin: '5px 40px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            fontFamily: 'Proxima',
            color: '#FFFFFF',
            margin: '10px 90px',
            width: 'auto',
        },
    },
    details:{
        fontSize: '16px',
        [theme.breakpoints.up('sm')]: {
            fontSize: '16px',
        },
    },
    detailsfollower:{
        fontSize: '10px',
    },
    link:{
        color: 'blue',
    },
}));

export default function UserInfo(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3} sm={3} className={classes.profilegrid}>
                    <Avatar alt="profilepic" src="./Wallpaper.jpg" className={classes.profilepic} id="avatar" />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <div className={classes.userdetails}>
                    <Typography className={classes.username}>Sajj96</Typography>
                              
                    <Button variant="outlined" size="medium"  className={classes.btnfollow}>
                        Follow
                    </Button>
                    <Button variant="outlined" size="small"  className={classes.btndropdown}>
                        <ArrowDropDownIcon />
                    </Button>
                    <MoreHorizIcon className={classes.moreicon} color="inherit"/>
                    </div> 
                    <div className={classes.userdetailscount}>
                        <Typography className={classes.posts}><strong>100</strong> posts</Typography>

                        <Typography className={classes.followers}><strong>1m</strong> followers</Typography>

                        <Typography className={classes.following}><strong>2k</strong> following</Typography>
                    </div>               
                    <div className={classes.otherdetails}>
                        <Typography  gutterBottom><strong>sajj96</strong></Typography>
                        <Typography  gutterBottom className={classes.details}>Web designer and developer</Typography>
                        <Typography  gutterBottom className={classes.details}>Developer-Nottech Lab</Typography>
                        <Typography  gutterBottom className={classes.details}>Youtube channel</Typography>
                        <Typography  gutterBottom className={classes.details}><Link className={classes.link}><strong>youtube.com/SajjTutorials</strong></Link></Typography>
                        <Typography variant="caption" gutterBottom className={classes.detailsfollower}>Followed by <strong>captain_sajjad</strong>+ 100 more</Typography>
                    </div>             
                </Grid>
                <Grid item xs={3} sm={3}></Grid>
            </Grid>
        </div>
    );
}