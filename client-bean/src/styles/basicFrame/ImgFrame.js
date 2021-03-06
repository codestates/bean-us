import React from 'react';
import styled, { css } from 'styled-components';

export const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border || null};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  transition: all 0.3s;
  margin-right: ${({ marginRight }) => marginRight || null};
  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${({ viewPost }) =>
      viewPost &&
      css`
        position: relative;
        width: 100%;
        heigt: 100%;
        object-fit: cover;
      `}
  }

  &:hover {
    transform: ${({ transform }) => transform || null};
  }
`;

export default function ImgFrame({
  imgUrl,
  alt,
  width,
  height,
  border,
  borderRadius,
  marginRight,
  transform,
  viewPost,
}) {
  return (
    <ImgWrap
      viewPost={viewPost}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      marginRight={marginRight}
      transform={transform}
    >
      <img src={imgUrl} alt={alt} />
    </ImgWrap>
  );
}
