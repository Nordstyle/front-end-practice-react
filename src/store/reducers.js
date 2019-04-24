import { FETCH_USERDATA_REQUEST, FETCH_USERDATA_FAILED, FETCH_USERDATA_SUCCESS} from './constants';

const initialState = {
  isLoading: undefined,
  isError: undefined,
  data: []
};

export const usersReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCH_USERDATA_REQUEST: return ({ isLoading: true, isError: false, data: [] });
    case FETCH_USERDATA_SUCCESS: return ({ isLoading: false, isError: false, data: action.payload });
    case FETCH_USERDATA_FAILED: return ({ isLoading: false, isError: true, data: action.payload });
    default: return state;
  }
};