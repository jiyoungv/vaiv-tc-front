import { useEffect, useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { SubTitle, Text, SubSection, InputText, Flex, Callout, Button, Modal, InputRadio } from '@components/common';
import { SubLayout, LnbTarget } from '@components/layout';
import useInput from '@hooks/useInput';

const UseApplySelect = () => {
  const router = useRouter();
  const selectedSolution = useMemo(() => router?.query?.select, [router]);

  // 직접 접근하면 선택 페이지로 이동
  useEffect(() => {
    if (selectedSolution === undefined) {
      router.push('/use/apply');
    }
  }, [selectedSolution]);

  // ip
  const [applyIP, onChangeApplyIP] = useInput('');

  // 사용 환경
  const [applyEnv, setApplyEnv] = useState('pc');
  const isCheckedApplyEnv = useCallback((env) => applyEnv === env, [applyEnv]);
  const onChangeApplyEnv = useCallback((e) => {
    setApplyEnv(e.target.value);
  }, []);

  // 사용 용도
  const [applyPurpose, onChangeApplyPurpose] = useInput('');

  // url
  const [applyURL, onChangeApplyURL] = useInput('');

  // 사용 신청하기 disabled
  const [disabledApply, setDisabledApply] = useState(true);

  // 사용 신청하기 loading
  const [loadingApply, setLoadingApply] = useState(false);

  // 신청 완료 모달 open
  const [openApplyCompleteModal, setOpenApplyCompleteModal] = useState(false);

  // 유효성 체크
  useEffect(() => {
    if (applyIP.length === 0) return;
    if (applyPurpose.length === 0) return;

    setDisabledApply(false);

    return () => {
      setDisabledApply(true);
    }
  }, [applyIP, applyPurpose]);

  // 사용 신청 submit
  const onSubmitApply = useCallback(() => {
    setLoadingApply(true);
    alert(`${selectedSolution}, ${applyIP}, ${applyEnv}, ${applyPurpose}, ${applyURL}`);

    // 성공
    setTimeout(() => {
      setOpenApplyCompleteModal(true);
      setLoadingApply(false);
    }, 2000);
  }, [selectedSolution, applyIP, applyEnv, applyPurpose, applyURL]);

  return (
    <SubLayout>
      <UseApplySelectStyle>        
        <LnbTarget id="apply" text="API Key 발급 신청">
          <SubTitle title="API Key 발급 신청" />
        </LnbTarget>
        <SubSection mg="0">
          <div className="apply-title">
            <Text size="large" color="grey800" bold>Contextual {selectedSolution?.toUpperCase()} 사용 신청하기 </Text>
            <Text className="text-ps" size="xsmall" color="grey500" bold><em>*</em> 필수입력</Text>
          </div>
          <div className="apply-form">
            <Flex alignItems="center" gap="20px" mg="0 0 30px">
              <Text className="form-label" size="small" color="grey700" bold>신청자 IP <em>*</em></Text>
              <InputText value={applyIP} onChange={onChangeApplyIP} placeholder="API를 요청하는 신청자의 IP를 입력해주세요." width="100%" fontSize="small" />
            </Flex>
            <Flex alignItems="center" gap="20px" mg="0 0 30px">
              <Text className="form-label" size="small" color="grey700" bold>API 사용 환경 <em>*</em></Text>
              <Flex alignItems="center" gap="10px" inline>
                <InputRadio value="pc" name="apply-radio" checked={isCheckedApplyEnv('pc')} onChange={onChangeApplyEnv}>
                  <Text color="grey700" bold mg="0 0 0 8px" inline>PC <Text size="xsmall" inline>(웹)</Text></Text>
                </InputRadio>
                <InputRadio value="mo" name="apply-radio" checked={isCheckedApplyEnv('mo')} onChange={onChangeApplyEnv}>
                  <Text color="grey700" bold mg="0 0 0 8px" inline>모바일 <Text size="xsmall" inline>(앱)</Text></Text>
                </InputRadio>
              </Flex>
            </Flex>
            <Flex alignItems="center" gap="20px" mg="0 0 30px">
              <Text className="form-label" size="small" color="grey700" bold>API 사용 용도 <em>*</em></Text>
              <InputText value={applyPurpose} onChange={onChangeApplyPurpose} placeholder="API를 사용하고자 하는 용도를 입력해주세요." width="100%" fontSize="small" />
            </Flex>
            <Flex alignItems="center" gap="20px" mg="0 0 40px">
              <Text className="form-label" size="small" color="grey700" bold>서비스 URL</Text>
              <InputText value={applyURL} onChange={onChangeApplyURL} placeholder="서비스를 이용 할 URL를 입력해주세요." width="100%" fontSize="small" />
            </Flex>
          </div>
          <Callout list={[
            <>인증키신청을 선택 후 <b>사용 신청하기</b> 버튼을 누르시면 이용신청이 완료되며, 관리자 확인 후 발급됩니다.</>,
            <>신청하신 내용은 <b>마이페이지 &gt; API 인증 정보</b>에서 확인하실 수 있습니다.</>,
          ]}/>
          <Flex justifyContent="center" gap="20px" mg="60px 0 0">
            <Button href="/use/apply" color="grey500" width="190px">취소</Button>
            <Button variant="fill" width="190px" onClick={onSubmitApply} disabled={disabledApply} loading={loadingApply}>사용 신청하기</Button>
          </Flex>
        </SubSection>
      </UseApplySelectStyle>
      {openApplyCompleteModal && ( 
        <Modal 
          title="신청 완료" 
          text="신청이 완료되었습니다."
          onClose={() => setOpenApplyCompleteModal(false)}
          button={{ label: '확인', handler: () => setOpenApplyCompleteModal(false) }}
        />
      )}
    </SubLayout>
  );
};

const UseApplySelectStyle = styled.section`
  .apply-title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--grey800);

    .text-ps {
      position: absolute;
      right: 0;
      bottom: 4px;

      em {
        color: var(--primary);
      }
    }
  }

  .apply-form {
    .form-label {
      flex-shrink: 0;
      width: 100px;

      em {
        color: var(--primary);
      }
    }
  }
`;

export default UseApplySelect;