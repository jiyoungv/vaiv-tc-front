import axios from 'axios';

const useAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKURL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json; charset=UTF-8",
  },
});

export default useAxios;
