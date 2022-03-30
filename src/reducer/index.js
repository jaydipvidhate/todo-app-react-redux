import { ADDTASK, DELETETASK } from "../action";

const initialState = {
  list: [{ id: 1234, task: "Wake up early in the morning" }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      const { id, task } = action.payload;
      return {
        ...state,
        list: [...state.list, { id, task }],
      };
    case DELETETASK:
      const newTasks = state.list.filter((task) => task.id !== action.payload);

      return {
        ...state,
        list: newTasks,
      };

    default:
      return state;
  }
};

export default reducer;
