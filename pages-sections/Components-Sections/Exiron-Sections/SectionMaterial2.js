import React, { useState } from 'react'
import {useInView} from 'react-intersection-observer';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grow, Slide } from '@material-ui/core';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 300,
      margin:'auto',
    },
    media: {
      height: 200,
      margin:'auto',
    },
  });


export default function MaterialSection(props) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.1 });
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };    

  return (
    <div style = {{backgroundColor:"#000000"}}>                
        <div className={classes.sections} ref = {ref}>
            <div className={classes.container}>                
              <GridContainer justify = "center">
                  <GridItem xs = {12} sm = {4} md = {4}>
                    <div className={classes.container}>
                      <div className={classes.title} >
                        <Grow in={inView} timeout={500}>
                          <h2 className={classes.title} style={{fontWeight:'lighter', marginBottom:'2vw', color:"#ffffff"}}>
                            Material
                          </h2>   
                        </Grow>                         
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs = {12} sm = {8} md = {8}>
                      <div className={classes.title} >
                        <Grow in={inView} timeout={500}>
                          <h4 className={classes.subtitle} style = {{marginRight:'10vw', color:"#ffffff"}}>
                              Depending on the customers industry, Exiron will find best material that will suit your specific need.
                          </h4>
                        </Grow>
                      </div>
                  </GridItem>
                                   
              </GridContainer>
            </div>
        </div>           
    </div>
  )
}
