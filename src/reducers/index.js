const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const commentReducer = (state, action) => {
  if (!state) {
    return {
      comments: []
    }
  }

  switch (action.type) {
    case INIT_COMMENTS:
      return {
        comments: action.comments
      };
    case ADD_COMMENT:
      return {
        comments: [
          ...state.comments,
          action.comment
        ]
      };
    case DELETE_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.index),
          ...state.comments.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}
export default commentReducer;