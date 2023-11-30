import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useInView} from 'react-intersection-observer';
import { Fade, Grid, Typography, Zoom } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import Carousel from "react-slick";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles({
    root: {
      maxWidth: 600,
      margin:'auto',
    },
    media: {
      height: 400,
      margin:'auto',
    },
  });
  const useStyles3 = makeStyles({
    imageCard: {
      position: 'relative',
      maxWidth: 500,
      margin: 'auto',
    },
    image: {
      width: '100%',
      height: 650,
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default function SectionFacilities() {
    const classes = useStyles();

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true
      };
  return (
        <div className={classes.sections} style = {{backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/logoExiron.webp')", backgroundSize:'cover', opacity: 0.9 }}>
            <Grid container direction='row' justifyContent = {'center'} alignItems='center' spacing={2}>
                <Grid item xs = {12}>
                    <Typography variant='h3' align='center' style = {{fontWeight: 'bold', color: "#FE852C", marginTop : '4vw', fontSize: 70}}>
                    Order Facility
                    </Typography>
                </Grid>
                <Grid item xs = {2}>

                </Grid>
                <Grid item xs = {8}>
                    {/* <Card style = {{width: 1200, height: 800, margin: 'auto', marginTop: '15vh'}}> */}
                    <Carousel {...settings} style = {{maxWidth: 1200, maxHeight: 800, margin: 'auto', marginTop: '8vh'}}>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/CNCTools.webp"
                            alt="First slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                CNC Tools
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/CNC.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />   
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                CNC
                            </Typography>
                        </div>                        
                    </div>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/cnc2.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />   
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                CNC
                            </Typography>
                        </div>                        
                    </div>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/CNC3.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />   
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                CNC
                            </Typography>
                        </div>                        
                    </div>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/CylinderGrinding.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />   
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                Cylinder Grinding
                            </Typography>
                        </div>                        
                    </div>
                    <div>
                        <img
                            src="/exironImg/OrderFacilities/BUBUT1.webp"
                            alt="Second slide"
                            className="slick-image"
                            style = {{maxHeight:'800px'}}
                        />   
                        <div className="slick-caption">
                            <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                Bubut
                            </Typography>
                        </div>                        
                    </div>
                    </Carousel>
                    {/* </Card> */}
                </Grid>
                <Grid item xs = {2}>
                    
                </Grid>
            </Grid>
        </div>       
   
  )
}
