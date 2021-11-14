import React, { useEffect, useState } from 'react';

function ViewComment({ comments, postId }) {
  // test login
  let loginId = 'userId';

  const [comment, setComment] = useState([]);

  console.log(comment);
  useEffect(() => {
    setComment([...comments]);
  }, []);

  return (
    <>
      <ul>
        {comment.map((com) => (
          <li key={com.userId}>
            <div>{com.userId}</div>
            <div>{com.comment}</div>
            <div>{com.createAt}</div>
            {loginId === com.userId && (
              <>
                <button>수정</button>
                <button>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ViewComment;
