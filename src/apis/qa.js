import useAxios from '@hooks/ajax/useAxios';
import useCatchAsync from '@hooks/ajax/useCatchAsync';


export const getAnswer = async (data) => await useCatchAsync(useAxios.post(`/qa/answer`, data));