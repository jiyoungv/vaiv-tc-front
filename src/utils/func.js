/** 
 * 빈 데이터 체크 
 * @param {Array} data
 * @returns {boolean}
 * */
export const isEmptyData = (data) => {
  let isEmpty = true;

  if (data === undefined || data === null) return isEmpty;
  if (data?.length === 0) return isEmpty;

  // 여기까지 통과하면 데이터 들어있음
  isEmpty = false;

  return isEmpty;
};

/**
 * 1:1 문의 유형을 한글로 변경
 * @param {string} type 
 * @returns {string}
 */
export const changeInquiryTypeToKR = (type) => {
  let typeKR = '';
  const typeArr = [
    { type: 'solution', kr: '솔루션' },
    { type: 'my', kr: '회원・학습' },
    { type: 'pay', kr: '결제/환불' },
    { type: 'incident', kr: '장애' },
  ];

  for (let x of typeArr) {
    if (type === x.type) typeKR = x.kr;
  }

  return typeKR;
};