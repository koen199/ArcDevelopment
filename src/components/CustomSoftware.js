import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme, Grid, IconButton, Typography, useMediaQuery, Icon } from "@material-ui/core";
import { Group } from "@material-ui/icons";
import documentsAnimation from '../animations/documentsAnimation/data'
import scaleAnimation from '../animations/scaleAnimation/data.json'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'

const useStyles = makeStyles(theme=>({
    heading:{
        maxWidth: '40em'
    }, 
    arrowContainer:{
        marginTop: '0.5em'
    }, 
    mainContainer:{
        paddingLeft:'5em', 
        paddingRight: '5em', 
        paddingTop: '2em', 
        paddingBottom: '10em', 
        border: '1px solid red'
    }, 
    itemContainer:{
        maxWidth: '80em'

    }
}));

const CustomSoftware=()=>{
    const classes = useStyles();
    const documentOptions={
        loop: true, 
        autoplay: true, 
        animationData: documentsAnimation,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }
    const scaleOptions={
        loop: true, 
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings:{
            preserveAspectRatio: 'xMidYmid slice'
        }
    }
    return (
    <Grid container direction='column' className={classes.mainContainer}>
        <Grid item container direction='row'>
            <Grid item className={classes.arrowContainer} style={{marginRight: '1em', marginLeft: '-3.5em'}}>
                <IconButton style={{backgroundColor: 'transparent'}} component={Link} to='/services'>
                    <img src={backArrow}/>
                </IconButton>
            </Grid>
            <Grid item container direction='column' className={classes.heading}>
                <Grid item>
                    <Typography variant="h2">Custom Software Development</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='body1' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa nisl, pulvinar non lacus non, molestie vehicula nisl. Sed eu magna interdum libero consequat varius. Integer sit amet ipsum est. Aenean libero urna, eleifend vel massa vitae, semper facilisis arcu. Cras sed malesuada lorem, sit amet ultricies purus. Donec pharetra ut dui non consequat. Sed rhoncus placerat nunc, eu aliquam leo tristique eget. In et imperdiet ex, consequat lacinia arcu. In eu tincidunt ex. Etiam vehicula nunc in quam laoreet, non blandit massa commodo. Nulla dapibus tellus molestie erat imperdiet condimentum. Morbi placerat neque nec turpis rutrum, non sollicitudin quam pulvinar.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa nisl, pulvinar non lacus non, molestie vehicula nisl. Sed eu magna interdum libero consequat varius. Integer sit amet ipsum est. Aenean libero urna, eleifend vel massa vitae, semper facilisis arcu. Cras sed malesuada lorem, sit amet ultricies purus. Donec pharetra ut dui non consequat. Sed rhoncus placerat nunc, eu aliquam leo tristique eget. In et imperdiet ex, consequat lacinia arcu. In eu tincidunt ex. Etiam vehicula nunc in quam laoreet, non blandit massa commodo. Nulla dapibus tellus molestie erat imperdiet condimentum. Morbi placerat neque nec turpis rutrum, non sollicitudin quam pulvinar.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa nisl, pulvinar non lacus non, molestie vehicula nisl. Sed eu magna interdum libero consequat varius. Integer sit amet ipsum est. Aenean libero urna, eleifend vel massa vitae, semper facilisis arcu. Cras sed malesuada lorem, sit amet ultricies purus. Donec pharetra ut dui non consequat. Sed rhoncus placerat nunc, eu aliquam leo tristique eget. In et imperdiet ex, consequat lacinia arcu. In eu tincidunt ex. Etiam vehicula nunc in quam laoreet, non blandit massa commodo. Nulla dapibus tellus molestie erat imperdiet condimentum. Morbi placerat neque nec turpis rutrum, non sollicitudin quam pulvinar.
                    </Typography>
                    <Typography variant='body1' paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In massa nisl, pulvinar non lacus non, molestie vehicula nisl. Sed eu magna interdum libero consequat varius. Integer sit amet ipsum est. Aenean libero urna, eleifend vel massa vitae, semper facilisis arcu. Cras sed malesuada lorem, sit amet ultricies purus. Donec pharetra ut dui non consequat. Sed rhoncus placerat nunc, eu aliquam leo tristique eget. In et imperdiet ex, consequat lacinia arcu. In eu tincidunt ex. Etiam vehicula nunc in quam laoreet, non blandit massa commodo. Nulla dapibus tellus molestie erat imperdiet condimentum. Morbi placerat neque nec turpis rutrum, non sollicitudin quam pulvinar.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.arrowContainer}>
                <IconButton style={{backgroundColor: 'transparent'}} component={Link} to='/mobileapps'>
                    <img src={forwardArrow}/>
                </IconButton>
            </Grid>
        </Grid>
        <Grid item container direction='row' justifyContent='center' style={{marginTop: '15em', marginBottom: '20em'}}>
            <Grid item container direction='column' md style={{maxWidth: '40em'}} alignItems='center'>
                <Grid item>
                    <Typography variant='h4'>Save Energy</Typography>
                </Grid>
                <Grid item>
                    <img src={lightbulb}/>
                </Grid>
            </Grid>
            <Grid item container direction='column' md style={{maxWidth: '40em'}} alignItems='center'>
                <Grid item>
                    <Typography variant='h4'>Save Time</Typography>
                </Grid>
                <Grid item>
                    <img src={stopwatch}/>
                </Grid>
            </Grid>
            <Grid item container direction='column' md style={{maxWidth: '40em'}} alignItems='center'>
                <Grid item>
                    <Typography variant='h4'>Save Money</Typography>
                </Grid>
                <Grid item>
                    <img src={cash}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container direction='row'>
            <Grid item container className={classes.itemContainer}>
                <Grid item container direction='column' classes={classes.itemContainer} md>
                    <Grid item>
                        <Typography variant='h4'>Digital Documents & Data</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Billions are spent annually on the purchasing, printing and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth
                        </Typography>
                    </Grid>

                </Grid>
                <Grid item md>
                    <Lottie options={documentOptions} style={{maxHeight: 325, maxWidth:275}}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container direction='row'>
            <Grid item container className={classes.itemContainer}>
                <Grid item md>
                    <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth:280}}/>
                </Grid>
                <Grid item container direction='column' classes={classes.itemContainer} md>
                    <Grid item>
                        <Typography variant='h4' >Scale</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            Billions are spent annually on the purchasing, printing and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )

}

export default CustomSoftware;