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
import Parallax2 from "/components/Parallax/Parallax2.js";
// import Button from '@material-ui/core/Button';
// sections for this page
// 
import SectionHero from "/pages-sections/Components-Sections/Exiron-Sections/HeroSections.js"
// import SectionService from "/pages-sections/Components-Sections/Exiron-Sections/ServiceSection.js"
import SectionService from "/pages-sections/Components-Sections/Exiron-Sections/ServiceSection2.js"
import SectionMaterial from "/pages-sections/Components-Sections/Exiron-Sections/MaterialSection.js"
// import SectionMaterial from "/pages-sections/Components-Sections/Exiron-Sections/SectionMaterial2.js"
import SectionProducts from "/pages-sections/Components-Sections/Exiron-Sections/ProductSection.js"
// import SectionContactUs from "/pages-sections/Components-Sections/Exiron-Sections/ContactUsSection.js"
import SectionContactUs from "/pages-sections/Components-Sections/Exiron-Sections/AboutSection.js"
import SectionSatisfiedClient from "/pages-sections/Components-Sections/Exiron-Sections/SatisfiedClientSection.js"
import SectionContact from "/pages-sections/Components-Sections/Exiron-Sections/ContactSection.js"
import Footer from "/components/Footer/Footer.js";

import ExironHeader from "/components/Header/ExironHeader.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const handleChangePage = () => {
    window.location.href = "/contact_us"
  }
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
                <h3 className={classes.title} style = {{fontWeight:'lighter'}}>METAL CASTING AND MANUFACTURING SERVICES</h3>
                <h2 className={classes.subtitle} style = {{fontWeight:'lighter'}}>Your Expert in Iron</h2>
                  <Button style={{backgroundColor:"#ffffff", color:"#222222" }} onClick={handleChangePage}>
                    GET IN TOUCH
                  </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <Parallax2 videoSrc="/exironImg/Rock-Paper-Scissors.mp4">
      <div style={{ height: '100vh' }}>
        <h1>Example text</h1>
      </div>
    </Parallax2> */}
      <div className={classNames(classes.main)}>
        <SectionHero />   
        <SectionService />
        <SectionMaterial />
        <SectionProducts />
        <SectionContactUs />             
        <SectionContact />         
      </div>
      <Footer/>
    </div>
  );
}
