import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Flex, Title, Text, InputText, Button } from '@components/common';
import { MyLayout } from '@components/layout';
import { tempMyInfoData } from '@utils/tempData';
import useInput from '@hooks/useInput';

const MyInfo = () => {
  // 추가 정보 입력 진행 여부
  const [editAddInfo, setEditAddInfo] = useState(false);

  // 정보 수정하기 버튼 텍스트
  const [addButtonText, setAddButtonText] = useState('정보 입력하기');

  useEffect(() => {
    if (!tempMyInfoData?.company) return;
    if (!tempMyInfoData?.name) return;
    if (!tempMyInfoData?.position) return; // 추가 정보 모두 있어야 함

    setAddButtonText('정보 수정하기');

    return () => {
      setAddButtonText('정보 입력하기');
    }
  }, [tempMyInfoData]);

  // 추가 정보 입력 value & handler
  const [company, onChangeCompany, setCompany] = useInput(tempMyInfoData?.company || '');
  const [name, onChangeName, setName] = useInput(tempMyInfoData?.name || '');
  const [position, onChangePosition, setPosition] = useInput(tempMyInfoData?.position || '');

  const [loadingEdit, setLoadingEdit] = useState(false);

  // 추가 정보 입력 취소
  const onCancleAddInfo = useCallback(() => {
    setEditAddInfo(false),
    setCompany(tempMyInfoData?.company || '');
    setName(tempMyInfoData?.name || '');
    setPosition(tempMyInfoData?.position || '');
  }, []);

  // 추가 정보 입력 submit
  const onSubmitAddInfo = useCallback(() => {
    alert(`${company}, ${name}, ${position}`);
    setLoadingEdit(true);

    // 성공
    setTimeout(() => {
      setLoadingEdit(false);
      setEditAddInfo(false);
    }, 2000);
  }, [company, name, position]);

  return (
    <MyLayout>
      <MyInfoStyle>
        <Title level={6} color="grey800" mg="0 0 30px" bold>계정 정보</Title>
        <ul className="info-list">
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className="label" size="small" color="grey700" bold>닉네임</Text>
              <Text color="grey700">{tempMyInfoData?.nickname}</Text>
            </Flex>
          </li>
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className="label" size="small" color="grey700" bold>이메일</Text>
              <Text color="grey700">{tempMyInfoData?.email}</Text>
            </Flex>
          </li>
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className="label" size="small" color="grey700" bold>가입일</Text>
              <Text color="grey700">{tempMyInfoData?.signupDate}</Text>
            </Flex>
          </li>
        </ul>
        <Flex alignItems="center" gap="10px" mg="0 0 30px">
          <Text size="large" color="grey700" bold>추가 정보 입력</Text>
          {!editAddInfo ? <Button size="small" onClick={() => setEditAddInfo(true)}>{addButtonText}</Button> : null}
        </Flex>
        <ul className={`info-list ${editAddInfo ? 'type2' : ''}`}>
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className={`label ${!tempMyInfoData?.company ? 'empty' : ''}`} size="small" color="grey700" bold>기업명</Text>
              {editAddInfo 
                ? <InputText value={company} onChange={onChangeCompany} placeholder="기업명을 입력해주세요." width="calc(100% - 120px)" fontSize="small"/>
                : tempMyInfoData?.company ? <Text color="grey700" bold>{tempMyInfoData?.company}</Text> : null
              }
            </Flex>
          </li>
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className={`label ${!tempMyInfoData?.name ? 'empty' : ''}`} size="small" color="grey700" bold>이름</Text>
              {editAddInfo 
                ? <InputText value={name} onChange={onChangeName} placeholder="이름을 입력해주세요." width="calc(100% - 120px)" fontSize="small"/>
                : tempMyInfoData?.name ? <Text color="grey700" bold>{tempMyInfoData?.name}</Text> : null
              }
            </Flex>
          </li>
          <li>
            <Flex alignItems="center" gap="20px">
              <Text className={`label ${!tempMyInfoData?.position ? 'empty' : ''}`} size="small" color="grey700" bold>직급</Text>
              {editAddInfo 
                ? <InputText value={position} onChange={onChangePosition} placeholder="직급을 입력해주세요." width="calc(100% - 120px)" fontSize="small"/>
                : tempMyInfoData?.position ? <Text color="grey700" bold>{tempMyInfoData?.position}</Text> : null
              }
            </Flex>
          </li>
        </ul>
        {editAddInfo &&
          <Flex justifyContent="center" alignItems="center" gap="20px">
            <Button width="190px" size="large" color="grey500" onClick={onCancleAddInfo}>취소</Button>
            <Button width="190px" variant="fill" size="large" onClick={onSubmitAddInfo} loading={loadingEdit}>확인</Button>
          </Flex>
        }
      </MyInfoStyle>
    </MyLayout>
  );
};

const MyInfoStyle = styled.div`
  .label {
    width: 100px;
    padding: 10px 0;

    &.empty {
      color: var(--grey400);
    }
  }

  .info-list {
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }

    &.type2 {
      > li {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default MyInfo;