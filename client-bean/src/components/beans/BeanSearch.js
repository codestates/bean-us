import React from 'react';
import BeanFilter from './BeanFilter';
import BeanInput from './BeanInput';

const BeanSearch = ({ getBeanCards }) => {
  return (
    <div>
      <BeanFilter getBeanCards={getBeanCards} />
      <BeanInput />
    </div>
  );
};

export default BeanSearch;
