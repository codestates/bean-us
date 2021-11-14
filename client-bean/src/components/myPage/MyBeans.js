/* eslint-disable no-unused-vars*/
import React, { useEffect, useState } from 'react';

import BeanCards from '../beans/beanCards/BeanCards';
import BeanCardModal from '../beans/beanModal/BeanCardModal';
import { getAllBeans } from '../../network/beans/http';
import { TopFrame } from '../../styles/basicFrame/TopFrame';

export default function MyBeans() {
  const [beans, setBeans] = useState([]);
  const [beanName, setBeanName] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cardPostInfo, setCardPostInfo] = useState([]);
  const [cardBeanInfo, setCardBeanInfo] = useState([]);

  useEffect(() => {
    // TODO GET 요청
    getAllBeans().then((res) => {
      let name = res.beanList.map((v) => v.beanName);
      setBeans([...res.beanList]);
      setBeanName([...name]);
    });
  }, []);

  const getBeanCards = (res) => {
    //TODO res에 따른 setBeans 설정
    setBeans([...res.beanList]);
  };

  const beanModal = (beanId, postData) => {
    let modalBean = beans.filter((v) => beanId === v.beanId);
    setOpenModal(true);
    setCardBeanInfo(modalBean);
    setCardPostInfo(postData);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <TopFrame>
      <BeanCards beans={beans} beanModal={beanModal} />
      {openModal && (
        <BeanCardModal
          cardPostInfo={cardPostInfo}
          cardBeanInfo={cardBeanInfo}
          closeModal={closeModal}
        />
      )}
    </TopFrame>
  );
}
