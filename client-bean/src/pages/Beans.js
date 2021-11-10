import React, { useEffect, useState } from 'react';
import BeanCards from '../components/beans/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import { getAllBeans, getFilterBeans } from '../network/http';

//db
import { Beandb } from '../db/beandb';

const Beans = (props) => {
  const [beans, setBeans] = useState([]);

  //첫 렌더링 시에는 모든 원두 목록 가져오기
  useEffect(() => {
    // TODO GET 요청 필요
    let res = getAllBeans();
    // setBeans(...res.body)
    console.log(res);

    setBeans([...Beandb]);
  }, []);

  const getBeanCards = (filtering) => {
    // TODO GET 요청 필요
    let res = getFilterBeans(filtering);
    // setBeans([...res.body]);
    console.log(res);
  };

  return (
    <>
      <BeanSearch getBeanCards={getBeanCards} />
      <BeanCards beans={beans} />
    </>
  );
};
export default Beans;
