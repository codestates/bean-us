import { useEffect, useState } from 'react';

export function useLoading(inital, httpService, arg) {
  const [data, setData] = useState(inital);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    //! TODO GET /post?post-id=postId
    httpService
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [arg]);

  return [data, isLoading, setData];
}
