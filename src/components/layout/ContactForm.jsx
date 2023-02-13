import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import { Flex, Text,  InputText, Button, Textarea, Modal } from '@components/common';
import useInput from '@hooks/useInput';

const ContactForm = ({ ...props }) => {
  // 이름
  const [contactName, onChangeContactName] = useInput('');

  // 기업명
  const [contactCompany, onChangeContactCompany] = useInput('');

  // 이메일
  const [contactEmail, onChangeContactEmail] = useInput('');

  // 문의 제목
  const [contactTitle, onChangeContactTitle] = useInput('');

  // 문의 내용
  const [contactContent, onChangeContactContent] = useInput('');

  // 문의하기 버튼 활성화 여부
  const [disabledContact, setDisabledContact] = useState(true);

  // 유효성 체크
  useEffect(() => {
    if (contactName.length === 0) return;
    if (contactCompany.length === 0) return;
    if (contactEmail.length === 0) return;
    if (contactTitle.length === 0) return;
    if (contactContent.length === 0) return;

    setDisabledContact(false);

    return () => {
      setDisabledContact(true);
    }
  }, [contactName, contactCompany, contactEmail, contactTitle, contactContent]);

  // 문의하기 버튼 로딩 여부
  const [loadingContact, setLoadingContact] = useState(false);

  // 문의 완료 모달 오픈 여부
  const [openContactCompleteModal, setOpenContactCompleteModal] = useState(false);

  // 문의하기 submit
  const onSubmitContact = useCallback(() => {
    setLoadingContact(true);
    alert(`${contactName}, ${contactCompany}, ${contactEmail}, ${contactTitle}, ${contactContent}`);

    // 성공
    setTimeout(function () {
      setOpenContactCompleteModal(true);
      setLoadingContact(false);
    }, 2000);
  }, [contactName, contactCompany, contactEmail, contactTitle, contactContent]);

  return (
    <ContactFormStyle {...props}>      
      <Flex className="contact-field" alignItems="flex-start" gap="30px">
        <label className="contact-label" htmlFor="contact-name">
          <Text className="text" color="grey700" bold>이름</Text>
        </label>
        <InputText id="contact-name" value={contactName} onChange={onChangeContactName} width="420px" placeholder="이름을 입력해주세요." />
      </Flex>
      <Flex className="contact-field" alignItems="flex-start" gap="30px">
        <label className="contact-label" htmlFor="contact-company">
          <Text className="text" color="grey700" bold>기업명</Text>
        </label>
        <InputText id="contact-company" value={contactCompany} onChange={onChangeContactCompany} width="420px" placeholder="기업명을 입력해주세요." />
      </Flex>
      <Flex className="contact-field" alignItems="flex-start" gap="30px">
        <label className="contact-label" htmlFor="contact-email">
          <Text className="text" color="grey700" bold>이메일</Text>
        </label>
        <InputText id="contact-email" value={contactEmail} onChange={onChangeContactEmail} width="420px" placeholder="example@example.com" />
      </Flex>
      <Flex className="contact-field" alignItems="flex-start" gap="30px">
        <label className="contact-label" htmlFor="contact-title">
          <Text className="text" color="grey700" bold>문의 제목</Text>
        </label>
        <InputText id="contact-title" value={contactTitle} onChange={onChangeContactTitle} width="420px" placeholder="제목을 입력해주세요." />
      </Flex>
      <Flex className="contact-field" alignItems="flex-start" gap="30px">
        <label className="contact-label" htmlFor="contact-content">
          <Text className="text" color="grey700" bold>문의 내용</Text>
        </label>
        <Textarea id="contact-content" value={contactContent} onChange={onChangeContactContent} minRows={5} width="100%" placeholder="문의 내용을 입력해주세요.&#13;&#10;자세하게 작성해주실수록 정확한 답변이 가능합니다." />
      </Flex>
      <Flex justifyContent="center" mg="22px 0 0">
        <Button variant="fill" width="190px" disabled={disabledContact} loading={loadingContact} onClick={onSubmitContact}>문의하기</Button>
      </Flex>
      {openContactCompleteModal && ( 
        <Modal 
          title="문의 완료" 
          text="문의가 완료되었습니다."
          onClose={() => setOpenContactCompleteModal(false)}
          button={{ label: '확인', handler: () => setOpenContactCompleteModal(false) }}
        />
      )}
    </ContactFormStyle>
  );
};

const ContactFormStyle = styled.article`
  padding: 30px 30px 38px;
  border-radius: var(--radius2);
  background: var(--grey100);

  .contact-field {
    margin-bottom: 20px;
  }

  .contact-label {
    flex-shrink: 0;
    width: 75px;

    .text {
      line-height: 46px;
    }
  }
`;

export default ContactForm;