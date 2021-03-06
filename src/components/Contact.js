import {Link} from 'react-router-dom'
import { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid, Typography, Button, TextField, useMediaQuery } from '@material-ui/core';
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'
import ButtonArrow from './ui/ButtonArrow';


const useStyles = makeStyles(theme=>({
    background:{
        backgroundImage: `url(${background})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: '60em', 
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url(${mobileBackground})`, 
        }
    }, 
    estimateButton:{
        ...theme.typography.estimate, 
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50, 
        height: 45, 
        width: 145, 
        marginRight: 40, 
        '&:hover':{
            backgroundColor: theme.palette.secondary.light

        },
        [theme.breakpoints.down('md')]:{
            marginLeft:0,
            marginRight: 0
        }
    }, 
    learnButton:{
        ...theme.typography.learnButton,
        fontSize: '0.7rem', 
        height: 35, 
        padding: 5, 
        [theme.breakpoints.down('md')]:{
            marginTop: '2em',
            marginBottom: '2em'
        }
    }, 
    message:{
        border:`2px solid ${theme.palette.common.blue}`, 
        marginTop: '5em', 
        borderRadius: 5
    }, 
    sendButton:{
        ...theme.typography.estimate, 
        borderRadius: 50, 
        height: 45, 
        width: 245, 
        fontSize: '1rem', 
        backgroundColor: theme.palette.common.orange, 
        '&:hover':{
            backgroundColor: theme.palette.secondary.light
        }
    }
}
));
const Contact=()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const onChange = event => {
        let valid;
        switch(event.target.id){
            case 'email':
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if(!valid){
                    setEmailHelper('Invalid email');
                }
                else{
                    setEmailHelper('');
                }
                break;
            case 'phone':
                setPhone(event.target.value);
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if(!valid){
                    setPhoneHelper('Invalid phone number');
                }
                break;
            default:
                break;
        }
    }



    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [emailHelper, setEmailHelper] = useState('');

    const [phone, setPhone] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');

    const [message, setMessage] = useState('');

    return(
        <Grid container direction='row'>
            <Grid item container direction='column' lg={4} xl={3} justify='center' alignItems='center'>
                <Grid item>
                    <Typography variant='h2' style={{lineHeight: 1}}>Contact Us</Typography>
                    <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1rem'}}>We're waiting.</Typography>
                </Grid>
                <Grid item container justifyContent='center' style={{marginTop: '2em'}}>
                    <Grid item >
                        <img src={phoneIcon} alt='phone' style={{marginRight: '0.5em'}}/>
                    </Grid>
                    <Typography variant='body1' style={{color: theme.palette.common.blue, fontSize: '1rem'}}>
                        (555) 555-5555
                    </Typography>
                </Grid>
                <Grid item container justifyContent='center' style={{marginBottom:'2em'}}>
                    <Grid item>
                        <img src={emailIcon} alt='email' style={{marginRight: '0.5em', verticalAlign: 'bottom'}}/>
                    </Grid>
                    <Typography variant='body1' style={{color: theme.palette.common.blue}} >
                        koen@kissmyass.com
                    </Typography>
                </Grid>
                <Grid item container  direction='column' alignItems='center'>
                    <Grid item>
                        <TextField fullWidth label='Name' id='name' value={name} onChange={(event)=>setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Email'
                            id='email'
                            value={email}
                            onChange={onChange}
                            error={emailHelper}
                            helperText={emailHelper}
                        />
                    </Grid>
                    <Grid item>
                        <TextField label='Phone' id='phone' value={phone} onChange={onChange}/>
                    </Grid>
                </Grid>
                <Grid item style={{maxWidth:'20em'}}>
                    <TextField
                        value={message}
                        id='message'
                        onChange={event=>setMessage(event.target.value)}
                        multiline
                        rows={10}
                        className={classes.message}
                        InputProps={{disableUnderline:true}}  
                    />
                </Grid>
                <Grid item style={{marginTop:'2em', marginBottom: '2em'}}>
                    <Button variant='contained' className={classes.sendButton}>
                        Send Message
                        <img src={airplane} alt='paper airplane' style={{marginLeft: '1em', fill:'red'}}/>
                    </Button>
                </Grid>
            </Grid>
            <Grid item container className={classes.background} lg={8} xl={9} alignItems='center' justifyContent={matchesMD?'center':undefined} direction={matchesMD? 'column':'row'}>
                <Grid item style={{ paddingLeft: matchesSM ? '0em': '2.5em', minWidth:"23em"}}>
                    <Typography align={matchesMD? 'center':undefined} variant='h4'>Simple Software.</Typography>
                    <Typography align={matchesMD? 'center': undefined} variant='h4'>Revolutionary Results</Typography>
                    <Typography align={matchesMD? 'center':undefined} variant='subtitle1'> Take advantage of the 21st Century</Typography>
                    <Grid item container justifyContent={matchesMD?'center': undefined}>  
                        <Button variant='outlined' className={classes.learnButton} component={Link} to="/estimate">
                            <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid> 
                </Grid>
                <Grid item>
                    <Button variant='contained' className={classes.estimateButton} component={Link} to="/estimate">Free Estimate</Button>                
                </Grid>
                <div className={classes.beachBackground}/>
            </Grid>
        </Grid>
    )

};

export default Contact;