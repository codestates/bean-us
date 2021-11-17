import React from 'react';
import styled from 'styled-components';
import LoadingPage from './LoadingPage';

const Container = styled.div`
  background-color: #c7aa9a;
  width: 100%;
  height: 100vh;
`;

const CoffeeWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #607d8b;
  }

  .container {
    position: relative;
    top: 50px;
  }

  .cup {
    position: relative;
    width: 280px;
    height: 300px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-bottom-left-radius: 45%;
    border-bottom-right-radius: 45%;
  }

  .top {
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(to right, #f9f9f9, #d9d9d9);
    border-radius: 50%;
  }

  .circle {
    position: absolute;
    top: 5px;
    left: 10px;
    width: calc(100% - 20px);
    height: 50px;
    background: linear-gradient(to left, #f9f9f9, #d9d9d9);
    border-radius: 50%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .tea {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#c57e65, #e28462);
    border-radius: 50%;
  }

  .handle {
    position: absolute;
    right: -70px;
    top: 40px;
    width: 160px;
    height: 180px;
    border: 25px solid #dcdcdc;
    border-left: 25px solid transparent;
    border-bottom: 25px solid transparent;
    border-radius: 50%;
    transform: rotate(42deg);
  }

  .plate {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 200px;
    background: linear-gradient(to right, #f9f9f9, #f7f7f7);
    border-radius: 50%;
    box-shadow: 0 35px 35px rgba(0, 0, 0, 0.2);
  }

  .plate::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background: linear-gradient(to left, #f9f9f9, #e7e7e7);
  }

  .plate::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    background: radial-gradient(rgba(0, 0, 0, 0.2) 25%, transparent, transparent);
  }

  .vapour {
    position: relative;
    display: flex;
    padding: 0 20px;
    z-index: 1;
  }

  .vapour span {
    position: relative;
    bottom: 50px;
    display: block;
    margin: 0 2px 50px;
    min-width: 8px;
    height: 120px;
    background-color: #fff;
    border-radius: 50%;
    animation: animate 5s linear infinite;
    opacity: 0;
    filter: blur(10px);
    animation-delay: calc(var(--i) * -0.5s);
  }

  @keyframes animate {
    0% {
      transform: translateY(0) scaleX(1);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    50% {
      transform: translateY(-150px) scaleX(5);
    }
    95% {
      opacity: 0;
    }
    100% {
      transform: translateY(-300px) scaleX(10);
    }
  }
`;

export default function EmptyPage(props) {
  return (
    <Container>
      <LoadingPage content='This is Emtpy Page' />
      <CoffeeWrap>
        <div className='wrapper'>
          <span className='example'></span>
          <span className='example2'></span>
          <span className='example3'></span>
          <span className='example4'></span>
        </div>
        <div className='container'>
          <div className='plate'></div>
          <div className='cup'>
            <div className='top'>
              <div className='vapour'>
                <span style={{ '--i': 1 }}></span>
                <span style={{ '--i': 3 }}></span>
                <span style={{ '--i': 16 }}></span>
                <span style={{ '--i': 5 }}></span>
                <span style={{ '--i': 13 }}></span>
                <span style={{ '--i': 20 }}></span>
                <span style={{ '--i': 6 }}></span>
                <span style={{ '--i': 7 }}></span>
                <span style={{ '--i': 10 }}></span>
                <span style={{ '--i': 8 }}></span>
                <span style={{ '--i': 17 }}></span>
                <span style={{ '--i': 11 }}></span>
                <span style={{ '--i': 12 }}></span>
                <span style={{ '--i': 14 }}></span>
                <span style={{ '--i': 2 }}></span>
                <span style={{ '--i': 9 }}></span>
                <span style={{ '--i': 15 }}></span>
                <span style={{ '--i': 4 }}></span>
                <span style={{ '--i': 19 }}></span>
              </div>
              <div className='circle'>
                <div className='tea'></div>
              </div>
            </div>
            <div className='handle'></div>
          </div>
        </div>
      </CoffeeWrap>
    </Container>
  );
}
