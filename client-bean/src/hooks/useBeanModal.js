import { useState } from 'react';

export default function useBeanModal(beans) {
  const [openModal, setOpenModal] = useState(false);
  const [cardBeanInfo, setCardBeanInfo] = useState([]);
  const [cardPostInfo, setCardPostInfo] = useState([]);

  const beanModal = (beanId, postData) => {
    let modalBean = beans.filter((v) => beanId === v.beanId);
    setOpenModal(true);
    setCardBeanInfo(modalBean);
    setCardPostInfo(postData);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal];
}
