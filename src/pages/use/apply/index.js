import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { RiBracesLine, RiArrowRightSLine } from 'react-icons/ri';
import { rgba } from 'polished';

import { SubTitle, SubSection, Title, Flex, Text, Button, Modal } from '@components/common';
import { SubLayout, LnbTarget } from '@components/layout';
import Variable from '@styles/Variable';

const selectList = [
  {
    key: 'ds',
    name: 'Conutextual DS',
    desc: 'Contextual DS는 문서의 핵심 내용을 파악해 요약해줍니다.',
  },
  {
    key: 'qa',
    name: 'Conutextual QA',
    desc: 'Contextual QA는 유저가 검색한 내용을 이해하고 원하는 답을 찾아줍니다.',
  },
  // { // 챗봇 제외
  //   key: 'ca',
  //   name: 'Conutextual CA',
  //   desc: 'Contextual CA는 궁금하신 내용을 입력하시면 원하는 답을 찾아줍니다.',
  // },
];

const UseApply = () => {
  const router = useRouter();

  // 추가 정보 입력 안내 모달 open
  const [openAddInfoGuideModal, setEpenAddInfoGuideModal] = useState(false);
  
  // 사용 신청하기
  const onClickSelect = useCallback((select) => {
    // 로그인 안했을 때
    // if ('TODO: 로그인 안되있음') {
    //   alert('로그인이 필요합니다.');
    //   router.push('/login');
    //   return;
    // }

    // 추가 정보 입력 안했을 때
    // if ('TODO: 추가 정보 입력 안되있음') {
    //   setEpenAddInfoGuideModal(true);
    //   return;
    // }

    router.push(`/use/apply/${select}`);
  }, []);

  return (
    <SubLayout>
      <UseApplyStyle>        
        <LnbTarget id="apply" text="API Key 발급 신청">
          <SubTitle title="API Key 발급 신청" />
        </LnbTarget>
        <SubSection mg="0">
          <Title level={5} color="grey800" mg="0 0 30px" bold>솔루션 선택</Title>
          <div className="select-list">
            {selectList.map((v, i) => (
              <Flex key={v.key} className="list-item" justifyContent="space-between" alignItems="center" pd="18px 38px" mg="0 0 20px">
                <Flex alignItems="center" gap="23px">
                  <div className="type">
                    <RiBracesLine className="icon" size={40} />
                    <Text size="small" color="primary" bold>Json</Text>
                  </div>
                  <div>
                    <Text size="large" color="grey700" mg="0 0 6px" bold>{v.name}</Text>
                    <Text color="grey600">{v.desc}</Text>
                  </div>
                </Flex>
                <Button onClick={() => onClickSelect(v.key)} fontSize="small">
                  사용 신청하기<RiArrowRightSLine />
                </Button>
              </Flex>
            ))}
          </div>
        </SubSection>
      </UseApplyStyle>
      {openAddInfoGuideModal && (
        <Modal className="add-info-guide-modal" onClose={() => setEpenAddInfoGuideModal(false)} button={[
          { label: '아니오', handler: () => setEpenAddInfoGuideModal(false) },
          { label: '이동하기', handler: () => router.push('/my/info') },
        ]}>
          <AddInfoGuideModalStyle>
            <Text className="text" size="small" color="grey600">
              API 이용을 위해서는 <br/>
              회원님의 추가 정보 입력이 필요합니다. <br/>
              <br/>
              <em>지금 바로 이동하시겠습니까?</em>
            </Text>
          </AddInfoGuideModalStyle>
        </Modal>
      )}
    </SubLayout>
  );
};

const UseApplyStyle = styled.div`
  .select-list {
    .list-item {
      border: 2px solid var(--grey100);
      border-radius: var(--radius2);
      background: var(--grey100);
      transition: all 0.2s;

      .type {
        width: 80px;
        height: 80px;
        padding: 8px 0;
        border-radius: var(--radius1);
        background: ${rgba(Variable.primary, 0.05)};
        text-align: center;

        .icon {
          color: var(--primary);
        }
      }

      &:hover {
        border-color: var(--primary);
        background: var(--white);
      }
    }
  }
`;

const AddInfoGuideModalStyle = styled.div`
  .text {
    text-align: center;

    em {
      color: var(--grey700);
      font-weight: 700;
    }
  }
`;

export default UseApply;