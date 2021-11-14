import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import CancelModal from '../components/postsCreate/postsCreateModal/CancelModal';
import Slide1 from '../components/postsCreate/Slide1';
import Slide2 from '../components/postsCreate/Slide2';
import Slide3 from '../components/postsCreate/Slide3';
import Slide4 from '../components/postsCreate/Slide4';
import Slide5 from '../components/postsCreate/Slide5';
import Slide6 from '../components/postsCreate/Slide6';
import { Button } from '../styles/postspage/CreateBtn';
import { BorderFrame, Wrapper } from '../styles/postspage/OuterFrame';
import createPosts from '../network/postsCreate/https';

// 페이지 크기 조정
const PostCreateCnt = styled.div`
  width: 1099px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

// 페이지 제목
const PageTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding-top: 12px;
`;

// slide영역 테두리
const SlideFrame = styled.div`
  width: 1000px;
  height: 70vh;
  background: rgba(255,255,255,0.4);
  margin-top: 10px;
  position: relative;
  overflow-y: hidden;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

//state관리(title, photo, beans, ratio, water, temp)
function PostsCreate() {
  const slideRef = useRef([]);
  //-----상태관리-----
  // 모달
  const [isOpen, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    imgFile: null,
    bean: '',
    rate: 0,
    water: 0,
    description: ''
  })

  //-----이벤트 핸들러-----
  // 이전 위치로 가는 이벤트
  const slideScrollNext = (n) => {
    slideRef.current[n].scrollIntoView({ behavior: 'smooth' });
  }

  // 다음 위치로 가는 이벤트
  const slideScrollPost = (n) => {
    slideRef.current[n].scrollIntoView({ behavior: 'smooth' });
  }

  //취소버튼 클릭시 모달
  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  //게시글 생성
  const createPost = () => {
    createPosts(inputs)
  }

  //slide input 상태관리핸들러
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    })
    if(e.target.files) {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      setInputs({
        ...inputs,
        [name] : formData
      })
    }
  }
  // slide 안에 들어가야 할 input이 다 달라서... map함수를 쓸 수가 없다..
  // 정말 이게 최선인지 더 고민해볼것
  return(
    <PostCreateCnt>
      {isOpen ? <CancelModal closeModal={closeModal}/> : null}
      <BorderFrame width='1000px' height='70px' padding='10px'>
      <PageTitle>게시글 작성</PageTitle>
      </BorderFrame>
      <SlideFrame>
        <div ref={el => (slideRef.current[0] = el)}>
          <Slide1 
          inputs={inputs}
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
        </div>
        <div ref={el => (slideRef.current[1] = el)}>
          <Slide2
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
          <div ref={el => (slideRef.current[2] = el)}>
          <Slide3
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
        </div>
        <div ref={el => (slideRef.current[3] = el)}>
          <Slide4
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
        </div>
        <div ref={el => (slideRef.current[4] = el)}>
          <Slide5
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
        </div>
        <div ref={el => (slideRef.current[5] = el)}>
          <Slide6
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          />
        </div>
        </div>
      </SlideFrame>
      <Wrapper height='60px'>
        {/* 필수요소들이 채워지면 게시버튼이 생김 */}
        {
        inputs.title && 
        inputs.bean && 
        inputs.rate && 
        inputs.rate && 
        inputs.description ? 
        <Button width='55px' height='30' margin='5px' padding='2px' onClick={createPost}>게시</Button>
        : null
      }
        {/* 필수요소들이 채워지기 전에는 취소버튼만 보임 */}
        <Button width='55px' height='30' margin='5px' padding='2px' onClick={openModal}>취소</Button>
      </Wrapper>
    </PostCreateCnt>
  );
}

export default PostsCreate;