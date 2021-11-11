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
  > p {
    width: 450px;
  }
  > ul {
      display: flex;
      flex-direction: column;
      > li {
          display: flex;
          margin-bottom: 20px;
          list-style: none;
          > .coffee-icon {
              max-width: 80px;
              max-height: 80px;
              vertical-align: center;
          }
          > p {
              padding-top: 0;
              padding-left: 10px;
              > span {
                  font-size: 1.2rem;
                  font-weight: 500;
                  color: #94673f;
              }
          }
      }
  }
`;
const DescTitle = styled.div`
  width: 20vw;
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 1px solid #94673f;
  color: #94673f;
  margin-left: 20px;
`;

export default function Section2 () {
  return (
  <MainSection2>
    <DescContainer>
      <img src="asset/mainpage/coffeebeanimg.png" alt='coffee'/>
      <Description>
        <DescTitle>About Bean-us</DescTitle>
        <p>
          커피없인 못살아! 현대인의 필수품 커피, <br />
          조금 더 맛있게 취향대로 즐기는 방법이 없을까?<br/>
          Bean-us에서 커피 중독 여러분,
          혹은 취향에 맞는 커피를 찾고싶은 <br />
          초보자분들을 위한 서비스를 제공합니다! <br />
          나에게 맞는 원두를 클릭 몇번으로 찾아주는 필터링 기능을 이용해보세요
        </p>
        <ul>
          <li>
          </li>
          <li>
              <img src="asset/mainpage/coffee.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Share your recipe</span><br />
                  원두 꿀 조합을 공유해주세요! 게시글을 작성할 때 원두 꿀 조합 선택이 가능합니다.
              </p>
          </li>
          <li>
              <img src="asset/mainpage/coffee-mug.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Find sepcial coffee beans</span><br />
                  나는 어떤 커피 취향일까? 세세하고 보기쉬운 필터링 기능을 통해 커피의 세계를 탐험해보세요!
              </p>
          </li>
          <li>
              <img src="asset/mainpage/coffee-machine.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Comment your opinion</span><br />
                  내 글에는 어떤 반응일지, 게시글을 열어 댓글창을 확인해볼까요? 
              </p>
          </li>
        </ul>
      </Description>
    </DescContainer>
  </MainSection2>
  )

}
