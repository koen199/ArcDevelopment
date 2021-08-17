import { Grid, IconButton, Typography } from "@material-ui/core";
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import iphone from '../assets/iphone.svg'
import integrationAnimation from '../animations/integrationAnimation/data.json'
import Lottie from "react-lottie";




const Header=()=>{
    return(
        <Grid container direction='row' justifyContent='space-between'>
            <Grid item xs>                
                <Grid container direction='row'>
                    <Grid item>
                        <IconButton>
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
                <IconButton>
                    <img src={forwardArrow}/>
                </IconButton>
            </Grid>
        </Grid>
    )
}



const MobileApps=()=>{
    const animationOptions={
        loop: true, 
        autoplay: true, 
        animationData: integrationAnimation,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }
    return (
        <Grid container direction='column'>
            <Header/>
            <Grid container direction='row' style={{paddingLeft:'2.5em', paddingRight: '2.5em'}}>
                <Grid item xs='4'>
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
                <Grid item xs='4' >
                    <Lottie options={animationOptions} style={{maxWidth: '20em'}} />
                </Grid>
                <Grid item xs='4'>
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
            
        </Grid>
    )

}
export default MobileApps;