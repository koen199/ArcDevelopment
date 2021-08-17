import { AppBar, Toolbar, useScrollTrigger, makeStyles, IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.svg"
import { Tabs, Tab, Menu, MenuItem, Fade } from "@material-ui/core";
import { Button, withStyles, List, ListItem } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { SwipeableDrawer} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import ListItemText from '@material-ui/core/ListItemText';




function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
    }

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles(theme=>({
    appBar:{
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin:{
        ...theme.mixins.toolbar, 
        marginBottom: "3em", 
        [theme.breakpoints.down('md')]:{
            marginBottom: "2em"
        }, 
        [theme.breakpoints.down('xs')]:{
            marginBottom: "1.25em"
        }

    }, 
    logo:{
        height:"8em", 
        "& Tab":{
            border: "1px solid red"
        },
        [theme.breakpoints.down('md')]:{
            height: "7em"
        }, 
        [theme.breakpoints.down('xs')]:{
            height: "5.5em"
        }
    }, 
    tabContainer:{
        marginLeft:'auto', 
        '& .Mui-selected':{
            fontWeight: '700', 
            textDecoration: 'none', 
            border: 'none'
        }
    }, 
    drawerIconContainer:{
        marginLeft: 'auto', 
        marginRight: '10px'
    }, 
    drawerIcon:{
        height: '50px',
        width: '50px'
    },
    drawerItemEstimate:{
        backgroundColor: theme.palette.common.orange
    },
    drawer:{
        backgroundColor:theme.palette.common.blue,
        color:'white', 
        ...theme.typography.tab, 
    },
    drawerList:{
        '& .Mui-selected':{
            fontWeight: '700'
        }
        
    },
    tab:{
        ...theme.typography.tab,       
        minWidth:10, 
        selected: 'none', 
        marginLeft:"25px"
    }, 
    indicator:{
        display: 'none'
    }, 
    flex:{
        border: '1px solid red'
    }, 
    button:{
        ...theme.typography.estimate,
        borderRadius:"15px", 
        marginLeft: "50px", 
        marginRight: "50px", 
        height: "45px", 
        color: "black", 
        backgroundColor: theme.palette.common.orange, 
        opacity:1, 
        '&:hover':{
            backgroundColor: theme.palette.secondary.light
        }
    }, 
    logoContainer:{
        padding: '0', 
        '&:hover':{
            backgroundColor: 'transparent'
        }
    }, 
    dropdownMenu:{
        zIndex:5000000
    }
}));

const StyledMenu = withStyles((theme)=>({
    paper: {
    //   border: '1px solid #d3d4d5',
        backgroundColor:theme.palette.primary.main, 
        '& .Mui-selected':{
            fontWeight: '700', 
        }, 
        borderRadius: '0px'
    }}
    ))((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        ...theme.typography.tab,
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
        },
        },
    },
}))(MenuItem); 


const Header=()=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    //const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const open = Boolean(anchorEl);

    const classes= useStyles();
    const handleChange=(event, newValue)=>{
        setValue(newValue);
    }
    const location = useLocation();
    useEffect(()=>{
        const routes = {
            '/': 0, 
            '/services': 1, 
            '/costumsoftware': 1, 
            '/mobileapps': 1, 
            '/websites': 1,
            '/revolution': 2, 
            '/about': 3, 
            '/contact': 4, 
            '/estimate': 5
        }
        const idx = routes[location.pathname];
        if(idx===undefined){
            console.error(`pathname ${location.pathname} has no index defined`);
            return;
        }
        setValue(idx);      
    }, [setValue, location.pathname]);

    const handleClose=()=>{
        setAnchorEl(null);
    };
    const handleOnMouseOver=(event)=>{
        setAnchorEl(event.currentTarget);
    }
    const options = [
        {name: 'Home', route: '/'},
        {name: 'Services', route: '/services'},
        {name: 'The Revolution', route: '/revolution'},
        {name: 'About Us', route: '/about'},
        {name: 'Contact Us', route: '/contact'}, 
        {name: 'Free Estimate', route: '/estimate'}
    ];
    const servicesOptions = [
        {name: 'Overview', route: '/services'},
        {name: 'Costum Software', route: '/costumsoftware'},
        {name: 'iOS/Android App development', route: '/mobileapps'},
        {name: 'Websites', route: '/websites'},
    ]

    const tabs = (
        <>                     
            <Tabs value={value} onChange={handleChange} classes={{root:classes.tabContainer, indicator:classes.indicator}} >
                {options.map(option=>(
                <Tab
                    key={option.route}
                    classes={option.name === 'Free Estimate' ? {root:classes.button}: {root: classes.tab}}
                    component={Link} 
                    to={option.route}
                    label={option.name}
                    onMouseOver={option.name==='Services'? handleOnMouseOver: null}
                />))}
            </Tabs>
            <StyledMenu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                MenuListProps={{ onMouseLeave: handleClose }}
                style={{zIndex:1302}}
            >
                {servicesOptions.map((item)=>(
                    <StyledMenuItem
                        key={item.route}
                        onClick={handleClose}
                        component={Link}
                        selected={location.pathname===item.route}
                        to={item.route}>{item.name}
                    </StyledMenuItem>
                ))}
            </StyledMenu>
        </>
    )
    const createListItem=(option, idx)=>{
        return(
            <ListItem selected={value===idx} divider button component={Link} to={option.route} classes={option.name==='Estimate'? {root:classes.drawerItemEstimate}: {}}>
                <ListItemText disableTypography>{option.name}</ListItemText>
            </ListItem>
        )
    }
    const drawer = (
        <>
        <SwipeableDrawer
          anchor='left'
          open={openDrawer}
          onClose={()=>{setOpenDrawer(false)}}
          onOpen={()=>{}}
          classes={{paper:classes.drawer}}
        >
        <div className={classes.toolbarMargin}/>

        <List onClick={()=>(setOpenDrawer(false))} disablePadding classes={{root: classes.drawerList}}>
            {options.map((option, idx)=>(createListItem(option, idx)))}
        </List>
        </SwipeableDrawer>
        <IconButton
            onClick={()=>{setOpenDrawer(!openDrawer)}}
            classes={{root:classes.drawerIconContainer}}
        >
            <MenuIcon classes={{root: classes.drawerIcon}}/>
        </IconButton>
        </>
    )
    
    return(
        <>
            <ElevationScroll>
                <AppBar color="primary" classes={{root:classes.appBar}}>
                    <Toolbar disableGutters>
                        <Button disableRipple component={Link} to='/' classes={{root:classes.logoContainer}}>
                            <img alt="company logo" src={logo} className={classes.logo}/>
                        </Button>   
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
}

export default Header;

