import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFilterBeans } from '../../network/beans/http';

const num = [1, 2, 3, 4, 5];
const content = ['Fragrance', 'Acidity', 'Sweetness', 'Bitterness', 'Body'];

const FilterContainer = styled.div``;

const FilterUL = styled.ul`
  text-align: center;
  width: 800px;
  padding: 1rem;
  margin: 0 auto;
  font-size: 1.1rem;

  & li {
    height: 40px;
    line-height: 40px;

    .filterContent {
      display: inline-block;
      height: 100%;
      width: 200px;
      background-color: rgba(255, 255, 255, 0.5);
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
  const [filtering, setFiltering] = useState({ fragrance: [], acidity: [], sweetness: [], bitterness: [], body: [] });

  //TODO useState 동기처리 다른 방법 없나.. 너무 리랜더링이 많이 된다.
  // filtering의 최신값을 가져오기 위함
  // 이후 필터링 개선 필요(불필요한 로직 개선 필요)
  // useCallback ?? //
  useEffect(() => {
    // TODO GET 요청
    let filteringObj = { ...filtering };
    for (let key in filteringObj) {
      filteringObj[key] = filteringObj[key].join(',');
    }
    getFilterBeans(filteringObj).then((res) => {
      getBeanCards(res);
    });
  }, [filtering]);

  //TODO 이후 필터링 개선 필요(불필요한 로직 개선 필요)
  // 배열이 빈배열일 경우는 해당 구분은 모두 선택된 것과 동일하다.
  const checkClick = (event) => {
    let { name, value, checked } = event.target;
    let key = name.toLowerCase();
    let filterValue = [...filtering[key]];

    if (checked) {
      filterValue = [...filterValue, +value];
    } else {
      filterValue.splice(filterValue.indexOf(+value), 1);
    }
    setFiltering({ ...filtering, [key]: [...filterValue] });
  };

  return (
    <FilterContainer>
      <div className="subtitle">분류 보기</div>
      <FilterUL>
        {content.map((value, i) => (
          <li key={i}>
            <span className="filterContent">{value}</span>
            {num.map((v, i) => (
              <span className="checkbox" key={i}>
                <input type="checkbox" id={value + v} name={value} value={v} onClick={checkClick} />
                <label htmlFor={value + v}>{v}</label>
              </span>
            ))}
          </li>
        ))}
      </FilterUL>
    </FilterContainer>
  );
}
