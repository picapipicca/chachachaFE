// 액션이랑 리듀서 편하게 만들 수 있게 해주는 애
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import { commentApi } from "../../api/commentList";
// console.log(commentApi.comment)
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));
const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({comment_id}));

const initialState = {
  comment: null,
  is_login: false,
  list: [],
};

const getChatList = () => async (dispatch, getState) => {
  try {
    const response = await commentApi.comment();
    const data = await response.data.commentList;
    // console.log(data);
    dispatch(getComment(data));
  } catch (error) {
    console.log(error);
  }
};

const _addCommentDB = (card_id, user_id, comment, date) =>
  async (dispatch, getState, { history }) => {
    try {
      const data = await commentApi.addComment(card_id, user_id, comment, date);
      console.log(data)
      dispatch(addComment(data));
    } catch (error) {
      console.log(error);
    }
  };

// comment 삭제하기
const _deleteCommentDB = (comment_id) => (dispatch) => {
  try {
    commentApi.deleteComment(comment_id);
    dispatch(deleteComment(comment_id));
  } catch (error) {
    console.log(error);
  }
};



export default handleActions(
  // {

  // },
  {
    [GET_COMMENT]: (state, action) =>
    produce(state, (draft) => {
      // console.log(333);
      draft.list = action.payload.comment;
    }),
    [ADD_COMMENT]: (state, action) => {
      return {
        ...state,
        comments: state.comments.concat(action.payload.comment),
      };
    },
    [DELETE_COMMENT]: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.comment_id !== action.payload.comment_id
        ),
      };
    },
  },
  initialState
);

const actionCreator = {
  getComment,
  getChatList,
  addComment,
  deleteComment,
  _addCommentDB,
  _deleteCommentDB,
};

export { actionCreator };
