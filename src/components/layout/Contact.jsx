import styled from 'styled-components';

import { Title, Text } from '@components/common';
import { ContactForm, LnbTarget } from '@components/layout';

const Contact = ({ ...props }) => {
  return (
    <ContactStyle {...props}>
      <div className="contact-title">
        <LnbTarget id="contact" text="문의하기">
          <Title className="title" level={5} color="grey800" bold>문의하기</Title>
        </LnbTarget>
        <Text size="middle" color="grey700">
          궁금하신 사항이 있으시면 하단의 문의하기를 이용해주세요. <br/>
          담당자가 자세하게 안내해드리겠습니다.
        </Text>
      </div>
      <ContactForm />
    </ContactStyle>
  );
};

const ContactStyle = styled.article`
  .contact-title {
    margin-bottom: 30px;

    .title {
      margin-bottom: 10px;
    }
  }
`;

export default Contact;