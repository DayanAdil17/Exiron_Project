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
import Footer from "/components/Footer/Footer.js";
import SectionMission from "/pages-sections/Components-Sections/Exiron-About_Us-Sections/SectionMission.js"
import SectionMeetOurTeam from "/pages-sections/Components-Sections/Exiron-About_Us-Sections/SectionMeetOurTeam.js"
import SectionVideo from "/pages-sections/Components-Sections/Exiron-About_Us-Sections/SectionVideo.js"

import ExironHeader from "/components/Header/ExironHeader.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function about_us(props) {
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
                <h3 className={classes.title} style = {{fontWeight:'lighter'}}>About Us</h3>                                  
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>        
        <SectionMission />
        <SectionVideo />
        <SectionMeetOurTeam />           
        <SectionContact />         
      </div>
      <Footer />
    </div>
  )
}
