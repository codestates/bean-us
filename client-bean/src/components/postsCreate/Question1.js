import React from 'react';
import Answer from './slidebox/Answer';
import CreateBox from './slidebox/CreateBox';
import Question from './slidebox/Question';

function Question1() {
  return(
    <div>
      <CreateBox>
        <Question />
        <Answer />
      </CreateBox>
    </div>
  );
}

export default Question1;