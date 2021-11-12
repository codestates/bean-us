import React from 'react';
import styled from 'styled-components';
import PostInput from './PostInput';

const PostSearchContainer = styled.div`
  border: 1px solid rgba(44, 42, 40, 0.3);
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1rem;

  & .subtitle {
    padding-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-bottom: 1px solid rgba(44, 42, 40, 0.3);
  }
`;

function PostSearch() {
	return(
		<PostSearchContainer>
			<PostInput />
		</PostSearchContainer>
	);
}

export default PostSearch;