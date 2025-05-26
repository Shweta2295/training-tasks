export const addUser = (payload: any) => {
  return {
    type: "ADD_USER",
    payload,
  };
};
export const deleteUser = (id: number) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};
export const searchUser = (value: string) => {
  return {
    type: "SEARCH_USER",
    payload: value,
  };
};
export const updateUser = (user: any) => {
  return {
    type: "UPDATE_USER",
    payload: user,
  };
};
export const localStorageSetData = (payload: any) => {
  return {
    type: "LOCALSTORAGE_SET_ITEM",
    payload,
  };
};
export const localStorageGetData = (payload: any) => {
  return {
    type: "LOCALSTORAGE_GET_ITEM",
    payload,
  };
};
