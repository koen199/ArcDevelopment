import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import { Grid, IconButton, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { Link } from 'react-router-dom'
import analytics from '../assets/analytics.svg'
import ecommerce from '../assets/ecommerce.svg'
import outreach from '../assets/outreach.svg'



const Header=()=>{
    return(
        <Grid container direction='row' justifyContent='space-between' style={{paddingTop: '2em'}}>
            <Grid item xs>                
                <Grid container direction='row'>
                    <Grid item>
                        <IconButton component={Link} to='/mobileapps'>
                            <img src={backArrow}/>
                        </IconButton>
                    </Grid>
                    <Grid item style={{maxWidth: '40em', paddingTop: '0.3em'}} xs>
                        <Grid container direction='column'>
                            <Grid item>
                                <Typography variant='h4' paragraph>
                                    Website Development
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' paragraph>
                                    Having a website is a necessity in today's business world. They give you one central, public location to let people know who you are, what you do, and why you're the best at it.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' paragraph>
                                    From simply having your hours posted to having full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new costumers.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <IconButton component={Link} to='/revolution'>
                    <img src={forwardArrow} />
                </IconButton>
            </Grid>
        </Grid>
    )
}

const AnalyticsSection=()=>{
    return (
        <Grid container direction='row' style={{paddingTop: '3em'}} alignItems='center'>
            <Grid item style={{paddingLeft:'2em'}}>
                <Grid container direction='column' alignItems='center'>
                    <Grid item>
                        <Typography variant='h4'>
                            Analytics
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={analytics}/>
                    </Grid>       
                </Grid>
            </Grid>
            <Grid item style={{padding: '1em'}}>
                <Typography paragraph variant='body1' style={{maxWidth: '20em'}}>
                    Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                </Typography>
            </Grid>
        </Grid>
    )
}

const Ecommerce=()=>{
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('xs'))
    return(
        <Grid container direction='row' justifyContent={matchesSM ? 'center':'flex-end' } style={{height: '30em'}}>
            <Grid item >
                <Grid container direction='row' alignItems='center'>
                    <Grid item xs={ matchesSM ? '12': null}>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <Typography variant='h4'>E-Commerce</Typography>
                            </Grid>
                            <Grid item>
                                <img src={ecommerce}/>                            
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth: '30em', minWidth: '16em', padding: '1em'}}>
                        <Typography variant='body1' paragraph>
                            It's no secret that people like to shop online.
                        </Typography>
                        <Typography variant='body1' paragraph>
                            In 2017 over <span style={{fontWeight: 'bold'}}>$2.17 trillion</span> was spent in e-commerce, and it's time for your slice of the pie.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


const Outreach=()=>{
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('xs'))
    return(
        <Grid container direction='row' justifyContent={matchesSM ? 'center':'flex-start' } style={{height: '30em'}}>
            <Grid item>
                <Grid container direction='row' alignItems='center'>
                    <Grid item xs={ matchesSM ? '12': null}>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <Typography variant='h4'>Outreach</Typography>
                            </Grid>
                            <Grid item>
                                <img src={outreach}/>                            
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth: '30em', minWidth: '16em', padding: '1em'}}>
                        <Typography variant='body1' paragraph>
                            Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them before visiting in person.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}


const Websites=()=>{
    return (
        <Grid container direction='column'>
            <Header/>
            <AnalyticsSection/>            
            <Ecommerce/>
            <Outreach/>
        </Grid>
    )


}
export default Websites;