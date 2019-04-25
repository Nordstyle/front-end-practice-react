import { FETCH_USERDATA_REQUEST, FETCH_USERDATA_FAILED, FETCH_USERDATA_SUCCESS, USERDATA_CHANGE_VIEW, USERDATA_CHANGE_SORTING_TYPE, USERDATA_CHANGE_SORTING_DIRECTION } from './constants';

const initialState = {
  isLoading: undefined,
  isError: undefined,
  view: 'Free',
  sortNameType: null,
  sortDirection: null,
  data: []
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERDATA_REQUEST: return ({ ...state, isLoading: true, isError: false, data: [] });
    case FETCH_USERDATA_SUCCESS: return ({ ...state, isLoading: false, isError: false, data: action.payload });
    case FETCH_USERDATA_FAILED: return ({ ...state, isLoading: false, isError: true, data: action.payload });
    case USERDATA_CHANGE_VIEW: return ({ ...state, view: action.payload });
    case USERDATA_CHANGE_SORTING_TYPE: return ({ ...state, sortNameType: action.payload });
    case USERDATA_CHANGE_SORTING_DIRECTION: return ({ ...state, sortDirection: action.payload });
    default: return state;
  }
};