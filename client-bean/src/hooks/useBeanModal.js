import { useState } from 'react';

export default function useBeanModal(beans) {
  const [cardBeanInfo, setCardBeanInfo] = useState([]);
  const [cardPostInfo, setCardPostInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const beanModal = (beanId, postData) => {
    let modalBean = beans.filter((v) => beanId === v.beanId);
    setCardBeanInfo([...modalBean]);
    setCardPostInfo([...postData]);
    setOpenModal(true);
  };

  const closeModal = (e, op) => {
    if (op || e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return [openModal, cardBeanInfo, cardPostInfo, beanModal, closeModal];
}
