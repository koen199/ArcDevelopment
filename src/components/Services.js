import { makeStyles, Grid, Typography, useTheme, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import mobileIcon from '../assets/mobileIcon.svg'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import websitesIcon from '../assets/websiteIcon.svg'





const useStyles = makeStyles(theme=>({
    rootContainer:{
        [theme.breakpoints.down('sm')]:{
            textAlign: 'center'
        }
    },
    serviceTextContainer:{
        minHeight: '10em',
        paddingLeft: '3em',
        [theme.breakpoints.down('sm')]:{
            paddingLeft: '0em'
        }
    },
    serviceIconContainer:{
        height: '10em' ,
        marginRight: '5em', 
        [theme.breakpoints.down('sm')]:{
            marginRight: '0em'
        }, 
        '& img':{
            height: '100%', 
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },    
    service:{
        paddingBottom: '5em'
    }, 
    learnButton:{
        ...theme.typography.learnButton,
        fontSize: '0.7rem', 
        height: 35, 
        width: '15em',
        padding: 5, 
        [theme.breakpoints.down('xs')]:{
            marginTop: '2em',
            marginBottom: '2em'
        }
    },
}));

const Service=(props)=>{
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    return (
        <>
            <Grid item>
                <Grid
                    container
                    direction='column'
                    justifyContent='center' 
                    justifyContent='space-between'
                    className={classes.serviceTextContainer}
                >
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='h4' style={{paddingBottom:'0.5em'}}>{props.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>{props.paragraph1}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction='column'>
                        <Grid item>
                            <Typography variant='subtitle1' style={{paddingBottom:'1.5em'}}>{props.paragraph2}</Typography>
                        </Grid>
                    </Grid>
                    <Button variant='outlined' className={classes.learnButton} component={Link} to={props.to}>
                            <span style={{marginRight: 10}}>Learn More</span><ButtonArrow widht={15} height={15} fill={theme.palette.common.blue}></ButtonArrow>
                    </Button>
                </Grid>
            </Grid>
            <Grid item className={classes.serviceIconContainer} xs={matchesSM}>
                <img src={props.icon}/>
            </Grid>
        </>
    )
}

const Services=()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Grid container direction='column' className={classes.rootContainer}>
            <Grid item>
                <Typography variant='h2'>Services</Typography>
            </Grid>
            <Grid item className={classes.service}>
                <Grid container direction='row' justifyContent = {matchesSM ? 'center': 'flex-end'}>
                    <Service
                        title='iOS/Android Development'
                        paragraph1='Extend Functionality. Extend Access. Increase Engagement.'
                        paragraph2 = {<span>Integrate your web experience or create a standalone app<br/>with either platform</span>}
                        icon={mobileIcon}
                        to='/mobileapps'
                    />        
                </Grid>                
            </Grid>
            <Grid item className={classes.service}>
                <Grid container direction='row' justifyContent='flex-start' alignItems='center'>
                    <Service
                        title='Custom Software Development'
                        paragraph1='Save Energy. Save Time. Save Money.'
                        paragraph2 = {
                            <span>Complete digital solutions from investigation to 
                            <span style={{...theme.typography.estimate, color: theme.palette.common.orange}}> Celebration</span></span>
                        }
                        icon={customSoftwareIcon}
                        to='/costumsoftware'
                    />        
                </Grid>                
            </Grid>
            <Grid item className={classes.service}>
                <Grid container direction='row' justifyContent='flex-end'>
                    <Service
                        title='Website Development'
                        paragraph1='Reach More. Discover More. Sell More.'
                        paragraph2 = {<span>Optimized for search engines.<br/>Build for speed</span>}
                        icon={websitesIcon}
                        to='/websites'
                    />        
                </Grid>                
            </Grid>
            
        </Grid>
    );
}

export default Services;