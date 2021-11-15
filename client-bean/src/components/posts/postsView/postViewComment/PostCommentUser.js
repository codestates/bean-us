import React from 'react';
import BtnFrame from '../../../../styles/basicFrame/Btn';
// import { delComment } from '../../../../network/postsView/http';

function PostCommentUser({ comment, isEdit, postId, deleteComment, changeEdit, editComplete }) {
  // test login
  let loginId = 'meme';

  const deleteCommentClick = (comId) => {
    //! Delete /posts/comments
    // if (window.confirm('정말 삭제하시겠습니까?')){
    // delComment(postId,comId).then((res) => {
    //   deleteComment(comId);
    // })}

    if (window.confirm('정말 삭제하시겠습니까?')) deleteComment(comId);
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
              <span onClick={editCommentClick}>
                <BtnFrame content='수정' />
              </span>
              <span onClick={() => deleteCommentClick(comment.commentId)}>
                <BtnFrame content='삭제' marginLeft='3px' />
              </span>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default PostCommentUser;
