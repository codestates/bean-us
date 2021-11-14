import React from 'react';
import { InnerFrame } from '../../styles/basicFrame/InnerFrame';
import BeanFilter from './BeanFilter';
import BeanInput from './BeanInput';

export default function BeanSearch({ getBeanCards, beanName }) {
  return (
    <InnerFrame>
      <BeanFilter getBeanCards={getBeanCards} />
      <BeanInput beanName={beanName} getBeanCards={getBeanCards} />
    </InnerFrame>
  );
}
