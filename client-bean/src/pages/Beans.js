/* eslint-disable react-hooks/exhaustive-deps*/

import React, { useEffect, useState } from 'react';
import BeanCards from '../components/beans/beanCards/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import BeanCardModal from '../components/beans/beanModal/BeanCardModal';
import { getAllBeans } from '../network/beans/http';
import { TopFrame } from '../styles/basicFrame/TopFrame';
import useBeanModal from '../hooks/useBeanModal';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from './LoadingPage';

export default function Beans({ loginId }) {
  const [allBeanName, setAllBeanName] = useState([]);

  const [beans, isLoading, setBeans] = useLoading([], getAllBeans, loginId);
  const [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal] = useBeanModal(beans);

  useEffect(() => {
    let name = beans.map((v) => v.beanName);
    setAllBeanName([...name]);
  }, [isLoading]);

  const getBeanCards = (res) => setBeans([...res.beanList]);

  return (
    <>
      <TopFrame>
        {isLoading ? (
          <LoadingPage content='Loading...' spinner />
        ) : (
          <>
            <div className='title'>원두</div>
            <BeanSearch getBeanCards={getBeanCards} beanName={allBeanName} />
            <BeanCards beans={beans} beanModal={beanModal} loginId={loginId} />
            {openModal && (
              <BeanCardModal
                cardPostInfo={cardPostInfo}
                cardBeanInfo={cardBeanInfo}
                closeModal={closeModal}
              />
            )}
          </>
        )}
      </TopFrame>
    </>
  );
}
