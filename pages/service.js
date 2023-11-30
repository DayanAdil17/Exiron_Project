import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// import Button from '@material-ui/core/Button';
// sections for this page
// 
import SectionContact from "/pages-sections/Components-Sections/Exiron-Sections/ContactSection.js"
import SectionFirst from "/pages-sections/Components-Sections/Exiron-Service-Sections/SectionFirst.js"
import SectionSecond from "/pages-sections/Components-Sections/Exiron-Service-Sections/SectionSecond.js"
import SectionFacilities from "/pages-sections/Components-Sections/Exiron-Service-Sections/SectionFacilities.js"
import SectionThird from "/pages-sections/Components-Sections/Exiron-Service-Sections/SectionThird.js"
import SectionFourth from "/pages-sections/Components-Sections/Exiron-Service-Sections/SectionFourth.js"

import ExironHeader from "/components/Header/ExironHeader.js";
import Footer from "/components/Footer/Footer.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function service(props) {
    const classes = useStyles();
    const { ...rest } = props;
  return (
    <div>
      <Header
        brand="/exironImg/logo-exiron.jpg"
        rightLinks={<ExironHeader />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image="/exironImg/exiron-header.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h3 className={classes.title} style = {{fontWeight:'lighter'}}>SERVICES</h3>                
                  
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionFirst />   
        <SectionSecond />
        <SectionFacilities />
        <SectionThird />
        <SectionFourth /> 
        {/* <SectionFifth />
        <SectionSixth />
        <SectionSeventh />
        <SectionEighth />   
        <SectionNineth />       */}
        <SectionContact /> 
        
      </div>
      <Footer/>
    </div>
  )
}
