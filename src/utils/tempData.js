/* 임시 데이터. 실제 데이터 양식과 차이가 날 수 있음 */

// 내 정보 임시 데이터
export const tempMyInfoData = {
  nickname: 'honggildong',
  email: 'hong@vaiv.kr',
  signupDate: '2022.10.24',
  company: 'vaiv',
  name: '바이브',
  position: '매니저',
};

// 내 API 인증 정보 임시 데이터
export const tempMyAPIData = [
  // state: 0은 대기 중, 1은 완료
  {
    solution: 'Contextual DS',
    key: 'API_Key 1 API_Key 1',
    date: '2022.11.11',
    state: 0,
  },
  {
    solution: 'Contextual QA',
    key: 'API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2 API_Key 2',
    date: '2022.01.01',
    state: 1,
  },
];

// 내 솔루션 이용내역 임시 데이터
export const tempMyUsageData = [
  {
    date: '2022.11.18',
    solution: 'ds',
    count: 5000,
    amount: 1000000,
  },
  {
    date: '2022.11.17',
    solution: 'qa',
    count: 5200,
    amount: 1200000,
  },
  {
    date: '2022.11.16',
    solution: 'ds',
    count: 1000,
    amount: 1053000,
  },
  {
    date: '2022.11.15',
    solution: 'qa',
    count: 1350,
    amount: 1060000,
  },
  {
    date: '2022.11.14',
    solution: 'ds',
    count: 2500,
    amount: 500000,
  },
  {
    date: '2022.11.13',
    solution: 'qa',
    count: 1789,
    amount: 750000,
  },
];

// 내 솔루션 이용내역 차트 임시 데이터
export const tempMyUsageChartData = [
  { date: '10.01', ds: 3000, qa: 500 },
  { date: '10.02', ds: 3700, qa: 100 },
  { date: '10.03', ds: 4200, qa: 2000 },
  { date: '10.04', ds: 2900, qa: 1200 },
  { date: '10.05', ds: 1500, qa: 100 },
  { date: '10.06', ds: 4300, qa: 500 },
  { date: '10.07', ds: 500, qa: 1500 },
  { date: '10.08', ds: 1900, qa: 1200 },
  { date: '10.10', ds: 2200, qa: 2100 },
  { date: '10.11', ds: 2800, qa: 900 },
  { date: '10.12', ds: 3700, qa: 500 },
  { date: '10.13', ds: 2800, qa: 1200 },
  { date: '10.14', ds: 2000, qa: 1500 },
  { date: '10.15', ds: 3900, qa: 200 },
  { date: '10.16', ds: 800, qa: 1000 },
  { date: '10.17', ds: 1500, qa: 900 },
  { date: '10.18', ds: 3100, qa: 2500 },
];

// 내 지식 구축 신청 임시 데이터
export const tempMyKnowData = [
  // state: 0은 대기 중, 1은 완료
  {
    number: 1,
    title: '법률 데이터 지식 구축 요청',
    solution: 'Contextual DS',
    date: '2022.11.11',
    state: 0,
  },
  {
    number: 2,
    title: '판례 데이터 지식 구축 요청',
    solution: 'Contextual QA',
    date: '2022.01.01',
    state: 0,
  },
  {
    number: 3,
    title: '법률 데이터 지식 구축 요청 법률 데이터 지식 구축 요청 법률 데이터 지식 구축 요청 법률 데이터 지식 구축 요청 법률 데이터 지식 구축 요청 법률 데이터 지식 구축 요청',
    solution: 'Contextual DS',
    date: '2022.11.11',
    state: 1,
    key: 'User id_001',
  },
  {
    number: 4,
    title: '법률 데이터 지식 구축 요청',
    solution: 'Contextual QA',
    date: '2022.11.11',
    state: 0,
  },
  {
    number: 5,
    title: '법률 데이터 지식 구축 요청',
    solution: 'Contextual DS',
    date: '2022.11.11',
    state: 0,
  },
];

