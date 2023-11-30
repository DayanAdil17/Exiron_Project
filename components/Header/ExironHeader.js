import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons

// core components
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);


export default function ExironHeader(props) {
    const classes = useStyles();
  return (
    <div>
        <List className={classes.list}>      
            <ListItem className={classes.listItem}>
                <Button
                href="/components"
                color="transparent"
                // target="_blank"
                className={classes.navLink}
                >
                  <Typography style = {{fontWeight: 1000, color:'#000000'}}>
                      HOME
                  </Typography>
                </Button>
            </ListItem>  
            <ListItem className={classes.listItem}>
                <Button
                href="/about_us"
                color="transparent"
                // target="_blank"
                className={classes.navLink}
                >
                  <Typography style = {{fontWeight: 1000, color:'#000000'}}>
                      ABOUT US
                  </Typography>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                href="/project"
                color="transparent"
                // target="_blank"
                className={classes.navLink}
                >
                  <Typography style = {{fontWeight: 1000, color:'#000000'}}>
                      PRODUCTS
                  </Typography>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                href="/service"
                color="transparent"
                // target="_blank"
                className={classes.navLink}
                >
                  <Typography style = {{fontWeight: 1000, color:'#000000'}}>
                      OUR SERVICE
                  </Typography>
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                href="/contact_us"
                color="transparent"
                // target="_blank"
                className={classes.navLink}
                >
                 <Typography style = {{fontWeight: 1000, color:'#000000'}}>
                      CONTACT
                  </Typography>
                </Button>
            </ListItem>    
        </List>
    </div>
  )
}
