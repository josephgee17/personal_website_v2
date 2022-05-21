import { Models } from "@rematch/core";
import { User } from "./user";
import { Workout } from "./workout";

export interface RootModel extends Models<RootModel> {
  User: typeof User;
  Workout: typeof Workout;
}

export const models: RootModel = {
  User,
  Workout,
};
