import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const api = axios.create({
  baseURL: BACKEND_URL,
});

export function useContent() {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const response = api
      .get(`${BACKEND_URL}/content`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }, []);

  return contents;
}
