import React from 'react';
import styled from 'styled-components';
import { ContentWrap } from '../../../../styles/basicFrame/ContentWrap';
import ImgFrame from '../../../../styles/basicFrame/ImgFrame';
import { TagFrame } from '../../../../styles/basicFrame/TagFrame';
import BeanChart from './BeanChart';

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
  flex-basis: ${({ bean }) => (bean ? '60%' : '35%')};
`;

export default function PostSectionBean({ postCotents }) {
  let { imageUrl, beanRatio, water, waterTemp } = postCotents;

  return (
    <BeanWrap>
      <ImgFrame imgUrl={imageUrl} alt='postImg' width='450px' height='450px' marginRight='5rem' />
      <ContentContainer>
        <ContentInnerContainer bean>
          <div className='subtitle'>사용 원두</div>
          {Object.keys(beanRatio).map((bean) => (
            <TagFrame key={bean} color='green'>
              {bean}
            </TagFrame>
          ))}
          <BeanChart beanRatio={beanRatio} />
        </ContentInnerContainer>
        <ContentInnerContainer>
          <div className='subtitle'>물</div>
          <div>용량(ml) : {water}</div>
          <div>온도(C) : {waterTemp}</div>
        </ContentInnerContainer>
      </ContentContainer>
    </BeanWrap>
  );
}
