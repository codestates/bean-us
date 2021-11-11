import React from 'react';
import styled from 'styled-components';

const MainSection2 = styled.section`
  width: 100vw;
  height: 100vh;
`;
const DescContainer = styled.div`
  width: 1024px;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description = styled.div`
  width: 30vw;
  height: 90vh;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > ul {
    display: flex;
    flex-direction: column;
    > li {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      list-style: none;
      > .coffee-icon {
        max-width: 80px;
        max-height: 80px;
      }
      > p {
        padding-left: 10px;
        > span {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
const DescTitle = styled.div`
  width: 20vw;
  font-size: 2rem;
  border-bottom: 1px solid #94673f;
  color: #94673f;
  margin-left: 20px;
`;

const Section2 = () => {
  return (
    <MainSection2>
      <DescContainer>
        <img src="img/coffeebeanimg.png" alt="coffee" />
        <Description>
          <DescTitle>About Bean-us</DescTitle>
          <ul>
            <li>
              <img src="img/coffee.png" alt="" className="coffee-icon" />
              <p>
                <span>Share your recipe</span>
                <br />
                원두 꿀 조합을 공유해주세요! 게시글을 작성할 때 원두 꿀 조합 선택이 가능합니다.
              </p>
            </li>
            <li>
              <img src="img/coffee-mug.png" alt="" className="coffee-icon" />
              <p>
                <span>Find sepcial coffee beans</span>
                <br />
                나는 어떤 커피 취향일까? 세세하고 보기쉬운 필터링 기능을 통해 커피의 세계를 탐험해보세요!
              </p>
            </li>
            <li>
              <img src="img/coffee-machine.png" alt="" className="coffee-icon" />
              <p>
                <span>Comment your opinion</span>
                <br />내 글에는 어떤 반응일지, 게시글을 열어 댓글창을 확인해볼까요?
              </p>
            </li>
          </ul>
        </Description>
      </DescContainer>
    </MainSection2>
  );
};

export default Section2;
