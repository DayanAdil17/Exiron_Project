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

export default function SectionProducts() {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [ref, inView] = useInView({ threshold: 0.5 });
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
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
    <div ref = {ref}>
        <div className={classes.sections} style={{backgroundColor:'#000000', padding:'15px', backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/logoExiron.webp')", backgroundSize:'cover', opacity: 0.9}}>
            <Grid container direction = 'row' alignItems='flex-start' justifyContent = 'center' spacing = {1} style = {{marginTop:'20vh'}}>
                <Grid item xs = {12} md = {5}>
                    <Typography variant = 'h4' style = {{fontWeight: "bold", color: "#FE852C", fontSize: 50, marginLeft: '2vw', marginTop: 200}}>
                        PT. Exiron Baja Pratama has produced various kinds of casting material specifications consisting of
                    </Typography>
                </Grid>
                <Grid item xs = {12} md = {7}>
                    <Card style = {{margin: 'auto', maxWidth: '1000px'}}>
                        <Carousel {...settings} >
                            <div>
                                <img
                                    src="/exironImg/revisi1.webp"
                                    alt="First slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        LIFTER 1, 2 HOLES - CEMENT INDUSTRY
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi2.webp"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        CETAKAN GENTENG - ROOFTILE INDUSTRY
                                    </Typography>
                                </div>                        
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi3.webp"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        LIFTER POS 4 ZONE C FMX302 (KN - 2654) - CEMENT INDUSTRY
                                    </Typography>
                                </div>                        
                            </div>
                            <div>
                                <img
                                    src="/exironImg/meja_bawah.webp"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        MEJA BAWAH DOUBLE ACTION - FOOD INDUSTRY
                                    </Typography>
                                </div>                        
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi8.png"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        PLATE MOUNTING - AUTOMOTIVE INDUSTRY
                                    </Typography>
                                </div>                        
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi6(update).webp"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        BUCKET TEETH - MINING INDUSTRY
                                    </Typography>
                                </div>                      
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi5(update).webp"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        LINING PLATE XK-398 - CEMENT INDUSTRY
                                    </Typography>
                                </div>                      
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi9.png"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        ASSY POMPA IRIGASI 4 INCH - PUMP INDUSTRY
                                    </Typography>
                                </div>                      
                            </div>
                            <div>
                                <img
                                    src="/exironImg/revisi10.png"
                                    alt="Second slide"
                                    className="slick-image"
                                    style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                />   
                                <div className="slick-caption" style = {{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
                                    <Typography variant = 'h4' style = {{fontWeight: 'bold'}}>
                                        FLASK UNIT FRAME PIANO - MUSIC INDUSTRY
                                    </Typography>
                                </div>                      
                            </div>
                        </Carousel>
                    </Card>
                </Grid>
            </Grid>
        </div>       
    </div>
  )
}
