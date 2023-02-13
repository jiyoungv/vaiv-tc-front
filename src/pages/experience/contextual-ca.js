import styled from 'styled-components';
import Image from 'next/image';

import { SubTitle, SubSection, Text, Button } from '@components/common';
import { SubLayout, LnbTarget, Chatbot } from '@components/layout';
import experience_ca_banner1 from '@public/images/experience_ca_banner1.png';
import experience_ca_banner2 from '@public/images/experience_ca_banner2.png';

const ExperienceCA = () => {
  return (
    <SubLayout>
      <ExperienceCAStyle>
        <LnbTarget id="experience" text="Contextual CA 체험하기" fontSize="small">
          <SubTitle title="Contextual CA 체험하기" text="경제, 금융, 주식 관련해서 궁금하신 질문을 입력하시면, 바이브의 금융 AI 챗봇이 원하는 답을 찾아줍니다." />
        </LnbTarget>
        <SubSection mg="0 0 130px">
          <div className="chatbot-wrap">
            <Chatbot />
          </div>
        </SubSection>
        <div className="experience-banner">
          <Image className="banner-img banner-img1" src={experience_ca_banner1} width={236} alt="" />
          <Image className="banner-img banner-img2" src={experience_ca_banner2} width={174} alt="" />
          <div className="banner-content">
            <Text size="large" color="white" mg="0 0 20px" bold>바이브의 챗봇이 마음에 드셨다면 지금 바로 만나보세요.</Text>
            <Button className="banner-button" href="http://www.vaiv.kr/" target="_blank" variant="fill" color="white" width="190px" fontSize="small">체험해보기</Button>
          </div>
        </div>
      </ExperienceCAStyle>
    </SubLayout>
  );
};

const ExperienceCAStyle = styled.div`
  .chatbot-wrap {
    padding: 40px 70px 0;
    border-radius: var(--radius2);
    background: var(--grey100);
  }

  .experience-banner {
    position: relative;
    padding: 25px 0;
    border-radius: var(--radius2);
    background: var(--primary-dark1);

    .banner-img {
      position: absolute;
    }

    .banner-img1 {
      top: 13px;
      left: 20px;
    }

    .banner-img2 {
      bottom: 0;
      right: 25px;
    }

    .banner-content {
      text-align: center;
    }

    .banner-button {
      color: var(--primary-dark1);
    }
  }
`;

export default ExperienceCA;