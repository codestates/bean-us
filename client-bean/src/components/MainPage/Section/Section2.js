import React from 'react';
import styled from 'styled-components';

const MainSection2 = styled.section`
    width: 100vw;
    height: 90vh;
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
                width: 80px;
            }
            > p {
                padding-top: 10px;
                padding-left: 10px;
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
            <img src="img/coffeebeanimg.png" alt='coffee'/>
            <Description>
                <DescTitle>About Bean-us</DescTitle>
                <ul>
                    <li>
                        <img src="img/coffee.png" alt="" className="coffee-icon"/>
                        <p>
                            <span>Share your recipe</span><br />
                            본인만의 원두 레시피를 공유해주세요
                        </p>
                    </li>
                    <li>
                        <img src="img/coffee-mug.png" alt="" className="coffee-icon"/>
                        <p>
                            <span>Find sepcial coffee beans</span><br />
                            취향에 딱 맞는 원두를 골라보세요
                        </p>
                    </li>
                    <li>
                        <img src="img/coffee-machine.png" alt="" className="coffee-icon"/>
                        <p>
                            <span>Comment your opinion</span><br />
                            자유로운 생각을 같이 공유해봐요
                        </p>
                    </li>
                </ul>
            </Description>
        </DescContainer>
    </MainSection2>
    )

}

export default Section2;  
