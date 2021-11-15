/* eslint-disable no-unused-vars*/

import React, { useState } from 'react';
import BeanCards from '../components/beans/beanCards/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import BeanCardModal from '../components/beans/beanModal/BeanCardModal';
import { getAllBeans } from '../network/beans/http';
import { TopFrame } from '../styles/basicFrame/TopFrame';
import SignModal from '../components/signModal/SignModal';
import useBeanModal from '../hooks/useBeanModal';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from './LoadingPage';

//db
// import { Beandb } from '../db/beandb';

export default function Beans({
  isLogin,
  loginHandler,
  renderModal,
  modalHandler,
  saveLoginId,
  loginId,
}) {
  const [beans, isLoading, setBeans] = useLoading([], getAllBeans());
  console.log('beans', beans, isLoading);
  const [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal] = useBeanModal(beans);

  const getBeanCards = (res) => {
    //TODO res에 따른 setBeans 설정
    setBeans([...res.beanList]);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <TopFrame>
          <div className='title'>원두</div>
          <BeanSearch getBeanCards={getBeanCards} beanName={beans.map((v) => v.beanName)} />
          <BeanCards beans={beans} beanModal={beanModal} loginId={loginId} />
          {openModal && (
            <BeanCardModal
              cardPostInfo={cardPostInfo}
              cardBeanInfo={cardBeanInfo}
              closeModal={closeModal}
            />
          )}
          {renderModal ? (
            <SignModal
              isLogin={isLogin}
              modalHandler={modalHandler}
              saveLoginId={saveLoginId}
              loginHandler={loginHandler}
            />
          ) : null}
        </TopFrame>
      )}
    </>
  );
}
