import { initialTask } from "../data/tasks";
import * as actionTypes from "../constants/action-types";

export const tasksReducer = (state = initialTask, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TASK:
      return [...state, action.payload];

    case actionTypes.DELETE_TASK:
      return state.filter((task) => task.id !== actionTypes.payload);

    default:
      return state;
  }
};
