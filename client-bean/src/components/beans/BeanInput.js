import React, { useRef, useState } from 'react';
import { getBeanName } from '../../network/http';

const BeanInput = ({ beanName, getBeanCards }) => {
  const [inputName, setInputName] = useState('');
  const [filterName, setFilterName] = useState([]);

  const inpuRef = useRef();

  const nameSubmit = (e) => {
    e.preventDefault();
    //TODO GET 요청
    let res = getBeanName(inputName);

    getBeanCards(res);
    setFilterName([]);
    inpuRef.current.focus();
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

  return (
    <form onSubmit={nameSubmit}>
      <input ref={inpuRef} type="text" onChange={searchBeanName} value={inputName} />
      <button>클릭 img</button>
      <ul>
        {filterName.map((name, i) => (
          <li key={i} onClick={clickName}>
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default BeanInput;
