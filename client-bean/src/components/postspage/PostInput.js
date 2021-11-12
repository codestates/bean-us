import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  & form {
    position: relative;
    text-align: center;
    width: 540px;
    margin: 0 auto;
    margin-top: 1rem;

    & input {
      outline: none;
      border: none;
      width: 540px;
      height: 40px;
      font-size: 1.3rem;
      padding-left: 1.5rem;
      border-bottom-left-radius: ${({ focus, name }) => (focus && name ? `0px` : `40px`)};
      border-bottom-right-radius: ${({ focus, name }) => (focus && name ? `0px` : `40px`)};
      border-top-right-radius: ${({ focus, name }) => (focus && name ? `20px` : `40px`)};
      border-top-left-radius: ${({ focus, name }) => (focus && name ? `20px` : `40px`)};
    }

    & button {
      position: absolute;
      width: 50px;
      height: 40px;
      border: none;
      background-color: transparent;
      top: 0;
      right: 0;
    }

    & button:hover {
      cursor: pointer;
    }
  }
`;

function PostInput(props) {
  const {handleInputChange, handleClick} = props;
	return(
		<SearchContainer>
			<div className="subtitle">게시글 검색</div>
      <form >
        <input onChange={handleInputChange}/>
        <button onClick={handleClick}>click</button>
      </form>
		</SearchContainer>
	);
}

export default PostInput;