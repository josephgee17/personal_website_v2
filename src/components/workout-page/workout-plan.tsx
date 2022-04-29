import {IMGS} from "../images"

const TAB_COLORS = {
  pastelYellow: "fed672",
  lightPastelYellow: "ffeec9",
  pastelBlue: "215477",
  navyBlue: "043551",
  lightGray: "f5f6f9",
  lightBlue: "00afd6",
};

const TAB_INFO: Record<string, WorkoutTabFields> = {
  SHOULDERS_AND_TRICEPS: {
    title: "Shoulders and Tricpes",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  BACK_AND_BICEPS: {
    title: "Back and Biceps",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  LEGS_AND_CALVES: {
    title: "Legs and Calves",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  CHEST_AND_TRICEPS: {
    title: "Chest and Tricpes",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
  HAMSTRINGS_AND_BICEPS: {
    title: "Hamstrings and Biceps",
    topColor: TAB_COLORS.navyBlue,
    bottomColor: TAB_COLORS.lightGray,
    image: IMGS.runner,
  },
};

const WORKOUT_PLAN: Record<string, Record<string, unknown>> = {
  WEEK_1: {
    SHOULDERS_AND_TRICEPS: [
      {
        activity: "Seated Dumbbell Press",
        sets: 6,
        reps: "6 reps",
      },
      {
        activity: "Upright Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "Standing Overhead Press",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "Bent Over Reverse Cable Flies",
        sets: 3,
        reps: "15-20 reps",
      },
      {
        activity: "Close Grip Bench Press",
        sets: 3,
        reps: "6 reps",
      },
      {
        activity: "Incline Skull Crushers",
        sets: 3,
        reps: "8-10 reps",
      },
    ],
    BACK_AND_BICEPS: [
      {
        activity: "Deadlifts",
        sets: 6,
        reps: "6 reps",
      },
      {
        activity: "Bent Over Rows",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "Pulldowns",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "T-Bar Rows",
        sets: 3,
        reps: "15-20 reps",
      },
      {
        activity: "EZ Bar Curls",
        sets: 3,
        reps: "6 reps",
      },
      {
        activity: "Seated Dumbbell Curls",
        sets: 3,
        reps: "8-10 reps",
      },
    ],
    LEGS_AND_CALVES: [
      {
        activity: "Squats",
        sets: 6,
        reps: "6 reps",
      },
      {
        activity: "Leg Press",
        sets: 4,
        reps: "8-10 reps",
      },
      {
        activity: "Single Leg Press",
        sets: 4,
        reps: "15-20 reps",
      },
      {
        activity: "Bulgarian Split Squats",
        sets: 4,
        reps: "15-20 reps",
      },
      {
        activity: "Standing Calf Raises",
        sets: 6,
        reps: "10 reps",
      },
      {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
    ],
    CHEST_AND_TRICEPS: [
      {
        activity: "Flat Bench Press",
        sets: 6,
        reps: "6 reps",
      },
      {
        activity: "Incline Dumbbell Press",
        sets: 3,
        reps: "8-10 reps",
      },
      {
        activity: "Pec-Dec",
        sets: 1,
        reps: "15-20 reps",
      },
      {
        activity: "Cross-Overs",
        sets: 1,
        reps: "15-20 reps",
      },
      {
        activity: "Pushdowns",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "Cable Kickbacks",
        sets: 3,
        reps: "15-20 reps",
      },
    ],
    HAMSTRINGS_AND_BICEPS: [
      {
        activity: "Lying Leg Curls",
        sets: 6,
        reps: "8-10 reps",
      },
      {
        activity: "Romanian Deadlifts",
        sets: 4,
        reps: "8-10 reps",
      },
      {
        activity: "Single Standing Calf Raises",
        sets: 5,
        reps: "10-12 reps",
      },
      {
        activity: "Seated Calf Raises",
        sets: 3,
        reps: "15-20 reps",
      },
      {
        activity: "Spider Curls",
        sets: 3,
        reps: "10-12 reps",
      },
      {
        activity: "Hammer Curls",
        sets: 3,
        reps: "15-20 reps",
      },
    ],
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
