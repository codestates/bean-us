/*eslint-disable no-unused-vars*/

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { getBeanPost, postBeanLike, statusCode } from '../../../network/beans/http';

const CardLI = styled.li`
  position: relative;

  & .contentWrap {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 35px;
  }

  & .imgWrap {
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid rgba(157, 156, 147, 0.5);
    transition: all 0.3s;
  }

  & .imgWrap:hover {
    transform: scale(1.05);
  }

  & img {
    position: absolute;
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    cursor: pointer;
  }
`;

const ContentUL = styled.ul`
  padding-top: 35px;
  text-align: center;

  & li {
    margin-bottom: 5px;
  }

  & .beanName {
    font-size: ${({ beanName }) => (beanName.length < 10 ? '1.4rem' : '1.09rem')};
    font-weight: bold;
  }

  & .heart {
    position: absolute;
    right: 0;
    bottom: 0;
    color: ${({ beanlike }) => (beanlike ? 'rgba(202, 28, 50, 0.8)' : 'rgba(0,0,0,0.2)')};
    box-sizing: content-box;
    padding: 1rem;
    font-size: 1.5rem;
    transition: all 0.3s;
  }

  & .heart:hover {
    transform: scale(1.15);
    color: rgba(202, 28, 50, 0.5);
  }
`;

export default function BeanCard({ bean, beanModal }) {
  const { beanId, beanImage, beanName, origin, likeCount, like } = bean;

  //! 이후 bean에서 실제 데이터를 받아온다.
  // let like = false;
  const [beanlike, setBeanLike] = useState(like);
  const [likeNum, setLikeNum] = useState(likeCount);

  const cardClick = (e, beanId) => {
    let { tagName } = e.target;
    if (tagName === 'svg' || tagName === 'path') return;
    //! TODO GET /bean?beanId=beanId 해당 원두와 관련된 게시글 요청

    // getBeanPost(beanId).then((res) => {
    //   console.log(res);
    //   beanModal(beanId, res);
    // });

    beanModal(beanId, 'get 통신 결과 bean과 관련된 post 정보');
  };

  const heartClick = (id) => {
    let isLogin = true;

    if (!isLogin) {
      alert('로그인 회원만 사용 가능합니다. 로그인해 주세요');
    } else {
      //! TODO POST /bean/like
      // postBeanLike(id, !beanlike)
      //   .then((res) => statusCode(res))
      //   .then((result) => {
      //     if (result === 200) {
      //       setBeanLike(!beanlike);
      //       let num = likeNum;
      //       if (!beanlike) {
      //         setLikeNum(++num);
      //       } else {
      //         setLikeNum(--num);
      //       }
      //     } else {
      //       alert(result);
      //     }
      //   });

      let result = statusCode(200);
      if (result === 200) {
        setBeanLike(!beanlike);

        let num = likeNum;
        if (!beanlike) {
          setLikeNum(++num);
        } else {
          setLikeNum(--num);
        }
      } else {
        alert(result);
      }
    }
  };

  return (
    <CardLI onClick={(e) => cardClick(e, beanId)}>
      <div className='contentWrap'>
        <div className='imgWrap'>
          <img src={beanImage} alt='beanImg' />
        </div>
        <ContentUL beanName={beanName} beanlike={beanlike}>
          <li className='beanName'>{beanName}</li>
          <li>{origin}</li>
          <li>{likeNum}</li>
          <FaHeart className='heart' onClick={() => heartClick(beanId)} />
        </ContentUL>
      </div>
    </CardLI>
  );
}
