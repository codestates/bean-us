import React from 'react';
import styled from 'styled-components';
import { BeanPostdb } from '../../../db/beanPostdb';

//[{postId, title, beans: [beanName, beanName, beanName], userId(작성자), createAt}]
// 최신순으로 정렬

const BeanPostWrap = styled.div`
  display: inline-block;
  width: 100%;
  height: 500px;

  & header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

function ModalPosting(props) {
  return (
    <BeanPostWrap>
      <header>게시글</header>
      <ul>
        {BeanPostdb.map((res) => (
          <li key={res.postId}>
            <div>{res.title}</div>
            {res.beans.map((name) => (
              <div key={name}>{name}</div>
            ))}
            <div>{res.userId}</div>
            <div>{res.createAt}</div>
          </li>
        ))}
      </ul>
    </BeanPostWrap>
  );
}

export default ModalPosting;
