import React, { useEffect, useState } from 'react';
import BeanCards from '../components/beans/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import { getAllBeans } from '../network/http';

//db
import { Beandb } from '../db/beandb';

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
    <>
      <BeanSearch getBeanCards={getBeanCards} beanName={beanName} />
      <BeanCards beans={beans} />
    </>
  );
};
export default Beans;
