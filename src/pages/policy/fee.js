import styled from 'styled-components';
import Image from 'next/image';

import { SubTitle, SubSection } from '@components/common';
import { LnbTarget, SubLayout } from '@components/layout';
import policy_fee_banner from '@public/images/policy_fee_banner.png';

const PolicyFee = () => {
  return (
    <SubLayout>
      <PolicyFeeStyle>
        <LnbTarget id="fee" text="솔루션별 요금">
          <SubTitle title="솔루션별 요금" text="Tech Vridge는 2023년 3월까지 프로모션 이벤트를 진행합니다." mg="0 0 26px" />
        </LnbTarget>
        <SubSection mg="0">
          <figure className="banner-img">
            <Image src={policy_fee_banner} alt="Tech Vridge 3월까지 무료 이용!" />
          </figure>
        </SubSection>
      </PolicyFeeStyle>
    </SubLayout>
  );
};

const PolicyFeeStyle = styled.div`
  .banner-img {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default PolicyFee;