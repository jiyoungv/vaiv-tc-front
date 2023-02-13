export const subSitemap = [
  {
    kr: '소개',
    en: 'intro',
    depth2: [
      {
        kr: '개요',
        en: 'tech-vridge',
      },
      {
        kr: 'Contextual DS란?',
        en: 'contextual-ds',
      },
      {
        kr: 'Contextual QA란?',
        en: 'contextual-qa',
      },
      {
        kr: 'Contextual CA란?',
        en: 'contextual-ca',
      },
    ]
  },
  {
    kr: '솔루션 체험',
    en: 'experience',
    depth2: [
      {
        kr: 'Contextual DS',
        en: 'contextual-ds',
      },
      {
        kr: 'Contextual QA',
        en: 'contextual-qa',
      },
      {
        kr: 'Contextual CA',
        en: 'contextual-ca',
      },
    ]
  },
  {
    kr: '서비스 정책',
    en: 'policy',
    depth2: [
      {
        kr: '서비스 정책',
        en: 'service',
      },
      {
        kr: '솔루션별 요금',
        en: 'fee',
      },
    ]
  },
  {
    kr: '서비스 이용 신청',
    en: 'use',
    depth2: [
      {
        kr: 'API Key 발급 신청',
        en: 'apply',
      },
      {
        kr: 'API 이용 가이드',
        en: 'guide',
      },
    ]
  },
  {
    kr: '공지사항',
    en: 'notice',
    depth2: [
      {
        kr: '공지사항',
        en: 'list',
      },
    ]
  },
];

export const mySitemap = [
  {
    kr: '마이페이지',
    en: 'my',
    depth2: [
      {
        kr: '계정 정보',
        en: 'info',
      },
      {
        kr: 'API 인증 정보',
        en: 'api',
      },
      {
        kr: '솔루션 이용내역',
        en: 'usage',
      },
      {
        kr: '지식 구축',
        en: 'knowledge-building',
      },
      {
        kr: '1:1 문의',
        en: 'inquiry',
      }
    ]
  },
];

export const allSitemap = [...subSitemap, ...mySitemap];