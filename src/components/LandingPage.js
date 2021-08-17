import React from 'react'
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import animationData from '../animations/landinganimation/data'
import { Grid, Typography } from '@material-ui/core'
import { Button, useTheme } from '@material-ui/core'
import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import { useMediaQuery } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg'
import CallToAction from './CallToAction'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    animation:{
        maxWidth: '50em', 
        minWidth: '21em', 
        marginTop: '2em', 
        marginLeft: '10%', 
        [theme.breakpoints.down('sm')]:{
            maxWidth: '30em',

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
    buttonContainer:{
        marginTop: '1em'
    }, 
    learnButtonHero:{
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45, 
        width: 145
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
    mainContainer:{
        marginTop: "5em", 
        [theme.breakpoints.down('md')]:{
            marginTop: '3em'
        },
        [theme.breakpoints.down('xs')]:{
            marginTop: '2em'
        },
    }, 
    heroTextContainer:{
        minWidth: '21.5em', 
        marginLeft: '1em', 
        [theme.breakpoints.down('xs')]:{
            marginLeft: 0
        }
    }, 
    specialText:{
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    }, 
    subtitle:{
        marginBottom: '1em'
    }, 
    icon:{
        marginLeft: '2em', 
        [theme.breakpoints.down('xs')]:{
            marginLeft: 0, 
        }
    }, 
    serviceContainer:{
        [theme.breakpoints.down('sm')]:{
            padding:25, 
            marginBottom: '5em'
        }
    }, 
    heroContainer:{
        marginBottom: '15em'
    }, 
    revolutionBackground:{
        position: 'absolute',
        backgroundImage: `url(${revolutionBackground})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: '100%', 
        width: '100%', 
        zIndex: -1
    }, 
    revolutionCard:{
        marginTop: '12em',
        position: 'relative', 
        padding: '10em', 
        [theme.breakpoints.down('xs')]:{
            paddingLeft: '1em', 
            paddingRight: '1em'

        },
        '& .MuiCard-root':{
            boxShadow: theme.shadows[10], 
            borderRadius: '20px'
        },
        '& .MuiCardContent-root':{
            padding: '2.5em'
        }, 


        '& .MuiTypography-root':{
            marginBottom: '0.5em'
        }, 
        boxShadow: theme.shadows[10]
    }, 
    infoBackground:{
        position: 'absolute',
        backgroundImage: `url(${infoBackground})`, 
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: '100%', 
        width: '100%', 
        zIndex:-1
    }
}));

const LandingPage=()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions={
        loop: true, 
        autoplay: true, 
        animationData: animationData,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }

    return (
        <Grid container direction='column' className={classes.mainContainer}>
            <Grid item> {/*----- Hero Block ----*/}
                <Grid container direction='row' justifyContent='flex-end' alignItems='center' className={classes.heroContainer}>
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant='h2' align='center'>
                            Bringing West Coast Technology<br/> To the Midwest
                        </Typography>
                        <Grid container justifyContent='center' className={classes.buttonContainer}>
                            <Grid item>
                                <Button component={Link} to="/estimate" variant='contained' className={classes.estimateButton}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' className={classes.learnButtonHero}>
                                    <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}></Lottie>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*----Services Block----*/}
                <Grid container direction='row' style={{textAlign: matchesSM ? 'center': undefined}} justifyContent={matchesSM ? 'center' : 'flex-start'} className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : '5em'}}>
                        <Typography variant='h4'>
                            Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Complete digital solution, from investigation to {" "}<span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton} component={Link} to='/costumsoftware'>
                            <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item >
                        <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}></img>
                    </Grid>
                </Grid>
                <Grid container direction='row' style={{textAlign: matchesSM ? 'center': undefined}} justifyContent={matchesSM ? 'center' : 'flex-end'} className={classes.serviceContainer}>
                    <Grid item>
                        <Typography variant='h4'>
                            iOS/Android App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Extend functioanlity. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant='subtitle1'>
                           Integrate your web experience or create a standalone app
                           {matchesSM ? null: <br/>} with either mobile platform.
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton} component={Link} to="/mobileapps">
                            <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : '5em'}} component={Link} to="/mobileapps">
                        <img alt="custom software icon" src={mobileIcon} className={classes.icon}></img>
                    </Grid>
                </Grid>
                <Grid container direction='row' style={{textAlign: matchesSM ? 'center': undefined}} justifyContent={matchesSM ? 'center' : 'flex-start'} className={classes.serviceContainer}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : '5em'}}>
                        <Typography variant='h4'>
                            Website Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton} component={Link} to="/websites">
                            <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : '5em'}}>
                        <img alt="custom software icon" src={websitesIcon} className={classes.icon}></img>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems='center' justifyContent='center' className={classes.revolutionCard}>
                    <Card>
                        <CardContent>
                            <Grid container direction='column' style={{textAlign: 'center'}}>
                                <Grid item>
                                    <Typography variant='h3'>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant='subtitle1'>
                                            Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant='outlined' className={classes.learnButtonHero} component={Link} to="/revolution">
                                        <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}></div>                    
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='row' alignItems='center' style={{position: 'relative', height: '50em'}}>
                    <Grid item style={{paddingLeft: matchesSM ? '0em' : '5em', textAlign: matchesSM ? 'center': 'left',  minWidth:'16em'}} xs>
                        <Typography variant='h2' style={{color: 'white'}}>About Us</Typography>
                        <Typography variant='subtitle2'>Let's get personal</Typography>
                        <Grid>
                            <Button variant='outlined' className={classes.learnButtonHero} style={{color:'white', borderColor: 'white'}} component={Link} to="/about"> 
                                <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill='white'></ButtonArrow>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item style={{paddingRight: matchesSM ? '0em': '5em', textAlign: matchesSM ? 'center': 'right', minWidth:'16em'}} xs>
                        <Typography variant='h2' style={{color: 'white'}}>Contact Us</Typography>
                        <Typography variant='subtitle2'>Say Hello</Typography>
                        <Typography variant='subtitle2'>
                            Say Hello! <span role='img' aria-label='waving hand'>🖐</span>
                        </Typography>
                        <Grid>
                            <Button variant='outlined' className={classes.learnButtonHero} style={{color:'white', borderColor: 'white'}} component={Link} to="/contact">
                                <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill='white'></ButtonArrow>
                            </Button>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBackground}/>
                </Grid>
            </Grid>
            <CallToAction/>
        </Grid>
    )
}

export default LandingPage;
