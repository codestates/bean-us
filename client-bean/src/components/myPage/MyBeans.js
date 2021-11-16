import React from 'react';
import { getAllBeans } from '../../network/beans/http';
import { TopFrame } from '../../styles/basicFrame/TopFrame';
import BeanCards from '../beans/beanCards/BeanCards';
import BeanCardModal from '../beans/beanModal/BeanCardModal';
import LoadingPage from '../../pages/LoadingPage';
import useBeanModal from '../../hooks/useBeanModal';
import { useLoading } from '../../hooks/useLoading';

function MyBeans({ loginId }) {
  const [mybeans, isLoading] = useLoading([], getAllBeans(), loginId);
  const [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal] = useBeanModal(
    mybeans.filter((my) => my.like)
  );

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <TopFrame>
          <BeanCards
            beans={mybeans.filter((my) => my.like)}
            loginId={loginId}
            beanModal={beanModal}
          />
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

export default MyBeans;
