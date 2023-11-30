import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";


const useStyles2 = makeStyles({
    root: {
      maxWidth: 400,
      height: 350
    },
    media: {
      height: 240,
    },
  });
const useStyles = makeStyles(styles);
const useStyles3 = makeStyles(styles2);

export default function AboutSection(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
  return (
    <div>
        {/* <div className={classes.sections} style = {{backgroundColor:"#f0cc8b"}}> */}
        <div className={classes.sections} style = {{backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/mining-industry.jpg')", backgroundSize:'cover', opacity: 0.9 }}>
        {/* <div className={classes.sections} style = {{backgroundImage: "-webkit-linear-gradient(90deg,#969595 20%, #ffffff 50%, #969595 0%)"}}> */}
            <div className={classes.container}>                
                <GridContainer justify = "center" align = "flex-start" spacing = "1">
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <Typography variant='h4' align = 'left' style = {{color :'#FE852C', fontWeight:'bold', fontSize:'70px', marginTop: '25vh'}}>
                            OUR CLIENTS 
                        </Typography>
                        {/* <Typography variant='h4' align = 'left' style = {{color :'#ffffff', fontWeight:'bold', fontSize:'30px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
                        <br />
                        <Typography variant='h4' align = 'left' style = {{color :'#ffffff', fontWeight:'bold', fontSize:'30px'}}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </Typography> */}
                    </GridItem>                    
                    <GridItem xs = {12} sm = {6} md = {6}>                        
                        <GridContainer justify = "flex-start" align="center">
                            <GridItem xs = {12} md = {6}>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', marginTop:'10vw', fontWeight:'900', fontSize:'100px'}}>
                                    2010
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', fontWeight:'bold', fontSize:'40px'}}>
                                    ESTABLISHED
                                </Typography>
                                <div style = {{backgroundColor: '#FE852C', width : '250px', minHeight:'1vh'}}></div>
                            </GridItem>
                            <GridItem xs = {12} md = {6}>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', marginTop:'10vw', fontWeight:'900', fontSize:'100px'}}>
                                    100+
                                </Typography>
                                <Typography variant='h4' align = 'center' style = {{color :'#ffffff', fontWeight:'bold', fontSize:'40px'}}>
                                    PROJECTS
                                </Typography>
                                <div style = {{backgroundColor: '#FE852C', width : '250px', minHeight:'1vh'}}></div>
                            </GridItem>
                        </GridContainer>
                           
                    </GridItem>                    
                </GridContainer>
            </div>  
            <div className={classes.container} style = {{backgroundColor:"#ffffff", maxWidth: "unset", minHeight:'20vh', marginTop:'10px'}}>
                <GridContainer justify = "center" align = "center" spacing = "1">
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/astra-eng.jpg' style = {{marginTop:"3vh", width: '160px', height:'90px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/federal.jpg' style = {{marginTop:"4vh", width: '160px', height:'100px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/indokarlo.jpeg' style = {{marginTop:"4vh", width: '180px', height:'70px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/south-pacific-viscose.jpeg' style = {{marginTop:"4vh", width: '160px', height:'80px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/astra-winteq2.png' style = {{marginTop:"4vh", width: '190px', height:'100px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/PALYJA.webp' style = {{marginTop:"4vh", width: '170px', height:'90px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/Preformed.png' style = {{marginTop:"4vh", width: '135px', height:'80px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/PT_KOMATSU_UNDERCARRIAGE_INDONESIA.webp' style = {{marginTop:"4vh", width: '170px', height:'90px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/PT_SEMEN_INDONESIA.webp' style = {{marginTop:"4vh", width: '170px', height:'90px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/PT_SEMEN_PADANG.webp' style = {{marginTop:"4vh", width: '120px', height:'90px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/PT_TORISHIMA_GUNA_INDONESIA.webp' style = {{marginTop:"4vh", width: '240px', height:'70px'}} />
                    </GridItem>
                    <GridItem xs = {12} sm = {3}>
                        <img src = '/exironImg/customer/tonasa.webp' style = {{marginTop:"4vh", width: '120px', height:'90px'}} />
                    </GridItem>
                </GridContainer>
            </div>          
        </div>       
        
    </div>
  )
}