// 내 1:1 문의 임시 데이터
export const tempMyInquiryData = [
  // type(문의 유형): 솔루션 'solution' | 회원학습 'my' | 결제환불 'pay'| 장애 'incident' 
  {
    number: 6,
    type: 'solution',
    title: '솔루션 이용 방법 문의 드립니다.',
    content: 'Contextual DS를 사용하고자 하는데 API 사용을 위해 필요한 환경이 있나요?',
    answer: '답변입니다 답변입니다 답변입니다',
    isAnswer: true,
    date: '2022.10.25',
    file: { name: 'test_test_test.pdf' },
  },
  {
    number: 5,
    type: 'my',
    title: '학습 데이터 신청했는데 결과가 언제쯤 나올까요? 학습 데이터 신청했는데 결과가 언제쯤 나올까요? 학습 데이터 신청했는데 결과가 언제쯤 나올까요?',
    content: '문의 내용입니다.',
    answer: '문의 주신 내용에 대한 답변을 확인하고 있습니다.',
    isAnswer: false,
    date: '2022.10.24',
  },
  {
    number: 4,
    type: 'pay',
    title: '이번달 솔루션 이용하지 않았는데 비용이 발생했습니다.',
    content: '문의 내용입니다.',
    answer: '문의 주신 내용에 대한 답변을 확인하고 있습니다.',
    isAnswer: false,
    date: '2022.10.23',
    file: { name: 'test_test_test.pdf' },
  },
  {
    number: 3,
    type: 'incident',
    title: 'API 호출을 했는데 응답이 제대로 오지 않습니다.',
    content: '문의 내용입니다.',
    answer: '답변입니다 답변입니다 답변입니다',
    isAnswer: true,
    date: '2022.10.22',
  },
  {
    number: 2,
    type: 'solution',
    title: 'API 관련 문의 드립니다.',
    content: '문의 내용입니다.',
    answer: '문의 주신 내용에 대한 답변을 확인하고 있습니다.',
    isAnswer: false,
    date: '2022.10.21',
    file: { name: 'test_test_test.pdf' },
  },
  {
    number: 1,
    type: 'my',
    title: 'API 관련 문의 드립니다.',
    content: '문의 내용입니다.',
    answer: '답변입니다 답변입니다 답변입니다',
    isAnswer: true,
    date: '2022.10.21',
  },
];

// 자주하는 질문 임시 데이터
export const tempFaqListData = [
  '메타버스의 시장 전망은?',
  '블록체인 시장 전망은?',
  '삼성전자의 반도체 사업 전망이 어떻게 되나요?',
  '겨울철 미세먼지 전망은?',
  '최근 뜨고 있는 여행지는?',
];

