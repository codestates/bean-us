import React from 'react';
import styled from 'styled-components';

// wrapper div
export const Wrapper = styled.div`
  width: ${({width}) => width || '300px'};
  height: ${({height}) => height || '100px'};
  padding: ${({padding}) => padding || '10px'};
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  justify-content: ${({row}) => row || 'center'};
  align-items: ${({colunm}) => colunm || 'center'};
`;

// border 들어간 wrapper div
export const BorderFrame = styled.div`
  width: ${({width}) => width || '100px'};
  height: ${({height}) => height || '100px'};
  padding: ${({padding}) => padding || '10px'};
  border: 1px solid rgba(44, 42, 40, 0.3);
  border-radius: 5px;
`;

// slide용 wrapper
// const SlideWrapper = styled.div`
//   width: 800px;
//   height: 70vh;
//   margin: 0 auto;
//   & .postBtn {
//   border: none;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-bottom: 10px;
//   box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);
//   cursor: pointer;
//   display: block;
//   position: absolute;
//   top: 38%;
//   left: 92%;
//   }
//   & .nextBtn {
//   border: none;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-bottom: 10px;
//   box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.3);
//   cursor: pointer;
//   display: block;
//   position: absolute;
//   top: 48%;
//   left: 92%;
//   }
// `;

export default function OuterFrame({width,height,padding}) {
  return(
    <div width={width} height={height} padding={padding}>
      
    </div>
  );
} 