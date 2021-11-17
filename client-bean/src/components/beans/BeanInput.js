import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { getBeanName } from '../../network/beans/http';
import { FaSearch } from 'react-icons/fa';

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

export default function BeanInput({ beanName, getBeanCards }) {
  const [inputName, setInputName] = useState('');
  const [filterName, setFilterName] = useState([]);
  const [onInputFocus, setOnInputFocus] = useState(false);

  const inpuRef = useRef();

  const nameSubmit = (e) => {
    e.preventDefault();
    // GET 요청
    getBeanName(inputName).then((res) => {
      getBeanCards(res);
    });
    setFilterName([]);
  };

  const searchBeanName = (text) => {
    setInputName(text);

    if (!text) {
      setFilterName([]);
    } else {
      beanName = beanName.filter((name) => name.includes(text));
      setFilterName(beanName);
    }
  };

  return (
    <SearchContainer focus={onInputFocus} name={filterName.length}>
      <div className='subtitle'>원두 검색</div>
      <form onSubmit={nameSubmit}>
        <input
          type='text'
          ref={inpuRef}
          value={inputName}
          onChange={(e) => searchBeanName(e.target.value)}
          onFocus={() => setOnInputFocus(!onInputFocus)}
          onBlur={() => setOnInputFocus(!onInputFocus)}
        />
        <button>
          <FaSearch />
        </button>
        <DropText focus={onInputFocus}>
          {filterName.map((name, i) => (
            <li key={i} onMouseDown={(e) => setInputName(e.target.textContent)}>
              {name}
            </li>
          ))}
        </DropText>
      </form>
    </SearchContainer>
  );
}
