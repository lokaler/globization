import { FOO } from '../constants/ActionTypes';

const initialState = {};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case FOO:
      return state;

    default:
      return state;
  }
}
