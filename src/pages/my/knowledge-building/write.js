import { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RiFileUploadLine, RiFile3Line, RiCloseLine, RiDownloadLine } from 'react-icons/ri';

import { Title, Text, Flex, InputText, Button, Modal, Callout } from '@components/common';
import { MyLayout } from '@components/layout';
import useInput from '@hooks/useInput';
import { hidden, textEllipsis } from '@styles/Mixin';

const MyKnowledgeWrite = () => {
  const router = useRouter();
  const fileRef = useRef(null);

  // 학습 데이터명
  const [dataName, onChangeDataName] = useInput('');

  // 파일
  const [file, setFile] = useState(null);
  const onChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);
  const onClickFileButton = useCallback(() => {
    fileRef.current.click();
  }, [fileRef]);

  // 신청 disabled
  const [disabledApply, setDisabledApply] = useState(true);

  // 신청 loading
  const [loadingApply, setLoadingApply] = useState(false);

  // 신청 완료 모달 open
  const [openApplyCompleteModal, setOpenApplyCompleteModal] = useState(false);

  // 유효성 체크
  useEffect(() => {
    if (dataName.length === 0) return;

    setDisabledApply(false);

    return () => {
      setDisabledApply(true);
    }
  }, [dataName]);

  // 신청 submit
  const onSubmitApply = useCallback(() => {
    alert(`${dataName}, ${file?.name}`);
    setLoadingApply(true);

    // 성공
    setTimeout(() => {
      setOpenApplyCompleteModal(true);
      setLoadingApply(false);
    }, 2000);
  }, [dataName, file]);

  // 완료 모달 확인 click
  const onClickApplyCompleteModal = useCallback(() => {
    setOpenApplyCompleteModal(false);
    router.push('/my/knowledge-building');
  }, []);

  return (
    <MyLayout>
      <MyKnowledgeWriteStyle>
        <Title level={6} color="grey800" mg="0 0 10px" bold>지식 구축</Title>
        <Text size="middle" color="grey700" mg="0 0 50px">
          바이브컴퍼니의 솔루션은 지식 구축을 통해 정확도를 향상시킬 수 있습니다. <br/>
          지식 구축은 학습이 필요하기 때문에 유료로 제공하고 있습니다. <br/>
          지식 구축 신청하기를 통해 정확도를 향상시켜보세요.
        </Text>
        <div className="write-title">
          <Text size="large" color="grey800" bold>지식 구축 신청하기</Text>
          <Text className="ps" size="xsmall" color="grey500" bold><em>*</em> 필수입력</Text>
        </div>
        <section className="write-form">
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>학습 데이터 명 <em>*</em></Text>
            <InputText value={dataName} onChange={onChangeDataName} width="100%" fontSize="small" placeholder="학습 데이터의 이름을 입력해주세요. e.g. 판례 데이터" />
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 40px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>파일 첨부</Text>
            <div className="form-file">
              <input type="file" id="file" ref={fileRef} onChange={onChangeFile} />
              {file === undefined || file === null 
                ? <Button variant="soft" color="grey600" width="190px" onClick={onClickFileButton}>파일 업로드<RiFileUploadLine /></Button>
                : (
                  <div className="file-view">
                    <Flex className="file-view-button" as="button" alignItems="center" gap="10px" title={file.name} inline>
                      <RiFile3Line className="icon" size={22} />
                      <Text className="text">{file.name}</Text>
                    </Flex>
                    <Flex 
                      className="file-delete-button" 
                      as="button" 
                      justifyContent="center" 
                      alignItems="center" 
                      onClick={() => setFile(null)}
                    >
                      <RiCloseLine size={20} />
                    </Flex>
                  </div>
                )
              }
            </div>
          </Flex>
          <Callout list={[
            '지식 구축은 10일 이상의 기간이 필요합니다.',
            '파일 첨부는 Json 타입만 지원합니다.',
          ]}>
            <Button className="callout-button" href="/file/test_file.pdf" target="_blank" size="small" color="grey700" mg="6px 0 0 23px">학습 데이터 가이드 파일<RiDownloadLine/></Button>
          </Callout>
          <Flex justifyContent="center" alignItems="center" gap="20px" mg="24px 0 0">
            <Button href="/my/knowledge-building" color="grey500" width="190px">취소</Button>
            <Button variant="fill" width="190px" onClick={onSubmitApply} disabled={disabledApply} loading={loadingApply}>지식 구축 신청하기</Button>
          </Flex>
        </section>
      </MyKnowledgeWriteStyle>
      {openApplyCompleteModal && ( 
        <Modal 
          title="신청 완료" 
          text="신청이 완료되었습니다."
          onClose={() => setOpenApplyCompleteModal(false)}
          button={{ label: '확인', handler: onClickApplyCompleteModal }}
        />
      )}
    </MyLayout>
  );
};

const MyKnowledgeWriteStyle = styled.div`
  .write-title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--grey800);

    .ps {
      position: absolute;
      right: 0;
      bottom: 4px;

      em {
        color: var(--primary);
      }
    }
  }

  .write-form {
    .form-row {
    }

    .form-label {
      flex-shrink: 0;
      width: 100px;

      em {
        color: var(--primary);
      }
    }

    .form-file {
      input {
        ${hidden}
      }

      .file-view {
        position: relative;
      }

      .file-view-button {
        max-width: 190px;
        padding: 9px 10px;
        border: 1px solid var(--grey300);
        border-radius: 3px;
        color: var(--grey600);
        cursor: text;

        .icon {
          flex-shrink: 0;
        }

        .text {
          ${textEllipsis()}
        }
      }

      .file-delete-button {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: var(--grey600);
        color: var(--white);
        transition: background 0.2s;

        &:hover {
          background: var(--grey900);
        }
      }
    }

    .callout-button {
      border-color: var(--grey300);
      background: var(--white);

      &:hover {
        background: var(--grey200);
      }
    }
  }
`;

export default MyKnowledgeWrite;