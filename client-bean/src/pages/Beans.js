import React, { useEffect, useState } from 'react';
import BeanCards from '../components/beans/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import { getAllBeans } from '../network/http';
import styled from 'styled-components';

//db
import { Beandb } from '../db/beandb';

const BeanContainer = styled.div`
  width: 1100px;
  margin: auto;

  & .title {
    padding: 1rem 0;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const Beans = (props) => {
  const [beans, setBeans] = useState([]);
  const [beanName, setBeanName] = useState([]);

  //첫 렌더링 시에는 모든 원두 목록 가져오기
  useEffect(() => {
    // TODO GET 요청 필요
    let res = getAllBeans();
    // setBeans(...res.body)
    console.log(res);

    let name = Beandb.map((v) => v.beanName);

    setBeans([...Beandb]);
    setBeanName([...name]);
  }, []);

  const getBeanCards = (res) => {
    //TODO res에 따른 setBeans 설정
    // setBeans([...res.body]);
    console.log(res);
  };

  return (
    <BeanContainer>
      <div className="title">원두</div>
      <BeanSearch getBeanCards={getBeanCards} beanName={beanName} />
      <BeanCards beans={beans} />
    </BeanContainer>
  );
};
export default Beans;
