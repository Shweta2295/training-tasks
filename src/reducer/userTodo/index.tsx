export interface IUser {
  id: number;
  name: string;
  gender: string;
  birthDate: string;
}

export interface IState {
  user: IUser[];
  searchUser: IUser[];
  search: string;
}

const localStorageGetItems = (key: string) => {
  if (typeof window !== "undefined") {
    const data: any = localStorage.getItem(key);
    const parseData = data ? JSON.parse(data) : null;
    return parseData;
  }
};

const localStorageSetItems = (field: string, data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(field, data);
    return data;
  }
};

export const initialState: IState = {
  user: localStorageGetItems("users") || [],
  searchUser: [],
  search: "",
};

export const userReducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, { ...action.payload, id: Date.now() }],
      };
    case "DELETE_USER": {
      const newUserData = state.user.filter(
        (user) => user.id !== action.payload
      );
      const newSearchUserData = state.searchUser.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        user: newUserData,
        searchUser: state.search ? newSearchUserData : [],
      };
    }
    case "UPDATE_USER": {
      const updateUserData = state.user.map((u) =>
        u.id === action.payload.id ? { ...u, ...action.payload } : u
      );
      const updatedSearchUserData = state.searchUser.map((u) =>
        u.id === action.payload.id ? { ...u, ...action.payload } : u
      );
      return {
        ...state,
        user: updateUserData,
        searchUser: state.search ? updatedSearchUserData : [],
      };
    }
    case "SEARCH_USER":
      return {
        ...state,
        search: action.payload,
        searchUser: state.user.filter((user) =>
          user.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "LOCALSTORAGE_SET_ITEM":
      localStorageSetItems(
        action.payload.field,
        JSON.stringify(action.payload.data)
      );
      return { ...state };
    case "LOCALSTORAGE_GET_ITEM":
      return state;

    default:
      return state;
  }
};
