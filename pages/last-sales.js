import { useEffect } from 'react';
import useSWR from 'swr';

function LastSalesPage() {
  //* const {data, error} = useSWR('주소', fetcher)

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <ul></ul>;
}

export default LastSalesPage;
