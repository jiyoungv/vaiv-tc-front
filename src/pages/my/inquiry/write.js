import { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RiFileUploadLine, RiFile3Line, RiCloseLine } from 'react-icons/ri';

import { Title, Text, Flex, Select, InputText, Textarea, Button, Modal } from '@components/common';
import { MyLayout } from '@components/layout';
import useInput from '@hooks/useInput';
import { hidden, textEllipsis } from '@styles/Mixin';

const MyInquiryWrite = () => {
  const router = useRouter();
  const fileRef = useRef(null);

  // 문의 유형
  const [select, setSelect] = useState('solution');
  const onChangeSelect = useCallback((value) => {
    setSelect(value);
  }, []);

  // 문의 제목
  const [title, onChangeTitle] = useInput('');

  // 문의 내용
  const [content, onChangeContent] = useInput('');

  // 파일
  const [file, setFile] = useState(null);
  const onChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);
  const onClickFileButton = useCallback(() => {
    fileRef.current.click();
  }, [fileRef]);

  // 문의 disabled
  const [disabledInquiry, setDisabledInquiry] = useState(true);

  // 문의 loading
  const [loadingInquiry, setLoadingInquiry] = useState(false);

  // 문의 완료 모달 open
  const [openInquiryCompleteModal, setOpenInquiryCompleteModal] = useState(false);

  // 유효성 체크
  useEffect(() => {
    if (title.length === 0) return;
    if (content.length === 0) return;

    setDisabledInquiry(false);

    return () => {
      setDisabledInquiry(true);
    }
  }, [title, content]);

  // 문의 submit
  const onSubmitInquiry = useCallback(() => {
    alert(`${select}, ${title}, ${content}, ${file?.name}`);
    setLoadingInquiry(true);

    // 성공
    setTimeout(() => {
      setOpenInquiryCompleteModal(true);
      setLoadingInquiry(false);
    }, 2000);
  }, [select, title, content, file]);

  // 완료 모달 확인 click
  const onClickInquiryCompleteModal = useCallback(() => {
    setOpenInquiryCompleteModal(false);
    router.push('/my/inquiry');
  }, []);

  return (
    <MyLayout>
      <MyInquiryWriteStyle>
        <div className="inquiry-title">
          <Title level={6} color="grey800" bold>1:1 문의</Title>
          <Text className="ps" size="xsmall" color="grey500" bold><em>*</em> 필수입력</Text>
        </div>
        <section className="write-form">
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 유형 <em>*</em></Text>
            <Select size="large" width="330px" onChange={onChangeSelect} option={[
              { value: 'solution', label: '솔루션' },
              { value: 'my', label: '회원・학습' },
              { value: 'pay', label: '결제/환불' },
              { value: 'incident', label: '장애' },
            ]} />
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 제목 <em>*</em></Text>
            <InputText value={title} onChange={onChangeTitle} width="100%" fontSize="small" placeholder="제목을 입력해주세요." />
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 내용 <em>*</em></Text>
            <Textarea value={content} onChange={onChangeContent} minRows="10" width="100%" fontSize="small" placeholder="문의 내용을 입력해주세요.&#13;&#10;자세하게 작성해주실수록 정확한 답변이 가능합니다." />
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px">
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
          <Flex justifyContent="center" alignItems="center" gap="20px" mg="60px 0 0">
            <Button href="/my/inquiry" color="grey500" width="190px">취소</Button>
            <Button variant="fill" width="190px" onClick={onSubmitInquiry} disabled={disabledInquiry} loading={loadingInquiry}>확인</Button>
          </Flex>
        </section>
      </MyInquiryWriteStyle>
      {openInquiryCompleteModal && ( 
        <Modal 
          title="문의 완료" 
          text="문의가 완료되었습니다."
          onClose={() => setOpenInquiryCompleteModal(false)}
          button={{ label: '확인', handler: onClickInquiryCompleteModal }}
        />
      )}
    </MyLayout>
  );
};

const MyInquiryWriteStyle = styled.div`
  .inquiry-title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--grey800);

    .ps {
      position: absolute;
      right: 0;
      bottom: 10px;

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
  }
`;

export default MyInquiryWrite;