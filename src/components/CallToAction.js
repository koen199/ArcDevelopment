import React from 'react'
import { Grid, Typography, makeStyles, Button, useTheme, useMediaQuery } from '@material-ui/core'
import beackBackground from '../assets/background.jpg'
import beackBackgroundMobile from '../assets/mobileBackground.jpg'
import ButtonArrow from './ui/ButtonArrow';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    beachBackground:{
        position: 'absolute', 
        backgroundImage: `url(${beackBackground})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        width: '100%',
        height: '100%',
        zIndex: -1, 
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url(${beackBackgroundMobile})`, 

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

        }
    }, 
    learnButton:{
        ...theme.typography.learnButton,
        fontSize: '0.7rem', 
        height: 35, 
        padding: 5, 
        [theme.breakpoints.down('xs')]:{
            marginTop: '2em',
            marginBottom: '2em'
        }
    },
}));

const CallToAction=()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    return(
        <Grid container direction='row' justifyContent="center" alignItems='center' style={{position:'relative', height: '50em', textAlign: matchesSM ? 'center': 'right'}}>
            <Grid item xs style={{ paddingRight: matchesSM ? '0em': '5em', minWidth:"23em"} }>
                <Typography variant='h4'>Simple Software.</Typography>
                <Typography variant='h4'>Revolutionary Results</Typography>
                <Typography variant='subtitle1'> Take advantage of the 21st Century</Typography>
                <Button variant='outlined' className={classes.learnButton} component={Link} to="/estimate">
                    <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                </Button>
            </Grid>
            <Grid item xs>
                <Button variant='contained' className={classes.estimateButton} component={Link} to="/estimate">Free Estimate</Button>                
            </Grid>
            <div className={classes.beachBackground}/>
        </Grid>
    )
}

export default CallToAction;