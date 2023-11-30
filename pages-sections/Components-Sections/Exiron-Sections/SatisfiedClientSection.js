import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 600,
      margin:'auto',
    },
    media: {
      height: 340,
      margin:'auto',
    },
  });

export default function SatisfiedClientSection(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
  return (
    <div>        
        <div className={classes.sections} >
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2 className={classes.title} style={{fontWeight:'lighter', marginBottom:'14vw'}}>
                        From Our Satisfied Clients
                    </h2>                            
                </div>

                <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {4} md = {4}>
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients. People love 
                            recommendations so feedback from others who've tried it is invaluable.
                        </Typography>
                        <Typography style = {{marginTop:'5vw', fontWeight:'bold', fontSize:"18px"}}>
                           - Bass Co.
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients.
                            <br />
                            <br />
                            Pepole love recommendations so feedback from others who've tried it is invaluable.
                        </Typography>
                        <Typography style = {{marginTop:'2vw', fontWeight:'bold', fontSize:"18px"}}>
                           - Mitcheur Law
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients.
                            Pepole love recommendations so feedback from others who've tried it is invaluable.
                            <br />
                            <br />
                            Add them here!
                        </Typography>
                        <Typography style = {{marginTop:'2vw', fontWeight:'bold', fontSize:"18px"}}>
                            - Studio Rallia
                        </Typography>
                    </GridItem>                                                
                </GridContainer>                
                
                {/* <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {4} md = {4}>
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients. People love 
                            recommendations so feedback from others who've tried it is invaluable.
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients.
                            <br />
                            <br />
                            Pepole love recommendations so feedback from others who've tried it is invaluable.
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginRight:'5vw'}}>
                            Boost your product and service's credibility by adding testimonials from your clients.
                            Pepole love recommendations so feedback from others who've tried it is invaluable.
                            <br />
                            <br />
                            Add them here!
                        </Typography>
                    </GridItem>                                                
                </GridContainer>
                <GridContainer justify = "center" spacing = "1">
                    <GridItem xs = {12} sm = {4} md = {4}>
                        <Typography style = {{marginTop:'2vw', fontWeight:'bold', fontSize:"18px"}}>
                           - Bass Co.
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginTop:'2vw', fontWeight:'bold', fontSize:"18px"}}>
                           - Mitcheur Law
                        </Typography>
                    </GridItem>
                    <GridItem xs = {12} sm = {4} md = {4}>                        
                        <Typography style = {{marginTop:'2vw', fontWeight:'bold', fontSize:"18px"}}>
                            - Studio Rallia
                        </Typography>
                    </GridItem>                                                
                </GridContainer> */}
            </div>
        </div>       
    </div>
  )
}
