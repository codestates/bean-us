import React from 'react';
import { InnerFrame } from '../../../../styles/basicFrame/InnerFrame';

function PostSectionContent({ content }) {
  let contentChnage = content.replace('/\n/g', '<br/>');

  return (
    <InnerFrame>
      <div className='subtitle'>상세설명</div>
      <div className='content'>{contentChnage}</div>
    </InnerFrame>
  );
}

export default PostSectionContent;
