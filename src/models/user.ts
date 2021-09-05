import { createModel } from "@rematch/core";
import dayjs, { Dayjs } from "dayjs";
import localforage from "localforage";
import { RootModel } from ".";
import consts from "../constants/cache.json";

interface UserState {
  username: string | null;
  name: string | null;
  lastLogin: Dayjs | null;
  isLoggedIn: boolean | null;
}

export const User = createModel<RootModel>()({
  state: {
    username: null,
    name: null,
    lastLogin: null,
    isLoggedIn: false,
  } as UserState,
  reducers: {
    setNewUser: (state: UserState) => ({
      username: state.username,
      name: state.name,
      lastLogin: dayjs(),
      isLoggedIn: true,
    }),
    setReturningUser: (state: UserState) => ({
      username: state.username,
      name: state.name,
      lastLogin: dayjs(),
      isLoggedIn: true,
    }),
  },
  effects: (dispatch) => ({
    async createNewUser(payload, rootState): Promise<void> {
      console.log("here is the payload");
      console.log(payload);
      console.log("here is the rootstate");
      console.log(rootState);
      const cacheID = `${payload.username}-${consts.USER_DATA}`;
      const cacheResponse: null | UserState = await localforage.setItem(
        cacheID,
        payload
      );
      console.log("Here is the createNewUser cacheResponse");
      console.log(cacheResponse);
      dispatch.user.setNewUser(payload);
    },
    async getUser(payload, rootState): Promise<void> {
      console.log("here is the payload");
      console.log(payload);
      console.log("here is the rootstate");
      console.log(rootState);
      const cacheID = `${payload.username}-${consts.USER_DATA}`;
      const cacheResponse: null | UserState = await localforage.getItem(
        cacheID
      );
      if (
        cacheResponse?.lastLogin &&
        !dayjs().isAfter(cacheResponse?.lastLogin, "day")
      ) {
        dispatch.user.setReturningUser(cacheResponse);
      }
    },
  }),
});
