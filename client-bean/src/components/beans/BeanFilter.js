import React, { useState } from 'react';
import styled from 'styled-components';
import { getFilterBeans } from '../../network/beans/http';

const num = [1, 2, 3, 4, 5];
const content = ['Fragrance', 'Acidity', 'Sweetness', 'Bitterness', 'Body'];

const FilterUL = styled.ul`
  width: 800px;
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.1rem;
  text-align: center;
  font-family: 'Cafe24SsurroundAir';

  & li {
    height: 40px;
    line-height: 40px;

    .filterContent {
      display: inline-block;
      height: 100%;
      width: 200px;
      background-color: ${({ theme }) => theme.color.lightWhite};
    }

    .checkbox {
      & input[type='checkbox'] {
        display: none;
      }

      & input[type='checkbox'] + label {
        display: inline-block;
        width: 80px;
        height: 40px;
        cursor: pointer;
        transition: all 0.1s ease;
      }

      & input[type='checkbox']:checked + label {
        background-color: rgba(121, 147, 105, 1);
      }

      & input[type='checkbox'] + label:hover {
        background: rgba(121, 147, 105, 0.3);
      }
    }
  }
`;

export default function BeanFilter({ getBeanCards }) {
  const [filtering, setFiltering] = useState({
    fragrance: [],
    acidity: [],
    sweetness: [],
    bitterness: [],
    body: [],
  });

  const checkClick = ({ name, value, checked }) => {
    let key = name.toLowerCase();
    let filterValue = [...filtering[key]];

    if (checked) filterValue = [...filterValue, +value];
    else filterValue.splice(filterValue.indexOf(+value), 1);
    setFiltering({ ...filtering, [key]: [...filterValue] });

    let filteringObj = { ...filtering, [key]: [...filterValue] };
    for (let key in filteringObj) filteringObj[key] = filteringObj[key].join(',');
    getFilterBeans(filteringObj).then((res) => {
      getBeanCards(res);
    });
  };

  return (
    <div>
      <div className='subtitle'>분류 보기</div>
      <FilterUL>
        {content.map((value, i) => (
          <li key={i}>
            <span className='filterContent'>{value}</span>
            {num.map((v, i) => (
              <span className='checkbox' key={i}>
                <input
                  type='checkbox'
                  id={value + v}
                  name={value}
                  value={v}
                  onClick={(e) => checkClick(e.target)}
                />
                <label htmlFor={value + v}>{v}</label>
              </span>
            ))}
          </li>
        ))}
      </FilterUL>
    </div>
  );
}
