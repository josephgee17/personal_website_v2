import React, { useRef } from "react";
import Slider from "react-slick";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import styles from "./workout-page.module.css";
import { Header } from "../shared/header/header";
import * as WORKOUTINFO from "./workout-plan";

export const Workout: React.FC = (): JSX.Element => {
  const sliderRef= useRef<Slider>(null);

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

  Object.keys(WORKOUTINFO.TAB_INFO).forEach(
    (workoutWeek, workoutWeekIndex) => {
      tabsArray.push(
        <Tab
          onClick={() => setValue(workoutWeekIndex)}
          className={`${
            value === workoutWeekIndex ? classes.selectedTab : classes.tabDefault
          }`}
          label={
            <div
              className={`${styles.workoutPanel} ${
                value === workoutWeekIndex ? classes.selectedPanel : null
              }`}
              style={{
                textAlign: "center",
                backgroundImage: `-webkit-linear-gradient(top, #${WORKOUTINFO.TAB_INFO[workoutWeek].topColor} 50%, #${WORKOUTINFO.TAB_INFO[workoutWeek].bottomColor} 50%)`,
              }}
            >
              <img
                src={WORKOUTINFO.TAB_INFO[workoutWeek].image}
                alt={`tab ${workoutWeekIndex}`}
                className={styles.tabImage}
              />
              <h3 style={{fontSize: '1.5em'}}>{WORKOUTINFO.TAB_INFO[workoutWeek].title}</h3>
            </div>
          }
        />
      );
    }
  );

  /// //////

  const workoutPlanSlides: JSX.Element[] = []

  const [currentProgressItem, setCurrentProgressItem] = React.useState(0)
  const [stepsCompleted, setStepsCompleted] = React.useState([] as string[])

  const workoutWeeksLength = Object.keys(WORKOUTINFO.WORKOUT_PLAN)

  const workoutDaySlider: JSX.Element[][] = []
  workoutWeeksLength.forEach((week, weekIndex) => {
    const workoutWeeklyTaskList = Object.keys(WORKOUTINFO.WORKOUT_PLAN[week])
    const workoutWeekArray: JSX.Element[] = []

    workoutWeeklyTaskList.forEach((workoutDay, workoutDayIndex) => {
      const workoutDailyTaskList = Object.keys(WORKOUTINFO.WORKOUT_PLAN[week][workoutDay])
      const workoutDayArray: JSX.Element[] = []

      workoutDailyTaskList.forEach((workoutTask, workoutTaskIndex) => {
        workoutDayArray.push(
          <div className={styles.workoutActivityInfo}>
            <h3>{WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].activity} </h3>
            <h3>{WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].sets} sets </h3>
            <h3>{WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].reps} </h3>
          </div>
          
        )
      })
      workoutWeekArray.push(
        <div> 
          {workoutDayArray} 
          <Button
              className={styles.dayCompleteButton}
              onClick={() => {
                sliderRef.current?.slickNext()
              }}
            >
              Day Completed
          </Button>
        </div>
      )
    })
    workoutDaySlider.push(workoutWeekArray)
  })

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
            <Slider
              arrows={false}
              ref={sliderRef}
              initialSlide={currentProgressItem}
              draggable={false}
            >
              {workoutDaySlider[0]}
            </Slider>
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
        <TabPanel value={value} index={5}>
            <h1>6</h1>
        </TabPanel>
      </div>
    </div>
  );
};
