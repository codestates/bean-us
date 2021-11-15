import React, { useEffect, useState } from 'react';
import BeanCards from '../components/beans/beanCards/BeanCards';
import BeanSearch from '../components/beans/BeanSearch';
import BeanCardModal from '../components/beans/beanModal/BeanCardModal';
import { getAllBeans } from '../network/beans/http';
import { TopFrame } from '../styles/basicFrame/TopFrame';
import SignModal from '../components/signModal/SignModal';

//db
// import { Beandb } from '../db/beandb';

export default function Beans({ isLogin, loginHandler, renderModal, modalHandler, saveLoginId }) {
  const [beans, setBeans] = useState([]);
  const [beanName, setBeanName] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [cardPostInfo, setCardPostInfo] = useState([]);
  const [cardBeanInfo, setCardBeanInfo] = useState([]);

  //첫 렌더링 시에는 모든 원두 목록 가져오기
  useEffect(() => {
    // TODO GET 요청
    getAllBeans().then((res) => {
      let name = res.beanList.map((v) => v.beanName);
      setBeans([...res.beanList]);
      setBeanName([...name]);
    });

    //* dummy 데이터기반
    // let name = Beandb.map((v) => v.beanName);
    // setBeans([...Beandb]);
    // setBeanName([...name]);
  }, []);

  const getBeanCards = (res) => {
    //TODO res에 따른 setBeans 설정
    setBeans([...res.beanList]);
    // console.log(res);
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
      <div className='title'>원두</div>
      <BeanSearch getBeanCards={getBeanCards} beanName={beanName} />
      <BeanCards beans={beans} beanModal={beanModal} />
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
  );
}
