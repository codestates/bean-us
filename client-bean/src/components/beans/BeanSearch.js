import React from 'react';
import BeanFilter from './BeanFilter';
import BeanInput from './BeanInput';

const BeanSearch = ({ getBeanCards, beanName }) => {
  return (
    <div>
      <BeanFilter getBeanCards={getBeanCards} />
      <BeanInput beanName={beanName} getBeanCards={getBeanCards} />
    </div>
  );
};

export default BeanSearch;
