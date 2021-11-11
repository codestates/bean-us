import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { getBeanName } from '../../network/http';

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

const DropText = styled.ul`
  position: absolute;
  text-align: left;
  z-index: 2;
  left: 0;
  width: 100%;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
  height: ${({ focus }) => (focus ? `auto` : `0px`)};

  & li {
    padding: 1rem 1.5rem;
  }

  & li:hover {
    background-color: rgba(200, 200, 200, 0.5);
    cursor: pointer;
  }
`;

const BeanInput = ({ beanName, getBeanCards }) => {
  const [inputName, setInputName] = useState('');
  const [filterName, setFilterName] = useState([]);
  const [onInputFocus, setOnInputFocus] = useState(false);

  const inpuRef = useRef();

  const nameSubmit = (e) => {
    e.preventDefault();
    //TODO GET 요청
    let res = getBeanName(inputName);

    getBeanCards(res);
    setFilterName([]);
    // inpuRef.current.focus();
  };

  const searchBeanName = (e) => {
    let text = e.target.value;
    setInputName(text);

    if (!text) {
      setFilterName([]);
    } else {
      beanName = beanName.filter((name) => name.includes(text));
      setFilterName(beanName);
    }
  };

  const clickName = (e) => {
    setInputName(e.target.textContent);
  };

  const inputFoucs = (e) => {
    setOnInputFocus(!onInputFocus);
  };

  return (
    <SearchContainer focus={onInputFocus} name={filterName.length}>
      <div className="subtitle">원두 검색</div>
      <form onSubmit={nameSubmit}>
        <input ref={inpuRef} type="text" onChange={searchBeanName} value={inputName} onFocus={inputFoucs} onBlur={inputFoucs} />
        <button>click</button>
        <DropText focus={onInputFocus}>
          {filterName.map((name, i) => (
            <li key={i} onMouseDown={clickName}>
              {name}
            </li>
          ))}
        </DropText>
      </form>
    </SearchContainer>
  );
};

export default BeanInput;
