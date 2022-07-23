import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

const Container = () => {
  const [show, setShow] = useState('');
  const query = 'getData';
  const { isLoading, data, isSuccess, isError } = useQuery(query, async () => {
    const data = await axios('https://xkcd.com/info.0.json');
    const response = data;
    return response;
  });

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setShow(data);
    }
  }, [data, isLoading, isSuccess]);

  console.log('data: ', data);
  console.log('isLoading: ', isLoading);
  console.log('isSuccess: ', isSuccess);
  console.log('isError: ', isError);

  return (
    <>
      <div>aaa</div>
      {show}
    </>
  );
};

export default Container;
