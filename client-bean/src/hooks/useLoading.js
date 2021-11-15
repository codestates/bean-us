/* eslint-disable no-unused-vars*/

import { useEffect, useState } from 'react';

//dummy 데이터
import { Beandb } from '../db/beandb';
import { postView } from '../db/postView';

export function useLoading(inital, httpService, arg, loginId) {
  const [nowUser, setNowUser] = useState(loginId);
  const [data, setData] = useState(inital);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setNowUser(loginId);
    if (httpService !== null) {
      //! TODO GET /post?post-id=postId
      httpService.then((res) => {
        setData(res);
        setIsLoading(false);
      });
    } else {
      // 테스트용 setTimeout
      setTimeout(() => {
        setData({ ...postView });
        // setData([...Beandb]);
        setIsLoading(false);
      }, 1000);
    }
  }, [arg]);

  return [data, isLoading, nowUser, setData];
}
