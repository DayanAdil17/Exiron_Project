import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import styles3 from "/styles/jss/nextjs-material-kit/pages/profilePage.js";


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
const useStyles4 = makeStyles(styles3);

export default function ContactSection(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const classes3 = useStyles3();
    const classes4 = useStyles4();
  return (
    <div>        
        <div className={classes.sections} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/exironImg/contact.webp')", backgroundRepeat:'no-repeat', backgroundSize:'cover' }}>           
            <div
            className={classes3.navigation}
            
            >
                <GridContainer justify = "center" align='flex-start' spacing = "1" style={{marginBottom:"11vw"}}>
                    <GridItem xs = {12} sm = {6}>
                        <div className={classes.container}>                                
                            <h2 className={classes.title} 
                            style={{fontWeight:'bold', color:'#fff', marginLeft:'11vw', marginTop:'10vw'}}
                            >
                                EXIRON
                            </h2>                                                       
                        </div>
                    </GridItem>
                    <GridItem xs = {12} sm = {6}>
                        
                    </GridItem>
                </GridContainer>
                <GridContainer justify = "center" align='center' spacing = "1">
                    <GridItem xs = {12} sm = {4}>
                        <Typography variant = 'h5' align = "left" style = {{fontWeight:"bold", color:"#ffffff", marginLeft:'12.5vw'}}>
                            Bandung
                        </Typography>
                        <br/>
                        <br/>
                        <Typography align = "left" style ={{color:"#ffffff", marginLeft:'12.5vw', fontWeight:'bold'}}>
                            Jalan Raya Rancaekek - Malajaya Km. 2 <br/>
                            Kel. Rancaekek Wetan <br/>
                            Kec. Rancaekek Kab. Bandung, Jawa Barat 40394
                            <br/>
                            <br/>
                            Tel.(022) 7798365 <br/>
                            Email:
                            <br/>
                            marketing@exiron.co.id
                            <br/>
                            exironbajapratama@exiron.co.id                          
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4}>
                        <Typography align = "left" variant = 'h5' style = {{fontWeight:'bold', color:"#ffffff", marginLeft:'12.5vw'}}>
                            Office hours
                        </Typography>
                        <br/>
                        <br/>
                        <Typography align = "left" style ={{color:"#ffffff", marginLeft:'12.5vw', fontWeight:'bold'}}>
                            Senin - Kamis <br/>
                            8:00 s/d 16:15 
                            <br/>
                            <br/>
                            Jumat <br/>
                            08.00 s/d 16.30
                            <br/>
                            <br/>
                            Weekends by appointment
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4}>                                                        
                        <Typography variant = 'h5' align = "left" style = {{fontWeight:'bold', color:"#ffffff", marginLeft:'12.5vw'}}>
                            Stay connected
                        </Typography>
                        <Button justIcon link className={classes.margin5} style = {{color : "#ffffff"}}>
                            <i className={"fab fa-facebook"} />
                        </Button>
                        <Button justIcon link className={classes.margin5} style = {{color : "#ffffff"}}>
                            <i className={"fab fa-twitter"} />
                        </Button>
                        <Button justIcon link className={classes.margin5} style = {{color : "#ffffff"}}>
                            <i className={"fab fa-instagram"} />
                        </Button>                                                           
                    </GridItem>
                </GridContainer>
            </div>
        </div>                      
    </div>
  )
}
