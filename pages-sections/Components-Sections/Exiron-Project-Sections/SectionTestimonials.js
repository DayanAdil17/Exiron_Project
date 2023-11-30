import React from 'react'
import {useInView} from 'react-intersection-observer';
import { Fade, Zoom } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import styles2 from "/styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

function SectionTestimonials(props) {
    const [ref, inView] = useInView({ threshold: 0.1 });
    const classes = useStyles();
    const classes2 = useStyles2();
  return (
    <div ref={ref}>
         <div className={classes.sections} >
            <div className={classes.container}>
                <div className={classes.title}>
                <Zoom in={inView} timeout={200}>
                    <h2 className={classes.title} style={{fontWeight:'lighter', marginBottom:'5vw'}}>
                        Testimonials From Our Satisfied Clients
                    </h2>
                </Zoom>
                </div>       
                {/* <GridContainer justify="center">
                    <GridItem xs={12} sm={6} md={4}>
                        <Card>
                            <form className={classes2.form}>
                                <CardHeader className={classes2.cardHeader} style={{height : 125, backgroundColor:"#4f4e4c", color:"#ffffff"}}>                                
                                    <div className={classes.socialLine}>
                                        <h4>Bass Co.</h4>
                                        <h4>- March 05, 2023 -</h4>
                                    </div>
                                </CardHeader>
                                <p className={classes2.divider}>- Testified -</p>
                                <CardBody>
                                    <h4>
                                        Boost your product and service's credibility by adding testimonials from your clients. People love 
                                        recommendations so feedback from others who've tried it is invaluable.
                                    </h4>
                                </CardBody>                                
                            </form>
                        </Card>
                    </GridItem>                    
                </GridContainer>          */}
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    <Zoom in={inView} timeout={300} style={{transitionDelay: inView ? '200ms' : '200ms'}}>
                        <Card style = {{minHeight:'28vw'}}>
                        <form className={classes2.form}>
                            <CardHeader className={classes2.cardHeader} style={{height : 125, backgroundImage:"url('/exironImg/customer/astra-eng.jpg')", backgroundSize:'cover', color:"#ffffff"}}>
                                <div className={classes2.socialLine}>
                                
                                </div>
                            </CardHeader>
                            <p className={classes2.divider}>- Testified -</p>
                            <CardBody>
                                <h4>
                                We've been sourcing metal castings from Exiron for years, and their commitment to quality is unmatched. 
                                The precision and durability of their products have significantly enhanced our engineering projects.
                                <br />
                                <br />
                                Their casting process is a perfect blend of art and science, resulting in components that never fail to impress.
                                </h4>
                            </CardBody>                           
                        </form>
                        </Card>
                    </Zoom>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                    <Zoom in={inView} timeout={300} style={{transitionDelay: inView ? '300ms' : '300ms'}}>
                        <Card style = {{minHeight:'28vw'}}>
                            <form className={classes2.form}>
                                <CardHeader className={classes2.cardHeader} style={{height : 125, backgroundImage:"url('/exironImg/customer/south-pacific-viscose.jpeg')", backgroundSize:'contain', color:"#ffffff", backgroundRepeat:'no-repeat'}}>
                                <div className={classes2.socialLine}>
                                    
                                </div>
                                </CardHeader>
                                <p className={classes2.divider}>- Testified -</p>
                                <CardBody>
                                    <h4>
                                        Working with Exiron has been a game-changer for our artistic designs. 
                                        The metal castings they provide are not just durable but also beautifully crafted.
                                        <br />
                                        <br />
                                        Their team understands our vision and ensures each piece complements our designs perfectly. 
                                        We've received rave reviews from our customers, and we owe a lot of that to the quality of these castings.
                                    </h4>
                                </CardBody>                           
                            </form>
                        </Card>
                    </Zoom>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={4}>
                    <Zoom in={inView} timeout={300} style={{transitionDelay: inView ? '400ms' : '400ms'}}>
                        <Card style = {{minHeight:'28vw'}}>
                            <form className={classes2.form}>
                                <CardHeader className={classes2.cardHeader}style={{height : 125, backgroundImage:"url('/exironImg/customer/indokarlo.jpeg')", backgroundSize:'contain', color:"#ffffff", backgroundRepeat:'no-repeat'}}>
                                <div className={classes2.socialLine}>
                                </div>
                                </CardHeader>
                                <p className={classes2.divider}>- Testified -</p>
                                <CardBody>
                                    <h4>
                                        Reliability is key in our industry, and that's exactly what we get from Exiron's metal castings. 
                                        We rely on their products for critical components in our machinery. 
                                        The durability and precision of their castings have improved our operational efficiency and minimized downtime.
                                        <br />
                                        <br />
                                        They truly deliver on their promise of strength and resilience.
                                    </h4>
                                </CardBody>                           
                            </form>
                        </Card>
                    </Zoom>
                    </GridItem>                    
                </GridContainer>
            </div>
        </div>     
    </div>
  )
}

export default SectionTestimonials