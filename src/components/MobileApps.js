import { Grid, IconButton, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import iphone from '../assets/iphone.svg'
import integrationAnimation from '../animations/integrationAnimation/data.json'
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import swissKnife from '../assets/swissKnife.svg'
import extendAccess from '../assets/extendAccess.svg'
import increaseEngagement from '../assets/increaseEngagement.svg'
import CallToAction from "./CallToAction";



const Header=()=>{
    return(
        <Grid container direction='row' justifyContent='space-between' style={{paddingTop: '2em'}}>
            <Grid item xs>                
                <Grid container direction='row'>
                    <Grid item>
                        <IconButton component={Link} to='/costumsoftware'>
                            <img src={backArrow}/>
                        </IconButton>
                    </Grid>
                    <Grid item style={{maxWidth: '40em', paddingTop: '0.3em'}} xs>
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography variant='h4' paragraph>
                                    iOS/Android App Development
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' paragraph>
                                    Mobile apps allow you to take your tools on the go.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' paragraph>
                                    Wether you want an app for your customers, employees or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' paragraph>
                                    Convenience. Connection.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <IconButton component={Link} to='/websites'>
                    <img src={forwardArrow} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

const MainFeatures=()=>{
    const animationOptions={
        loop: true, 
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }
    return(
        <Grid container direction='row' style={{paddingLeft:'2.5em', paddingRight: '2.5em'}}>
            <Grid item xs='12' md='4'>
                <Typography variant='h4' paragraph>
                    Integration
                </Typography>
                <Typography variant='body1' paragraph>
                    Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                </Typography>
                <Typography variant='body1' paragraph>
                    This allows you to extend your reach, reinvent interactions and develop a stronger relationship with your users than ever before.
                </Typography>
            </Grid>
            <Grid item xs='12' md='4' >
                <Lottie options={animationOptions} style={{maxWidth: '20em'}} />
            </Grid>
            <Grid item xs='12' md='4'>
                <Typography variant='h4' paragraph>
                    Simultaneous Platform Support
                </Typography>
                <Typography variant='body1' paragraph>
                    Our cutting edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time.
                </Typography>
                <Typography variant='body1' paragraph>
                    This significantly reduces costs and creates a more unified brand experience across all devices.
                </Typography>
            </Grid>
        </Grid>      
    )
}

const Goals=()=>{
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('xs'))
    return (
        <Grid container direction='row' justifyContent='space-around' style={{paddingTop:'5em'}}>
            <Grid item xs>
                <Grid container direction='column' alignItems='center' style={{paddingBottom: '1.5em'}}>
                    <Grid item style={{paddingBottom: '1.5em'}}>
                        <Typography variant='h4'>
                            Extend functionality
                        </Typography>                    
                    </Grid>
                    <Grid item>
                        <img src={swissKnife}/>                 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction='column' alignItems='center' style={{paddingBottom: '1.5em'}}>
                    <Grid item style={{paddingBottom: '1.5em'}}>
                        <Typography variant='h4'>
                            Extend access
                        </Typography>                    
                    </Grid>
                    <Grid item style={{paddingBottom: '1.5em'}}>
                        <img src={extendAccess} style={{maxHeight: matchesSM ? '6em': '12em'}}/>                 
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction='column' alignItems='center' style={{paddingBottom: '1.5em'}}>
                    <Grid item style={{paddingBottom: '1.5em'}}>
                        <Typography variant='h4'>
                            Increase Engagement
                        </Typography>                    
                    </Grid>
                    <Grid item>
                        <img src={increaseEngagement}/>                 
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}



const MobileApps=()=>{
    return (
        <Grid container direction='column'>
            <Header/>
            <MainFeatures/>
            <Goals/>  
            <CallToAction/>          
        </Grid>
    )
}
export default MobileApps;