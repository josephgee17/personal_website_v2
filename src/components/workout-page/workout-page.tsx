import React from "react";
import Slider from "react-slick";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import styles from "./workout-page.module.css";
import { Header } from "../shared/header/header";
import * as WORKOUTINFO from "./workout-plan";

export const Workout: React.FC = (): JSX.Element => {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tabpanel-${index}`}
      >
        {value === index && (
          <Box p={3}>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [value, setValue] = React.useState(0);
  const tabsArray: JSX.Element[] = [];

  const useStyles = makeStyles(() => ({
    selectedTab: {
      opacity: 1,
      padding: 0,
    },
    selectedPanel: {
      height: "19em",
      boxShadow: "0 0 10px 3px rgba(0, 0, 0, .6)",
    },
    tabDefault: {
      opacity: 1,
      padding: 0,
    },
    root: {
      width: '60%',
      margin: 'auto',
      color: "black",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  }));

  const classes = useStyles();

  Object.keys(WORKOUTINFO.WORKOUT_PLAN.WEEK_1).forEach(
    (workoutDay, workoutDayIndex) => {
      tabsArray.push(
        <Tab
          onClick={() => setValue(workoutDayIndex)}
          className={`${
            value === workoutDayIndex ? classes.selectedTab : classes.tabDefault
          }`}
          label={
            <div
              className={`${styles.workoutPanel} ${
                value === workoutDayIndex ? classes.selectedPanel : null
              }`}
              style={{
                textAlign: "center",
                backgroundImage: `-webkit-linear-gradient(top, #${WORKOUTINFO.TAB_INFO[workoutDay].topColor} 50%, #${WORKOUTINFO.TAB_INFO[workoutDay].bottomColor} 50%)`,
              }}
            >
              <img
                src={WORKOUTINFO.TAB_INFO[workoutDay].image}
                alt={`tab ${workoutDayIndex}`}
                className={styles.tabImage}
              />
              <h3 style={{fontSize: '1.5em'}}>{WORKOUTINFO.TAB_INFO[workoutDay].title}</h3>
            </div>
          }
        />
      );
    }
  );

  return (
    <div >
      <Header />
      <div className={styles.workoutPage}>
        <AppBar
          className={classes.root}
          position="static"
          data-testid="workout-tabs"
        >
          <Slider
            centerMode
            infinite
            slidesToShow={3}
            centerPadding="60px"
            focusOnSelect
          >
            {tabsArray}
          </Slider>
        </AppBar>
        <TabPanel value={value} index={0}>
            <h1>1</h1>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <h1>2</h1>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <h1>3</h1>
        </TabPanel>
        <TabPanel value={value} index={3}>
            <h1>4</h1>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <h1>5</h1>
        </TabPanel>
      </div>
    </div>
  );
};
