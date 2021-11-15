/* eslint-disable no-unused-vars*/

import React from 'react';
import BeanCards from '../components/beans/beanCards/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import BeanCardModal from '../components/beans/beanModal/BeanCardModal';
import { getAllBeans } from '../network/beans/http';
import { TopFrame } from '../styles/basicFrame/TopFrame';
import SignModal from '../components/signModal/SignModal';
import useBeanModal from '../hooks/useBeanModal';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from './LoadingPage';

export default function Beans({
  isLogin,
  loginHandler,
  renderModal,
  modalHandler,
  saveLoginId,
  loginId,
}) {
  console.log('beans', loginId);

  const [beans, isLoading, nowUser, setBeans] = useLoading([], getAllBeans(), loginId, loginId);
  const [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal] = useBeanModal(beans);

  const getBeanCards = (res) => {
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
          <BeanCards beans={beans} beanModal={beanModal} loginId={nowUser} />
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
