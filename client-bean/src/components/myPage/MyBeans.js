import React, { useEffect, useState } from 'react';
import useBeanModal from '../../hooks/useBeanModal';
import { getAllBeans } from '../../network/beans/http';
import { TopFrame } from '../../styles/basicFrame/TopFrame';
import BeanCards from '../beans/beanCards/BeanCards';
import BeanCardModal from '../beans/beanModal/BeanCardModal';

function MyBeans({ loginId }) {
  const [myBeans, setMyBeans] = useState([]);
  const [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal] = useBeanModal(myBeans);

  useEffect(() => {
    // TODO GET 요청
    getAllBeans().then((res) => {
      let filterBeans = res.beanList.filter((my) => my.like);
      setMyBeans([...filterBeans]);
    });
  }, []);

  return (
    <TopFrame>
      <BeanCards beans={myBeans} loginId={loginId} beanModal={beanModal} />
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

export default MyBeans;
