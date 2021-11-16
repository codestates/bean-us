/* eslint-disable no-unused-vars*/

import React from 'react';
import BeanCards from '../components/beans/beanCards/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import BeanCardModal from '../components/beans/beanModal/BeanCardModal';
import { getAllBeans } from '../network/beans/http';
import { TopFrame } from '../styles/basicFrame/TopFrame';
import useBeanModal from '../hooks/useBeanModal';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from './LoadingPage';

//db
// import { Beandb } from '../db/beandb';

export default function Beans({ loginId }) {
  const [beans, isLoading, setBeans] = useLoading([], getAllBeans());
  console.log('beans', beans, isLoading);
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
          <BeanCards beans={beans} beanModal={beanModal} loginId={loginId} />
          {openModal && (
            <BeanCardModal
              cardPostInfo={cardPostInfo}
              cardBeanInfo={cardBeanInfo}
              closeModal={closeModal}
            />
          )}
        </TopFrame>
      )}
    </>
  );
}
