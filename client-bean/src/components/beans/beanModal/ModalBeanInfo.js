import React from 'react';
import styled from 'styled-components';
import { FaCircle } from 'react-icons/fa';
import ImgFrame from '../../../styles/basicFrame/ImgFrame';

const BeanInfoWrap = styled.section`
  padding: 2rem 0;
  & .desc {
    border-bottom: 1px solid;
    padding-bottom: 2rem;
    line-height: 1.9rem;
  }
`;

const BeanIfnoWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  & .beaninfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & .name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  & li {
    padding-bottom: 1rem;
  }

  & ul ul li span {
    display: inline-block;
    width: 100px;
  }

  & .circleIcon {
    margin-right: 0.2rem;
    color: #799369;
  }
`;

function ModalBeanInfo({ cardBeanInfo }) {
  let {
    acidity,
    beanImage,
    beanName,
    bitterness,
    body,
    desc,
    fragrance,
    likeCount,
    origin,
    sweetness,
  } = cardBeanInfo[0];

  const circleList = (repeat) => {
    let liTag = [];
    for (let i = 0; i < repeat; i++) liTag.push(<FaCircle className='circleIcon' />);
    return liTag;
  };

  const categoryLi = (category, num) => {
    return (
      <li>
        <span>{category}</span>
        {circleList(num)}
      </li>
    );
  };

  return (
    <BeanInfoWrap>
      <BeanIfnoWrap>
        <ImgFrame
          imgUrl={beanImage}
          alt='beanImg'
          width='400px'
          height='300px'
          marginRight='5rem'
        />
        <ul className='beaninfo'>
          <li className='name'>{beanName}</li>
          <li className='Orign'>Orign : {origin}</li>
          <li className='like'>Like : {likeCount}</li>
          <ul>
            {categoryLi('Fragrance', fragrance)}
            {categoryLi('Acidity', acidity)}
            {categoryLi('Sweetness', sweetness)}
            {categoryLi('Bitterness', bitterness)}
            {categoryLi('Body', body)}
          </ul>
        </ul>
      </BeanIfnoWrap>
      <div className='desc'>{desc}</div>
    </BeanInfoWrap>
  );
}

export default ModalBeanInfo;
