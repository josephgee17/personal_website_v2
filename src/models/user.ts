import { createModel } from "@rematch/core";
import dayjs, { Dayjs } from "dayjs";
import localforage from "localforage";
import { RootModel } from ".";
import consts from "../constants/cache.json";

export interface UserState {
  loggedinUser: {
    username: string | null;
    name: string | null;
    lastLogin: Dayjs | null;
  },
  testingUser: {
    username: string | null;
    name: string | null;
  },
  loginStatement: string | null,
}

export const User = createModel<RootModel>()({
  state: {
    loggedinUser: {
      username: null,
      name: null,
      lastLogin: null
    },
    testingUser: {
      username: null,
      name: null,
    },
    loginStatement: null
  } as UserState,
  reducers: {
    setLoggedinUser: (state: UserState, user: {username: string, name: string}) => (
      {
      ...state,
      loggedinUser: {
        username: user.username,
        name: user.name,
        lastLogin: dayjs(),
      },
    }
    ),
    // setReturningUser: (state: UserState) => ({
    //   username: state.username,
    //   name: state.name,
    //   lastLogin: dayjs(),
    // }),
    setUsernameInput: (state: UserState, inputValue: string) => ({
      ...state,
      testingUser: {
        username: inputValue,
        name: state.testingUser.name
      }
    }),
    setNameInput: (state: UserState, inputValue: string) => ({
      ...state,
      testingUser: {
        username: state.testingUser.username,
        name: inputValue
      }
    }),
    setLoginStatement: (state: UserState, loginStatement: string) => ({
      ...state,
      loginStatement: loginStatement
    }),
  },
  effects: (dispatch) => ({
    async createNewUser(payload, rootState): Promise<any> {
      const testCacheID = `${rootState.User.testingUser.username}-${consts.USER_DATA}`;
      const loginCacheID = consts.LOGGED_IN_USER_DATA
      let loginStatement = ""
      try {
        const testCacheResponse: null | {
          username: string | null;
          name: string | null;
          lastLogin: Dayjs | null;
        } = await localforage.getItem(
          testCacheID        
        );
        if (testCacheResponse && testCacheResponse.name !== rootState.User.testingUser.name) {
          loginStatement = "This username is already taken. Pleast try another"
        }
        else if (testCacheResponse && testCacheResponse.name === rootState.User.testingUser.name) {
          loginStatement = "This username is already taken. Pleast try logging in"
        }
        else {
          const newUserCacheResponse: UserState | {} = await localforage.setItem(
            testCacheID, {
              username: rootState.User.testingUser.username,
              name: rootState.User.testingUser.name,
              lastLogin: dayjs(),
            }
          );
          const loginUserCacheResponse: UserState | any = await localforage.setItem(
            loginCacheID, {
              username: rootState.User.testingUser.username,
              name: rootState.User.testingUser.name,
              lastLogin: dayjs(),
            }
          );   
          await dispatch.User.setLoggedinUser(loginUserCacheResponse);
          loginStatement = "Your username and name haev been saved. You have been logged in!"
        }
      } catch (e) {
        console.log(e)
        loginStatement = "Something unexpected occured. Please try again later"
      }
      dispatch.User.setLoginStatement(loginStatement)

    },
    // async getUser(payload, rootState): Promise<void> {
    //   console.log("here is the payload");
    //   console.log(payload);
    //   console.log("here is the rootstate");
    //   console.log(rootState);
    //   const cacheID = `${rootState.username}-${consts.USER_DATA}`;
    //   const cacheResponse: null | UserState = await localforage.getItem(
    //     cacheID
    //   );
    //   if (
    //     cacheResponse?.lastLogin &&
    //     !dayjs().isAfter(cacheResponse?.lastLogin, "day")
    //   ) {
    //     dispatch.user.setReturningUser(cacheResponse);
    //   }
    // },
  }),
});
