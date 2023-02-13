import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { SubTitle, Tab, Flex, Text } from '@components/common';
import { SubLayout, APIGuideDSExtract, APIGuideDSCreate, APIGuideQA } from '@components/layout';

const UseGuide = () => {
  // 가이드 선택
  const [select, setSelect] = useState('ds');

  // 가이드 선택 여부
  const isSelect = useCallback((key) => select === key, [select]);

  // DS 탭 handler
  const onChangeTab = useCallback((index) => {
    // alert(`activeTabIndex: ${index}`);
  }, []);

  return (
    <SubLayout>
      <UseGuideStyle>        
        <SubTitle mg="0 0 30px" title="API 이용 가이드" />
        <div className="switch-wrap">
          <Flex className="switch" justifyContent="center" alignItems="center" gap="5px" mg="0 0 30px" pd="5px" inline>
            {[
              { key: 'ds', text: 'Contextual DS' },
              { key: 'qa', text: 'Contextual QA' },
            ].map((v, i) => (
              <Text key={v.key} className={`text ${isSelect(v.key) ? 'active' : '' }`} size="middle" color="primary-light2" onClick={() => setSelect(v.key)}>
                {v.text}
              </Text>
            ))}
          </Flex>
        </div>
        {select === 'ds' && (
          <Tab 
            onChange={onChangeTab}
            item={[
              {
                label: '추출 요약',
                content: <APIGuideDSExtract />,
              },
              {
                label: '생성 요약',
                content: <APIGuideDSCreate />,
              },
            ]}
          />
        )}
        {select === 'qa' && (
          <APIGuideQA />
        )}
      </UseGuideStyle>
    </SubLayout>
  );
};

const UseGuideStyle = styled.div`
  .switch {
    border-radius: var(--radius2);
    background: var(--primary-light1);
    text-align: center;

    &-wrap {
      text-align: center;
    }

    .text {
      width: 160px;
      padding: 5px 0;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        color: var(--primary);
      }

      &.active {
        color: var(--white);
        background: var(--primary);
        font-weight: 700;
      }
    }
  }
`;

export default UseGuide;