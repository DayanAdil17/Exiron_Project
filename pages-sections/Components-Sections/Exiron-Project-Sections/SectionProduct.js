import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Cards from "/components/Card/Card.js";

import Carousel from "react-slick";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { Card } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function SectionProduct(props) {
    const classes = useStyles();
    const classes2 = useStyles2();

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
    <div>
        <div className={classes.sections} style={{backgroundColor:"#000000", backgroundColor:"#969595", backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1)), url('/exironImg/logoExiron.webp')", backgroundSize:'cover', opacity: 0.9}}>
            <div className={classes.container}>                
                <h2 className={classes.title} align = 'center' style={{fontWeight:'bold', color:"#FE852C", marginTop: '10vh', fontSize: 60}}>
                    Our Products
                </h2>
                <h3 className={classes.subtitle} align = 'center' style={{color:"#ffffff", fontSize : 30}}>
                    Unyielding Precision, Forged in Metal
                </h3>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} className={classes2.navWrapper}>
                        <Card style = {{marginTop: '4vh', maxWidth: '1100px'}}>
                            <Carousel {...settings}>
                                <div>
                                    <img
                                        src="/exironImg/newProduct.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                    />                                
                                </div>
                                <div>
                                    <img
                                        src="/exironImg/Resize_project.webp"
                                        alt="First slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                    />
                                    {/* <div className="slick-caption">
                                        <h4>
                                        <LocationOn className="slick-icons" />
                                            Yellowstone National Park, United States
                                        </h4>
                                    </div> */}
                                </div>
                                <div>
                                    <img
                                        src="/exironImg/Resize_project2.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                    />                                
                                </div>
                                <div>
                                    <img
                                        src="/exironImg/Resize_project3.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                    />                                
                                </div>
                                <div>
                                    <img
                                        src="/exironImg/Resize_project4.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                    />                                
                                </div>
                                {/* <div style = {{backgroundSize:'contain'}}>
                                    <img
                                        src="/exironImg/Resize_project5.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}
                                        style = {{maxHeight:"407px"}}
                                    />
                                </div> */}
                                <div>
                                    <img
                                        src="/exironImg/Resize_project6.webp"
                                        alt="Second slide"
                                        className="slick-image"
                                        style = {{maxHeight:'700px', maxWidth: '1100px'}}                                        
                                    />
                                </div>
                            </Carousel>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    </div>
  )
}
