import React, { useState } from 'react';
import {useInView} from 'react-intersection-observer';
import { Fade, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);
export default function SectionMission() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.1 });
    
  return (
    <div ref = {ref}>
        <div className={classes.sections} style = {{backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/exiron-team.webp')", backgroundSize:'cover', opacity: 0.9 }}>
            <div className={classes.container} style={{marginTop:"10vh"}}>                
                <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <Zoom in={inView} timeout={200}>                        
                            <Card style = {{minHeight:'70vh'}}>
                                <form className={classes2.form}>
                                    <CardHeader className={classes2.cardHeader} style={{height : 125, backgroundColor:"#4f4e4c", color:"#ffffff"}}>
                                    <div className={classes2.socialLine}>
                                        <h4 style = {{fontSize:30}}>
                                            Our Vision
                                        </h4>                               
                                    </div>
                                    </CardHeader>
                                    <p className={classes2.divider} style = {{color:"#ffffff"}}>-</p>
                                    <CardBody>
                                        <GridContainer direction='row' alignItems='center' justifyContent= 'center' style={{ height: "100%" }}>
                                            <GridItem xs = {12}>
                                                <h4 style={{textAlign:"center", marginTop:'15vh', fontWeight:'bold'}}>
                                                    To become the most eminent national industry in metal casting by creating high-quality, dependable casting products.
                                                </h4>
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>                           
                                </form>
                            </Card>
                        </Zoom>
                    </GridItem>         
                    <GridItem xs = {12} sm = {6} md = {6}>
                        <Zoom in={inView} timeout={200}>
                            <Card style = {{minHeight:'70vh'}}>
                                <form className={classes2.form}>
                                    <CardHeader className={classes2.cardHeader} style={{height : 125, backgroundColor:"#4f4e4c", color:"#ffffff"}}>
                                    <div className={classes2.socialLine}>
                                        <h4 style = {{fontSize:30}}>
                                            Our Mission
                                        </h4>                               
                                    </div>
                                    </CardHeader>
                                    <p className={classes2.divider} style = {{color:"#ffffff"}}>-</p>
                                    <CardBody>
                                        <h4 style={{textAlign:"center", fontWeight:'bold'}}>
                                            Improve process quality actively in order to attain product quality that meets customer expectations.
                                        </h4>
                                        <h4 style={{textAlign:"center"}}>
                                            - Establishing a reputable and trusted business image as well as proficiency in creating quality casting products
                                        </h4>     
                                        <h4 style={{textAlign:"center"}}>
                                            - The manifestation of a corporation that provides excellent customer service
                                        </h4>
                                        <h4 style={{textAlign:"center"}}>
                                            - The development of a large business network through the use of technology as a strategy of market expansion
                                        </h4>
                                        <h4 style={{textAlign:"center"}}>
                                            - Achieving maximum profitability and stakeholder confidence in the organization
                                        </h4>
                                    </CardBody>                           
                                </form>
                            </Card>
                        </Zoom>
                    </GridItem>  
                    <GridItem xs = {12} sm = {6} md = {6}>                        
                        <div>
                            <Zoom in={inView} timeout={200}>
                                <Typography variant = 'h4' align = "center" style= {{fontStyle:'italic', fontWeight: 'bold', color: '#FE852C'}}>
                                We Provide International Standard, High-Quality Products.
                                </Typography>
                            </Zoom>
                        </div>
                    </GridItem>                             
                </GridContainer>
            </div>
        </div>    
    </div>
  )
}
