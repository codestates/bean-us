/* eslint-disable no-unused-vars*/
/* eslint-disable react-hooks/exhaustive-deps*/

import { useEffect, useState } from 'react';

//dummy 데이터
import { Beandb } from '../db/beandb';
import { postView } from '../db/postView';

export function useLoading(inital, httpService, arg) {
  const [data, setData] = useState(inital);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (httpService !== null) {
      setIsLoading(true);
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
  }, []);

  return [data, isLoading, setData];
}
