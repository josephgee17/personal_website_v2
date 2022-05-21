/* eslint-disable no-await-in-loop */

import { createModel } from "@rematch/core";
import localforage from "localforage";
import { RootModel } from ".";
import consts from "../constants/cache.json";

export interface WorkoutState {
  sessionVersion: number;
  WEEK_1: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
  WEEK_2: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
  WEEK_3: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
  WEEK_4: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
  WEEK_5: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
  WEEK_6: {
    SHOULDERS_AND_TRICEPS: WorkoutDataSet[];
    BACK_AND_BICEPS: WorkoutDataSet[];
    LEGS_AND_CALVES: WorkoutDataSet[];
    CHEST_AND_TRICEPS: WorkoutDataSet[];
    HAMSTRINGS_AND_BICEPS: WorkoutDataSet[];
  };
}

export const Workout = createModel<RootModel>()({
  state: {
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
  } as WorkoutState,
  reducers: {
    setWorkoutData: (state: WorkoutState, payload: WorkoutState) => ({
      ...state,
      payload,
    }),
    setSessionVersion: (state: WorkoutState, sessionVersion: number) => ({
      ...state,
      sessionVersion,
    }),
  },
  effects: (dispatch) => ({
    async initSessionNumber(payload, rootState): Promise<void> {
      const testWorkoutDataID = `${rootState.User.loggedinUser.username}-session${rootState.Workout.sessionVersion}-${consts.WORKOUT_DATA}`;
      let cache: WorkoutState | null = await localforage.getItem(
        testWorkoutDataID
      );
      while (cache) {
        dispatch.Workout.setSessionVersion(
          rootState.Workout.sessionVersion + 1
        );
        cache = await localforage.getItem(testWorkoutDataID);
      }
    },
    async initWorkoutData(payload, rootState): Promise<void> {
      const testWorkoutDataID = `${rootState.User.loggedinUser.username}-session${rootState.Workout.sessionVersion}-${consts.WORKOUT_DATA}`;
      const cache: WorkoutState | null = await localforage.getItem(
        testWorkoutDataID
      );
      if (cache) {
        dispatch.Workout.setWorkoutData(cache);
      }
    },
    async createWorkoutDaySession(payload, rootState): Promise<void> {
      const workoutDataID = `${rootState.User.loggedinUser.username}-session${rootState.Workout.sessionVersion}-${consts.WORKOUT_DATA}`;
      const workoutDaySession: any = await localforage.getItem(workoutDataID);
      if (workoutDaySession) {
        await localforage.setItem(workoutDataID, {
          payload,
        });
      }
    },
  }),
});
