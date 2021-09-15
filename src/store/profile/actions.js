export const profileActionsTypes = {
  SOME_ACTION: "SOME_ACTION",
  ANOTHER_ACTION: "ANOTHER_ACTION",
};

export const profileActions = {
  someActionCreator: (payload) => ({
    type: profileActionsTypes.SOME_ACTION,
    payload,
  }),
  anotherActionCreator: () => ({
    type: profileActionsTypes.ANOTHER_ACTIONs,
  }),
};
