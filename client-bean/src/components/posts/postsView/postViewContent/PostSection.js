import React from 'react';
import styled from 'styled-components';
import PostSectionBean from './PostSectionBean';
import PostSectionContent from './PostSectionContent';

const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export default function PostSection({ postCotents }) {
  return (
    <SectionWrap>
      <PostSectionBean postCotents={postCotents} />
      <PostSectionContent content={postCotents.content} />
    </SectionWrap>
  );
}
