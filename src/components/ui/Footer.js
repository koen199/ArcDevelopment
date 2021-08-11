import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import footerAdornment from '../../assets/Footer Adornment.svg'
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'



const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor: theme.palette.common.blue, 
        width: '100%', 
        zIndex:1302, 
        position:'relative'
    }, 
    adornment:{
        width: '25em', 
        verticalAlign: 'bottom', 
        [theme.breakpoints.down("md")]:{
            width:'21em'
        }, 
        [theme.breakpoints.down("xs")]:{
            width:'15em'
        }
    },
    mainContainer:{
        position: 'absolute'
    }, 
    link:{
        color: 'white', 
        fontFamily: 'Arial', 
        fontSize: '0.75rem', 
        fontWeight: 'bold', 
        textDecoration: 'none'
    }, 
    gridItem:{
        margin: '3em'
    }, 
    iconsContainer:{
        position: 'absolute',
        right:'0px',
        height: '100%', 
        width: '18em', 

    },
    icons:{
        position: 'absolute',
        right: '0px',
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        height: '100%', 
        paddingRight: '3rem', 
        zIndex:0
    },
    icon:{       
        height: '4em', 
        width: '4em', 
        [theme.breakpoints.down("xs")]:{
            width:'2em', 
            height:'2em'
        }, 

    }
}
));

export default function Footer(){
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Hidden mdDown>            
                <Grid container className={classes.mainContainer} justifyContent='center' direction='row'>
                    <Grid className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} component={Link} to='/'>Home</Grid> 
                        </Grid> 
                    </Grid>
                    <Grid className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} component={Link} to='/costumsoftware'>Costum Software Development</Grid>
                            <Grid item className={classes.link} component={Link} to='/mobileapps'>Mobile App Development</Grid>     
                            <Grid item className={classes.link} component={Link} to='/websites'>Website Development</Grid>     
                        </Grid>
                    </Grid>
                    <Grid className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} component={Link} to='/revolution'>The Revolution</Grid>   
                            <Grid item className={classes.link} component={Link} to='/vision'>Vision</Grid>     
                            <Grid item className={classes.link} component={Link} to='/technology'>Technology</Grid>   
                            <Grid item className={classes.link} component={Link} to='/process'>Process</Grid>   
                        </Grid>  
                    </Grid>
                    <Grid className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} component={Link} to='/about'><div>About us</div></Grid>   
                            <Grid item className={classes.link} component={Link} to='/history'>History</Grid>  
                            <Grid item className={classes.link} component={Link} to='/team'>Team</Grid>     
                        </Grid> 
                    </Grid>            
                    <Grid className={classes.gridItem}>
                        <Grid container direction='column' spacing={2}>
                            <Grid item className={classes.link} component={Link} to='/contact'>Contact Us</Grid>     
                        </Grid> 
                    </Grid>  
                    {/* <Grid className={classes.gridItem}>
                        <Grid container className={classes.icons} spacing={3}> 
                            <Grid item component={'a'} href='http://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                <img alt='facebook logo' src={facebook} className={classes.icon}></img>
                            </Grid>
                            <Grid item component={'a'} href='http://www.twitter.com' target='blank' rel='noopener noreferrer'>
                                <img alt='twitter logo' src={twitter} className={classes.icon}></img>
                            </Grid>
                            <Grid item component={'a'} href='http://www.instagram.com' target='blank' rel='noopener noreferrer'>
                                <img alt='instagram logo' src={instagram} className={classes.icon}></img>
                            </Grid>
                        </Grid>    
                    </Grid>              */}
                </Grid>
            </Hidden>
            <div className={classes.iconsContainer}>            
                <Grid container className={classes.icons} spacing={3}> 
                    <Grid item component={'a'} href='http://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        <img alt='facebook logo' src={facebook} className={classes.icon}></img>
                    </Grid>
                    <Grid item component={'a'} href='http://www.twitter.com' target='blank' rel='noopener noreferrer'>
                        <img alt='twitter logo' src={twitter} className={classes.icon}></img>
                    </Grid>
                    <Grid item component={'a'} href='http://www.instagram.com' target='blank' rel='noopener noreferrer'>
                        <img alt='instagram logo' src={instagram} className={classes.icon}></img>
                    </Grid>
                </Grid>
            </div>
            <img src={footerAdornment} className={classes.adornment}/>
        </footer>
    )
}