// QA 대답 임시 데이터
export const tempQAAnswerData = [
  { 
    answer: '딜로이트는 가상자산, AR·VR·MR, 네트워크, 컴퓨팅 인프라를 포괄하는 글로벌 메타버스 시장이 2021년 1220억 달러(173조 원) 규모에서 2025년 2448억~3928억 달러(341조~555조 원) 규모로 성장할 것이라 전망했다.',
    origin: {
      title: `[창사기획-리얼 메타버스①]미래 플랫폼 패권 경쟁 시작…'게임' 넘어 현실로`,
      text: <>
        메타버스 산업 성장 과도기…메타버스 정의 및 게임과의 구분 모호 글로벌 시장 조사업체들도 앞다퉈 메타버스 산업의 장밋빛 미래를 점친다. 
        <em>딜로이트는 가상자산, AR·VR·MR, 네트워크, 컴퓨팅 인프라를 포괄하는 글로벌 메타버스 시장이 2021년 1220억 달러(173조 원) 규모에서 2025년 2448억~3928억 달러(341조~555조 원) 규모로 성장할 것이라 전망했다. </em>
        스트래티지 애널리틱스도 메타버스 시장이 2025년 매출 기준 2800억 달러(약 399조 원)에 달할 것으로 예측했다. 이에 삼성전자뿐만 아니라 SK, LG, 롯데, 네이버, 카카오 등 국내 대표 기업들도 메타버스 관련 산업 진출을 본격화하고 있다. 정부도 메타버스 산업 육성을 위한 첫 종합 대책을 발표하고 오는 2026년까지 글로벌 메타버스 시장 점유율을 5위까지 높이겠다고 목소리를 높이고 있다. 다만 아직은 산업 초기 성장 단계다. 페이스북이 메타버스 기업을 꿈꾸며 메타로 사명을 변경한 지 1년이 지났지만, 여전히 메타버스의 정의도 명확하지 않다. 2006년에 나온 게임 플랫폼 '로블록스'의 경우 이제와서 메타버스로 규정하기 애매하다는 반론도 나온다.
      </>,
      url: 'https://news.naver.com/',
    }
  },
  { 
    answer: '메타버스 산업은 앞으로도 꾸준히 성장세를 이어가며 올해부터 2030년까지 연평균 44.5% 성장해 2030년에는 1조3000억달러(약 1848조원)까지 몸집을 불릴 것으로 전망된다.',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: '메타버스 산업은 앞으로도 꾸준히 성장세를 이어가며 올해부터 2030년까지 연평균 44.5% 성장해 2030년에는 1조3000억달러(약 1848조원)까지 몸집을 불릴 것으로 전망된다.',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: '메타버스 산업은 앞으로도 꾸준히 성장세를 이어가며 올해부터 2030년까지 연평균 44.5% 성장해 2030년에는 1조3000억달러(약 1848조원)까지 몸집을 불릴 것으로 전망된다.',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: '메타버스 산업은 앞으로도 꾸준히 성장세를 이어가며 올해부터 2030년까지 연평균 44.5% 성장해 2030년에는 1조3000억달러(약 1848조원)까지 몸집을 불릴 것으로 전망된다.',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
];

// QA 대답 임시 데이터2
export const tempQAAnswerData2 = [
  { 
    answer: 'TODO: 최신순 정렬된 데이터',
    origin: {
      title: `[창사기획-리얼 메타버스①]미래 플랫폼 패권 경쟁 시작…'게임' 넘어 현실로`,
      text: <>
        메타버스 산업 성장 과도기…메타버스 정의 및 게임과의 구분 모호 글로벌 시장 조사업체들도 앞다퉈 메타버스 산업의 장밋빛 미래를 점친다. 
        <em>딜로이트는 가상자산, AR·VR·MR, 네트워크, 컴퓨팅 인프라를 포괄하는 글로벌 메타버스 시장이 2021년 1220억 달러(173조 원) 규모에서 2025년 2448억~3928억 달러(341조~555조 원) 규모로 성장할 것이라 전망했다. </em>
        스트래티지 애널리틱스도 메타버스 시장이 2025년 매출 기준 2800억 달러(약 399조 원)에 달할 것으로 예측했다. 이에 삼성전자뿐만 아니라 SK, LG, 롯데, 네이버, 카카오 등 국내 대표 기업들도 메타버스 관련 산업 진출을 본격화하고 있다. 정부도 메타버스 산업 육성을 위한 첫 종합 대책을 발표하고 오는 2026년까지 글로벌 메타버스 시장 점유율을 5위까지 높이겠다고 목소리를 높이고 있다. 다만 아직은 산업 초기 성장 단계다. 페이스북이 메타버스 기업을 꿈꾸며 메타로 사명을 변경한 지 1년이 지났지만, 여전히 메타버스의 정의도 명확하지 않다. 2006년에 나온 게임 플랫폼 '로블록스'의 경우 이제와서 메타버스로 규정하기 애매하다는 반론도 나온다.
      </>,
      url: 'https://news.naver.com/',
    }
  },
  { 
    answer: 'TODO: 최신순 정렬된 데이터',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: 'TODO: 최신순 정렬된 데이터',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: 'TODO: 최신순 정렬된 데이터',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
  { 
    answer: 'TODO: 최신순 정렬된 데이터',
    origin: {
      title: `원문 링크`,
      text: '원문 단락',
      url: 'https://news.daum.net/',
    }
  },
];

// 공지사항 임시 데이터
export const tempNoticeData = [
  // sort: 0은 공지사항, 1은 이벤트
  { 
    number: 5,
    sort: 0, 
    title: 'Tech Vridge 홈페이지 리뉴얼 공지', 
    content: '5번 공지사항 내용입니다. 임시 데이터므로 수정 필요합니다.',
    date: '2022-11-16',
  },
  { 
    number: 4,
    sort: 1, 
    title: '기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트 기다란 제목 테스트', 
    content: '4번 공지사항 내용입니다. 임시 데이터므로 수정 필요합니다.',
    date: '2022-11-15',
  },
  { 
    number: 3,
    sort: 1, 
    title: '메인 공지사항 리스트 수는 5개?', 
    content: '3번 공지사항 내용입니다. 임시 데이터므로 수정 필요합니다.',
    date: '2022-10-14',
  },
  { 
    number: 2,
    sort: 0, 
    title: '공지사항 리스트 수는 10개?', 
    content: '2번 공지사항 내용입니다. 임시 데이터므로 수정 필요합니다.',
    date: '2022-09-13',
  },
  { 
    number: 1,
    sort: 0, 
    title: '게시글3',
    content: '1번 공지사항 내용입니다. 임시 데이터므로 수정 필요합니다.',
    date: '2022-08-12',
  },
];