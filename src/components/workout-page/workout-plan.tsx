import { IMGS } from "../images";

const TAB_COLORS = {
  pastelYellow: "fed672",
  lightPastelYellow: "ffeec9",
  pastelBlue: "215477",
  navyBlue: "043551",
  lightGray: "f5f6f9",
  lightBlue: "00afd6",
};

const TAB_INFO: Record<string, WorkoutTabFields> = {
  WEEK_1: {
    title: "WEEK_1",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  WEEK_2: {
    title: "WEEK_2",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  WEEK_3: {
    title: "WEEK_3",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  WEEK_4: {
    title: "WEEK_4",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  WEEK_5: {
    title: "WEEK_5",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  WEEK_6: {
    title: "WEEK_6",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
};

const WORKOUT_PLAN: Record<string, Record<string, any>> = {
  WEEK_1: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  WEEK_2: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  WEEK_3: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  WEEK_4: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  WEEK_5: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  WEEK_6: {
    SHOULDERS_AND_TRICEPS: {
      SEATED_DUMMBELL_PRESS: {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      UPRIGHT_ROWS: {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      STANDING_OVERHEAD_PRESS: {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      BENT_OVER_REVERSE_CABLE_FLIES: {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      CLOSE_GRIP_BENCH_PRESS: {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      INCLINE_SKULL_CRUSHERS: {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    BACK_AND_BICEPS: {
      DEADLIFTS: {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      BENTOVER_ROWS: {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      PULLDOWNS: {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      T_BAR_ROWS: {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      EZ_BAR_CURLS: {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      SEATED_DUMBBELL_CRULS: {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    },
    LEGS_AND_CALVES: {
      SQUATS: {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      LEG_PRESS: {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE_LEG_PRESS: {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      BULGARIAN: {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      STANDIONG_CALF: {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      SEATED_CALF: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    CHEST_AND_TRICEPS: {
      FLAT_BENCH: {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      INCLINE_DUMBBELL: {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      PEC_DEC: {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      CROSS_OVERS: {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      PUSHDOWNS: {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      CABLE_KCIKBACKS: {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    },
    HAMSTRINGS_AND_BICEPS: {
      LYING_LEG_CURLS: {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      ROMANIAN: {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      SINGLE: {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      SEATED: {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      SPIDER: {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      HAMMER: {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    },
  },
  // WEEK_4: {
  //     CHEST_AND_TRICEPS: [
  //         {
  //             activity: "Flat Bench Press",
  //             sets: 6,
  //             reps: "9 reps"
  //         },
  //         {
  //             activity: "Incline Dumbbell Press",
  //             sets: 3,
  //             reps: "8-10 reps"
  //         },
  //         {
  //             activity: "Pec-Dec",
  //             sets: 1,
  //             reps: "15-20 reps"
  //         },
  //         {
  //             activity: "Cross-Overs",
  //             sets: 1,
  //             reps: "15-20 reps"
  //         },
  //         {
  //             activity: "Pushdowns",
  //             sets: 3,
  //             reps: "10-12 reps"
  //         },
  //         {
  //             activity: "Cable Kickbacks",
  //             sets: 3,
  //             reps: "15-20 reps"
  //         }
  //     ],
  //     HAMSTRINGS_AND_BICEPS: [
  //         {
  //             activity: "Lying Leg Curls",
  //             sets: 6,
  //             reps: "8-10 reps"
  //         },
  //         {
  //             activity: "Romanian Deadlifts",
  //             sets: 4,
  //             reps: "8-10 reps"
  //         },
  //         {
  //             activity: "Single Standing Calf Raises",
  //             sets: 5,
  //             reps: "10-12 reps"
  //         },
  //         {
  //             activity: "Seated Calf Raises",
  //             sets: 3,
  //             reps: "15-20 reps"
  //         },
  //         {
  //             activity: "Spider Curls",
  //             sets: 3,
  //             reps: "10-12 reps"
  //         },
  //         {
  //             activity: "Hammer Curls",
  //             sets: 3,
  //             reps: "15-20 reps"
  //         }
  //     ],
  // },
  // WEEK_6: {
  //     CHEST_AND_TRICEPS: [
  //         {
  //             activity: "Decline-Dumbbelll Press Drop Set",
  //             sets: 3,
  //             reps: "10/10/10 reps"
  //         },
  //         {
  //             activity: "Pec-Dec Drop Set",
  //             sets: 3,
  //             reps: "10/10/10 reps"
  //         },
  //         {
  //             activity: "Dumbbell Press Drop Set",
  //             sets: 3,
  //             reps: "10/10/10 reps"
  //         },
  //         {
  //             activity: "Rope OVerhead Extension Drop Set",
  //             sets: 3,
  //             reps: "10/10/10 reps"
  //         },
  //         {
  //             activity: "Rop Extension Drop Set",
  //             sets: 3,
  //             reps: "12/12/12 reps"
  //         }
  //     ],
  //     HAMSTRINGS_AND_BICEPS: [
  //     {
  //         activity: "Lying Leg Curl Drop Set",
  //         sets: 6,
  //         reps: "8/8/8 reps"
  //     },
  //     {
  //         activity: "Single Leg Lying Curl Drop Set",
  //         sets: 6,
  //         reps: "10/10/10 reps"
  //     },
  //     {
  //         activity: "Seated Calf Raises Drop Set",
  //         sets: 3,
  //         reps: "10/10/10 reps"
  //     },
  //     {
  //         activity: "Spider Curls Drop Set",
  //         sets: 3,
  //         reps: "10/10/10 reps"
  //     },
  //     {
  //         activity: "Preacher Curls Drop Set",
  //         sets: 3,
  //         reps: "12/12/12 reps"
  //     }
  //     ]
  // }
};

export { TAB_COLORS, TAB_INFO, WORKOUT_PLAN };
