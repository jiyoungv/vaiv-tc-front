import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RiFileUploadLine, RiFile3Line, RiCloseLine } from 'react-icons/ri';

import { Title, Text, Flex, Select, InputText, Textarea, Button, Modal } from '@components/common';
import { MyLayout } from '@components/layout';
import useInput from '@hooks/useInput';
import { hidden, textEllipsis } from '@styles/Mixin';
import { tempMyInquiryData } from '@utils/tempData';

const MyInquiryView = () => {
  const router = useRouter();
  const fileRef = useRef(null);

  // 문의글 번호
  const viewNumber = useMemo(() => router?.query?.view, [router]);

  // 문의글 data
  const viewData = useMemo(() => tempMyInquiryData?.filter(v => v.number === parseInt(viewNumber))[0], [tempMyInquiryData]);
  
  /*===== 삭제 =====*/
  // 삭제하기 모달 open
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // 삭제하기 loading
  const [loadingDelete, setLoadingDelete] = useState(false);

  // 삭제 완료 모달 open
  const [openDeleteCompleteModal, setOpenDeleteCompleteModal] = useState(false);

  // 삭제하기 모달 삭제 click
  const onClickDeleteModal = useCallback(() => {
    setLoadingDelete(true);

    // 성공
    setTimeout(() => {
      setOpenDeleteCompleteModal(true);
      setOpenDeleteModal(false);
      setLoadingDelete(false);
    }, 2000);
  }, []);

  // 삭제 완료 모달 확인 click
  const onClickDeleteCompleteModal = useCallback(() => {
    setOpenDeleteCompleteModal(false);
    router.push('/my/inquiry');
  }, []);

  /*===== 수정 =====*/
  // 수정 모드 여부
  const [editMode, setEditMode] = useState(false);

  // 문의 유형
  const [select, setSelect] = useState(viewData?.type);
  const onChangeSelect = useCallback((value) => {
    setSelect(value);
  }, []);

  // 답변 여부
  const [isAnswer] = useInput(viewData?.isAnswer ? '답변완료' : '접수완료');

  // 문의 제목
  const [title, onChangeTitle] = useInput(viewData?.title);

  // 문의 내용
  const [content, onChangeContent] = useInput(viewData?.content);

  // 답변
  const [answer, onChangeAnswer] = useInput(viewData?.answer);

  // 파일
  const [file, setFile] = useState(viewData?.file);
  const onChangeFile = useCallback((e) => {
    setFile(e.target.files[0]);
  }, []);
  const onClickFileButton = useCallback(() => {
    fileRef.current.click();
  }, [fileRef]);

  // 수정 disabled
  const [disabledEdit, setDisabledEdit] = useState(true);

  // 수정 loading
  const [loadingEdit, setLoadingEdit] = useState(false);

  // 수정 완료 모달 open
  const [openEditCompleteModal, setOpenEditCompleteModal] = useState(false);

  // 유효성 체크
  useEffect(() => {
    if (title?.length === 0) return;
    if (content?.length === 0) return;

    setDisabledEdit(false);

    return () => {
      setDisabledEdit(true);
    }
  }, [title, content]);

  // 수정 submit
  const onSubmitEdit = useCallback(() => {
    alert(`${select}, ${title}, ${content}, ${file?.name}`);
    setLoadingEdit(true);

    // 성공
    setTimeout(() => {
      setOpenEditCompleteModal(true);
      setLoadingEdit(false);
    }, 2000);
  }, [select, title, content, file]);

  // 수정 완료 모달 확인 click
  const onClickEditCompleteModal = useCallback(() => {
    setOpenEditCompleteModal(false);
    router.push('/my/inquiry');
  }, []);

  return (
    <MyLayout>
      <MyInquiryViewStyle>
        <div className="inquiry-title">
          <Title level={6} color="grey800" bold>1:1 문의</Title>
          {editMode
            ? (
              <Text className="ps" size="xsmall" color="grey500" bold><em>*</em> 필수입력</Text>
            )
            : (
              <Flex className="edit-button-group" alignItems="center" gap="10px">
                <Button variant="fill" size="small" width="54px" onClick={() => setEditMode(true)}>수정</Button>
                <Button color="grey500" size="small" width="54px" onClick={() => setOpenDeleteModal(true)}>삭제</Button>
              </Flex>
            )
          }
        </div>
        <section className="write-form">
          <Flex justifyContent="space-between">
            <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
              <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 유형 {editMode && <em>*</em>}</Text>
              <Select 
                defaultValue={select} 
                readOnly={!editMode}
                onChange={onChangeSelect} 
                size="large" 
                width="330px" 
                option={[
                  { value: 'solution', label: '솔루션' },
                  { value: 'my', label: '회원・학습' },
                  { value: 'pay', label: '결제/환불' },
                  { value: 'incident', label: '장애' },
                ]}
              />
            </Flex>
            {!editMode && (
              <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
                <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>답변 여부 {editMode && <em>*</em>}</Text>
                <InputText value={isAnswer} readOnly width="330px" fontSize="small" />
              </Flex>
            )}
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 제목 {editMode && <em>*</em>}</Text>
            <InputText value={title} onChange={onChangeTitle} readOnly={!editMode} width="100%" fontSize="small" placeholder="제목을 입력해주세요." />
          </Flex>
          <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>문의 내용 {editMode && <em>*</em>}</Text>
            <Textarea value={content} onChange={onChangeContent} readOnly={!editMode} minRows="10" width="100%" fontSize="small" placeholder="문의 내용을 입력해주세요.&#13;&#10;자세하게 작성해주실수록 정확한 답변이 가능합니다." />
          </Flex>
          {!editMode && (
            <Flex className="form-row" alignItems="flex-start" gap="20px" mg="0 0 30px">
              <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>답변</Text>
              <InputText value={answer} onChange={onChangeAnswer} readOnly={!editMode} width="100%" fontSize="small" placeholder="제목을 입력해주세요." />
            </Flex>
          )}
          <Flex className="form-row" alignItems="flex-start" gap="20px">
            <Text className="form-label" size="small" color="grey700" pd="10px 0" bold>파일 첨부</Text>
            <div className="form-file">
              <input type="file" id="file" ref={fileRef} onChange={onChangeFile} />
              {file === undefined || file === null 
                ? editMode 
                  ? <Button variant="soft" color="grey600" width="190px" onClick={onClickFileButton}>파일 업로드<RiFileUploadLine /></Button>
                  : <Text size="small" color="grey700" pd="10px 0">첨부한 파일이 없습니다.</Text>
                : (
                  <div className="file-view">
                    <Flex className="file-view-button" as="button" alignItems="center" gap="10px" title={file?.name} inline>
                      <RiFile3Line className="icon" size={22} />
                      <Text className="text">{file?.name}</Text>
                    </Flex>
                    {editMode && (
                      <Flex 
                        className="file-delete-button" 
                        as="button" 
                        justifyContent="center" 
                        alignItems="center" 
                        onClick={() => setFile(null)}
                      >
                        <RiCloseLine size={20} />
                      </Flex>
                    )}
                  </div>
                )
              }
            </div>
          </Flex>
          {editMode
            ? (
              <Flex justifyContent="center" alignItems="center" gap="20px" mg="60px 0 0">
                <Button href="/my/inquiry" color="grey500" width="190px">취소</Button>
                <Button variant="fill" width="190px" onClick={onSubmitEdit} disabled={disabledEdit} loading={loadingEdit}>수정</Button>
              </Flex>
            )
            : (
              <Flex justifyContent="center" alignItems="center" gap="20px" mg="60px 0 0">
                <Button href="/my/inquiry" color="grey700" width="125px">목록</Button>
              </Flex>
            )
          }
        </section>
      </MyInquiryViewStyle>
      {openDeleteModal && ( 
        <Modal 
          title="삭제하기" 
          text={<>삭제하신 문의는 다시 확인하실 수 없습니다. <br/>정말 삭제하시겠습니까?</>}
          onClose={() => setOpenDeleteModal(false)}
          button={[
            { label: '삭제하기', handler: onClickDeleteModal, loading: loadingDelete },
            { label: '계속 작성하기', handler: () => setOpenDeleteModal(false) },
          ]}
        />
      )}
      {openDeleteCompleteModal && ( 
        <Modal 
          title="삭제 완료" 
          text="삭제가 완료되었습니다."
          onClose={() => setOpenDeleteCompleteModal(false)}
          button={{ label: '확인', handler: onClickDeleteCompleteModal }}
        />
      )}
      {openEditCompleteModal && ( 
        <Modal 
          title="수정 완료" 
          text="수정이 완료되었습니다."
          onClose={() => setOpenEditCompleteModal(false)}
          button={{ label: '확인', handler: onClickEditCompleteModal }}
        />
      )}
    </MyLayout>
  );
};

const MyInquiryViewStyle = styled.div`
  .inquiry-title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--grey800);

    .edit-button-group {
      position: absolute;
      right: 0;
      bottom: 10px;
    }

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

export default MyInquiryView;