import React from 'react';

const BeanCards = ({ beans }) => {
  return (
    <ul>
      {beans.map((bean) => (
        <li key={bean.beanId}>
          {/* <img src="/asset/beans/bean2.jpg" alt="beanImg" /> */}
          <img src={bean.beanImage} alt="beanImg" />
          <div>{bean.beanName}</div>
          <div>{bean.origin}</div>
          <div>{bean.likeCount}</div>
          <div>{bean.like ? '하트' : '하트아님'}</div>
        </li>
      ))}
    </ul>
  );
};

export default BeanCards;
