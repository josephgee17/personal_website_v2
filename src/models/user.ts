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
  };
  testingUser: {
    username: string | null;
    name: string | null;
  };
  loginStatement: string | null;
}

export const User = createModel<RootModel>()({
  state: {
    loggedinUser: {
      username: null,
      name: null,
      lastLogin: null,
    },
    testingUser: {
      username: null,
      name: null,
    },
    loginStatement: null,
  } as UserState,
  reducers: {
    setLoggedinUser: (
      state: UserState,
      user: { username: string; name: string; lastLogin: Dayjs }
    ) => ({
      ...state,
      loggedinUser: {
        username: user.username,
        name: user.name,
        lastLogin: user.lastLogin,
      },
    }),

    setUsernameInput: (state: UserState, inputValue: string) => ({
      ...state,
      testingUser: {
        username: inputValue,
        name: state.testingUser.name,
      },
    }),
    setNameInput: (state: UserState, inputValue: string) => ({
      ...state,
      testingUser: {
        username: state.testingUser.username,
        name: inputValue,
      },
    }),
    setLoginStatement: (state: UserState, loginStatement: string) => ({
      ...state,
      loginStatement: loginStatement,
    }),
  },
  effects: (dispatch) => ({
    async createNewUser(payload, rootState): Promise<void> {
      const testUserCacheID = `${rootState.User.testingUser.username}-${consts.USER_DATA}`;
      const loggedinUserCacheID = consts.LOGGED_IN_USER_DATA;
      const testCodesReturn = await dispatch.User.testUser();
      if (testCodesReturn.newUser.status === 200) {
        const newUserCacheResponse: UserState | any = await localforage.setItem(
          testUserCacheID,
          {
            username: rootState.User.testingUser.username,
            name: rootState.User.testingUser.name,
            lastLogin: dayjs(),
          }
        );
        const loginUserCacheResponse: UserState | any =
          await localforage.setItem(loggedinUserCacheID, {
            username: rootState.User.testingUser.username,
            name: rootState.User.testingUser.name,
            lastLogin: dayjs(),
          });
        await dispatch.User.setLoggedinUser(loginUserCacheResponse);
      }
      dispatch.User.setLoginStatement(testCodesReturn.newUser.loginStatement);
    },
    async testExistingUser(payload, rootState): Promise<void> {
      const loggedinUserCacheID = consts.LOGGED_IN_USER_DATA;
      const testCodesReturn = await dispatch.User.testUser();
      if (testCodesReturn.existingUser.status === 200) {
        const loginUserCacheResponse: UserState | any =
          await localforage.setItem(loggedinUserCacheID, {
            username: rootState.User.testingUser.username,
            name: rootState.User.testingUser.name,
            lastLogin: dayjs(),
          });
        await dispatch.User.setLoggedinUser(loginUserCacheResponse);
      }
      dispatch.User.setLoginStatement(
        testCodesReturn.existingUser.loginStatement
      );
    },
    async testUser(payload, rootState): Promise<any> {
      const testUserCacheID = `${rootState.User.testingUser.username}-${consts.USER_DATA}`;
      let testcodes;
      try {
        const testCacheResponse: null | {
          username: string | null;
          name: string | null;
          lastLogin: Dayjs | null;
        } = await localforage.getItem(testUserCacheID);
        if (
          testCacheResponse &&
          testCacheResponse.name !== rootState.User.testingUser.name
        ) {
          testcodes = {
            newUser: {
              loginStatement:
                "This username is already taken. Pleast try another",
              status: 400,
            },
            existingUser: {
              loginStatement: "Invalid credentials. Please try again",
              status: 500,
            },
          };
        } else if (
          testCacheResponse &&
          testCacheResponse.name === rootState.User.testingUser.name
        ) {
          testcodes = {
            newUser: {
              loginStatement:
                "This username is already taken. Pleast try logging in",
              status: 400,
            },
            existingUser: {
              loginStatement: "You have been logged in!",
              status: 200,
            },
          };
        } else {
          testcodes = {
            newUser: {
              loginStatement:
                "Your username and name have been saved. You have been logged in!",
              status: 200,
            },
            existingUser: {
              loginStatement: "Invalid credentials. Please try again",
              status: 500,
            },
          };
        }
      } catch (e) {
        console.log(e);
        testcodes = {
          newUser: {
            loginStatement: "Something went wrong. Please try again later",
            status: 500,
          },
          existingUser: {
            loginStatement: "Something went wrong. Please try again later",
            status: 500,
          },
        };
      }
      return testcodes;
    },
  }),
});
