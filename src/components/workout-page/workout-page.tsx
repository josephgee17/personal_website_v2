import React, { useRef } from "react";
import Slider from "react-slick";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { Header } from "../shared/header/header";
import { RootState, Dispatch } from "../../store";
import styles from "./workout-page.module.css";

import * as WORKOUTINFO from "./workout-plan";

export const Workout: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<Dispatch>();
  const sliderRef = useRef<Slider>(null);
  const { WEEK_1, WEEK_2, WEEK_3, WEEK_4, WEEK_5, WEEK_6 } = useSelector(
    (state: RootState) => state.Workout
  );

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
      width: "60%",
      margin: "auto",
      color: "black",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  }));

  const classes = useStyles();

  Object.keys(WORKOUTINFO.TAB_INFO).forEach((workoutWeek, workoutWeekIndex) => {
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
            <h3 style={{ fontSize: "1.5em" }}>
              {WORKOUTINFO.TAB_INFO[workoutWeek].title}
            </h3>
          </div>
        }
      />
    );
  });

  /// //////

  const [currentProgressItem, setCurrentProgressItem] = React.useState(0);
  const [stepsCompleted, setStepsCompleted] = React.useState({
    sessionVersion: 1,
    WEEK_1: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
    WEEK_2: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
    WEEK_3: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
    WEEK_4: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
    WEEK_5: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
    WEEK_6: {
      SHOULDERS_AND_TRICEPS: [],
      BACK_AND_BICEPS: [],
      LEGS_AND_CALVES: [],
      CHEST_AND_TRICEPS: [],
      HAMSTRINGS_AND_BICEPS: [],
    },
  });

  const workoutWeeksLength = Object.keys(WORKOUTINFO.WORKOUT_PLAN);

  const workoutDaySlider: JSX.Element[][] = [];
  workoutWeeksLength.forEach((week, weekIndex) => {
    const workoutWeeklyTaskList = Object.keys(WORKOUTINFO.WORKOUT_PLAN[week]);
    const workoutWeekArray: JSX.Element[] = [];

    workoutWeeklyTaskList.forEach((workoutDay, workoutDayIndex) => {
      const workoutDailyTaskList = Object.keys(
        WORKOUTINFO.WORKOUT_PLAN[week][workoutDay]
      );
      const workoutDayArray: JSX.Element[] = [];

      workoutDailyTaskList.forEach((workoutTask, workoutTaskIndex) => {
        workoutDayArray.push(
          <div className={styles.workoutInfoContainer}>
            <h3 className={styles.workoutActivityInfo}>
              {WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].activity}
            </h3>
            <h3 className={styles.workoutActivityInfo}>
              {WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].sets}{" "}
              sets
            </h3>
            <h3 className={styles.workoutActivityInfo}>
              {WORKOUTINFO.WORKOUT_PLAN[week][workoutDay][workoutTask].reps}
            </h3>
            <TextField
              className={styles.workoutActivityInfo}
              size="small"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => {
                console.log(e.target.value);
                // if (week.includes())
              }}
            />
          </div>
        );
      });
      workoutWeekArray.push(
        <div className={styles.workoutDayContainer}>
          {workoutDayArray}
          <Button
            className={styles.dayCompleteButton}
            style={{ backgroundColor: "var(--olivine" }}
            onClick={() => {
              sliderRef.current?.slickNext();
              setCurrentProgressItem(currentProgressItem + 1);
              dispatch.Workout.createWorkoutDaySession();
            }}
          >
            Day Completed
          </Button>
        </div>
      );
    });
    workoutDaySlider.push(workoutWeekArray);
  });

  return (
    <div>
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
