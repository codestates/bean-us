import React, { useEffect, useState } from 'react';

const num = [1, 2, 3, 4, 5];
const content = ['Fragrance', 'Acidity', 'Sweetness', 'Bitterness', 'Body'];

const BeanFilter = ({ getBeanCards }) => {
  const [filtering, setFiltering] = useState({ fragrance: [], acidity: [], sweetness: [], bitterness: [], body: [] });

  // filtering의 최신값을 가져오기 위함
  // 이후 필터링 개선 필요(불필요한 로직 개선 필요)
  //* useState 동기처리 다른 방법 없나.. 너무 리랜더링이 많이 된다.
  useEffect(() => {
    getBeanCards(filtering);
  }, [filtering]);

  // 이후 필터링 개선 필요(불필요한 로직 개선 필요)
  // 배열이 빈배열일 경우는 해당 구분은 모두 선택된 것과 동일하다.
  const checkClick = (event) => {
    let { id, value, checked } = event.target;
    let key = id.toLowerCase();
    let filterValue = [...filtering[key]];

    if (checked) {
      filterValue = [...filterValue, +value];
    } else {
      filterValue.splice(filterValue.indexOf(+value), 1);
    }

    setFiltering({ ...filtering, [key]: [...filterValue] });
  };

  return (
    <ul>
      {content.map((value, i) => (
        <li key={i}>
          <span>{value}</span>
          {num.map((v, i) => (
            <span key={i}>
              <label htmlFor={value}>{v}</label>
              <input type="checkbox" id={value} onClick={checkClick} value={v} />
            </span>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default BeanFilter;
