import React from 'react';
import styled from 'styled-components';

// 네모버튼
export const Button = styled.button`
  flex: none;
  border: none;
  background-color: none;
  width: ${({width}) => width || '50px'};
  height: ${({height}) => height || '20px'};
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, .3);
  margin: ${({margin}) => margin || 0};
  margin-left: ${({marginLeft}) => marginLeft || 0};
  padding: ${({padding}) => padding || 0};
  text-align: center;
  font-weight: 500;
  color: ${({color}) => color || 'black'};
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0,.3);
  }
`;

export default function CreateBtn() {
  return(
    <div>
      
    </div>
  );
} 