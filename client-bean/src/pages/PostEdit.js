import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import CancelModal from '../components/postsCreate/postsCreateModal/CancelModal';
import EditSlide1 from '../components/postEdit/EditSlide1';
import EditSlide2 from '../components/postEdit/EditSlide2';
import EditSlide3 from '../components/postEdit/EditSlide3';
import EditSlide4 from '../components/postEdit/EditSlide4';
import EditSlide5 from '../components/postEdit/EditSlide5';
import EditSlide6 from '../components/postEdit/EditSlide6';
import EditSlide7 from '../components/postEdit/EditSlide7';
import { Button } from '../styles/postspage/CreateBtn';
import { BorderFrame, Wrapper } from '../styles/postspage/OuterFrame';
import {rewritePost, getBeans } from '../network/postsCreate/https';
import {putPosts} from '../network/postEdit/https';
import {useParams, useNavigate} from 'react-router-dom';

// import {useNavigate} from 'react-router-dom';

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
  background: rgba(255, 255, 255, 0.4);
  margin-top: 10px;
  position: relative;
  overflow-y: hidden;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

//state관리(title, photo, beans, ratio, water, temp)
function PostEdit() {
  //-----상태관리-----
  // 모달
  const [isOpen, setOpen] = useState(false);

  const {id} = useParams();

  //slide inputs
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    water: 0,
    waterTemp: 0,
    imgFile: null,
    beanList: [],
  });

  // sldie props(값 연결해주려고 만든 상태들)
  const [beans, setBeans] = useState([]);

  const [value, setvalue] = useState([]); //input value

	//수정시 사용할 값
	const [postInfo, setPostInfo] = useState([]);

	let navigate = useNavigate();
  // useEffect(() => {
  //   getBeans().then((res) => {
  //     setBeans(res)
  //   })
  // }, [])
	
	
	// console.log(location.pathname.split('/')[location.pathname.split('/').length -1])
	useEffect(() => {
			rewritePost(id).then((res) => {
			setPostInfo(res.post)
      setInputs({
        ...inputs,
        content: res.post.content,
        title: res.post.title,
        water: res.post.water,
        waterTemp: res.post.waterTemp
      })
			})
	}, [])

  useEffect(() => {
    getBeans().then((res) => {
			setBeans(res.beans)
		})
  }, [])

  const slideRef = useRef([]);

  //-----이벤트 핸들러-----
  // 이전 위치로 가는 이벤트
  const slideScrollNext = (n) => {
    slideRef.current[n].scrollIntoView({ behavior: 'smooth' });
  };

  // 다음 위치로 가는 이벤트
  const slideScrollPost = (n) => {
    slideRef.current[n].scrollIntoView({ behavior: 'smooth' });
  };

  //취소버튼 클릭시 모달
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  //게시글 생성
  const putPost = () => {
    putPosts(id, inputs).then((res) => {
			alert('수정되었습니다.')
			navigate('/posts')
		});
  }

  //slide3 drop박스 클릭
  const handleClick = (e) => {
		console.log(value)
    if(!value.includes(e.target.getAttribute('value'))) {
			setvalue([...value, e.target.getAttribute('value')]);
		} else {
			setvalue(value.filter((el) => el !== e.target.getAttribute('value')));
		}
		let beanId = Number(e.target.getAttribute('id'));
		let index = beans.findIndex((bean) => bean.beanId === beanId)
		let beanArr = [...beans];
		beanArr[index] = {...beanArr[index], click : !(beanArr[index].click)}
		setBeans(beanArr);
		if((inputs.beanList.findIndex(el => el.beanId === beanId)) >= 0) {
			let nBeanList = inputs.beanList.filter(el => el.beanId !== beanId);
			setInputs({
				...inputs,
				beanList: [...nBeanList]
			})
		} else {
			setInputs({
				...inputs,
				beanList: [...inputs.beanList, { beanId: beanId }],
			});
		}
		console.log(inputs);
  };

  //slide input 상태관리핸들러
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    if (name === 'rate') {
      inputs.beanList[e.target.getAttribute('bean')] = {
        ...inputs.beanList[e.target.getAttribute('bean')],
        rate: Number(value),
      };
      setInputs({
        ...inputs,
        beanList: [...inputs.beanList],
      });
    } else if (e.target.files) {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      setInputs({
        ...inputs,
        [name]: formData,
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value,
      });
    }
    console.log(inputs);
  };
  // slide 안에 들어가야 할 input이 다 달라서... map함수를 쓸 수가 없다..
  // 정말 이게 최선인지 더 고민해볼것
  return (
    <PostCreateCnt>
      {isOpen ? <CancelModal closeModal={closeModal} /> : null}
      <BorderFrame width='1000px' height='70px' padding='10px'>
        <PageTitle>게시글 수정</PageTitle>
      </BorderFrame>
      <SlideFrame>
        <div ref={el => (slideRef.current[0] = el)}>
          <EditSlide1 
          inputs={inputs}
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[1] = el)}>
          <EditSlide2
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[2] = el)}>
          <EditSlide3
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
          beans={beans}
          value={value}
          handleClick={handleClick}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[3] = el)}>
          <EditSlide4
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					value={value}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[4] = el)}>
          <EditSlide5
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[5] = el)}>
          <EditSlide6
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					postInfo={postInfo}
          />
        </div>
        <div ref={(el) => (slideRef.current[6] = el)}>
          <EditSlide7
          slideScrollNext={slideScrollNext}
          slideScrollPost={slideScrollPost}
          handleInputChange={handleInputChange}
					postInfo={postInfo}
          />
        </div>
      </SlideFrame>
      <Wrapper height='60px'>
        {/* 필수요소들이 채워지면 게시버튼이 생김 */}
        {inputs.title &&
        inputs.beanList.length > 0 &&
        inputs.beanList.length === value.length &&
        inputs.water &&
        inputs.waterTemp &&
        inputs.content ? (
          <Button width='55px' height='35px' margin='5px' padding='2px' onClick={putPost}>
            수정
          </Button>
        ) : null}
        {/* 필수요소들이 채워지기 전에는 취소버튼만 보임 */}
        <Button width='55px' height='35px' margin='5px' padding='2px' onClick={openModal}>
          취소
        </Button>
      </Wrapper>
    </PostCreateCnt>
  );
}

export default PostEdit;
