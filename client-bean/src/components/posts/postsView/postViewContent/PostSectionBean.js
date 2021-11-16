import React from 'react';
import styled, { css } from 'styled-components';
import { ContentWrap } from '../../../../styles/basicFrame/ContentWrap';
import ImgFrame from '../../../../styles/basicFrame/ImgFrame';
import BeanChart from './BeanChart';
import { IoIosWater } from 'react-icons/io';
import { FaTemperatureHigh } from 'react-icons/fa';

const BeanWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentInnerContainer = styled(ContentWrap)`
  display: inline;
  width: 450px;
  flex-basis: ${({ bean }) => (bean ? '62%' : '35%')};

  ${({ bean }) =>
    bean &&
    css`
      padding-bottom: 0;
      display: flex;
      flex-direction: column;
    `}
  ${({ water }) =>
    water &&
    css`
      & .waterContent {
        display: flex;
        justify-content: space-around;
        padding-top: 1rem;
      }
    `};
`;

export default function PostSectionBean({ postCotents }) {
  let { imageUrl, beanRatio, water, waterTemp } = postCotents;
  return (
    <BeanWrap>
      <ImgFrame
        imgUrl={imageUrl || '/asset/beans/bean10.jpg'}
        alt='postImg'
        width='450px'
        height='450px'
        marginRight='5rem'
      />
      <ContentContainer>
        <ContentInnerContainer bean>
          <div className='subtitle'>
            사용 원두(g)
            <ul className='underSubTitle'>
              {Object.keys(beanRatio).map((bean) => (
                <li key={bean} color='green'>
                  # {bean}
                </li>
              ))}
            </ul>
          </div>
          <BeanChart beanRatio={beanRatio} />
        </ContentInnerContainer>
        <ContentInnerContainer water>
          <div className='subtitle'>물</div>
          <div className='waterContent'>
            <div>
              <IoIosWater />
              용량(ml) : {water}
            </div>
            <div>
              <FaTemperatureHigh />
              온도(℃) : {waterTemp}
            </div>
          </div>
        </ContentInnerContainer>
      </ContentContainer>
    </BeanWrap>
  );
}
