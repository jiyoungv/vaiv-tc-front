import useAxios from '@hooks/ajax/useAxios';
import useCatchAsync from '@hooks/ajax/useCatchAsync';

// 추출요약
export const getExtSummary = async (data) => await useCatchAsync(useAxios.post(`/summary/extSummary`, data));

// 생성요약
export const getAbsSummary = async (data) => await useCatchAsync(useAxios.post(`/summary/absSummary`, data));

