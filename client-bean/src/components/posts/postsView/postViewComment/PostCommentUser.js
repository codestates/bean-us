import React from 'react';
import BtnFrame from '../../../../styles/basicFrame/Btn';
import { delComment } from '../../../../network/postsView/http';

function PostCommentUser({
  comment,
  isEdit,
  postId,
  loginId,
  deleteComment,
  changeEdit,
  editComplete,
}) {
  const deleteCommentClick = (comId) => {
    //Todo Delete /posts/comments
    if (window.confirm('정말 삭제하시겠습니까?')) {
      delComment(postId, comId).then(() => {
        deleteComment(comId);
      });
    }
  };

  const editCommentClick = () => {
    changeEdit(true);
  };

  return (
    <>
      <div className='user'>{comment.userId}</div>
      {loginId === comment.userId && (
        <>
          {isEdit ? (
            <span onClick={() => editComplete(comment.commentId)}>
              <BtnFrame content='완료'></BtnFrame>
            </span>
          ) : (
            <div>
              <BtnFrame content='수정' clickEvent={editCommentClick} />
              <BtnFrame
                content='삭제'
                marginLeft='3px'
                clickEvent={() => deleteCommentClick(comment.commentId)}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default PostCommentUser;
