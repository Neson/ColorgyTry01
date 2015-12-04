import { handleActions } from 'redux-actions';

export default handleActions({
  TEST_PLUS: (state, action) => {
    console.log(state, action);

    return {
      count: state.count + 1
    };
  }
}, { count: 0 });
