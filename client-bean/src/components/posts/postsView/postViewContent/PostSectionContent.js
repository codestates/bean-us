import React from 'react';
import styled from 'styled-components';
import { InnerFrame } from '../../../../styles/basicFrame/InnerFrame';

const PostText = styled.div`
  white-space: pre-line;
`;

function PostSectionContent({ content }) {
  return (
    <InnerFrame>
      <div className='subtitle'>상세설명</div>
      <PostText className='content'>{content}</PostText>
    </InnerFrame>
  );
}

export default PostSectionContent;
