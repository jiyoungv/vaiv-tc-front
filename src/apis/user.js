import useAxios from '@hooks/ajax/useAxios';
import useCatchAsync from '@hooks/ajax/useCatchAsync';

// 사용자 전체 조회
export const getUserAll = async () => await useCatchAsync(useAxios.get(`/test`));

// 특정 사용자 조회
export const getUserInfo = async (data) => await useAxios.post(`/test`, data);

