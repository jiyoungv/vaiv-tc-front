import { useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Flex, Inner, SubVisual } from '@components/common';
import { AppLayout, Breadcrumb, Lnb } from '@components/layout';
import usePathInfo from '@hooks/usePathInfo';
import intro_bg from '@public/images/intro_bg.jpg';
import experience_bg from '@public/images/experience_bg.jpg';
import policy_bg from '@public/images/policy_bg.jpg';
import use_bg from '@public/images/use_bg.jpg';
import notice_bg from '@public/images/notice_bg.jpg';

// 비주얼 배경 이미지 
const visualBgArr = [
  { en: 'intro', bg: intro_bg.src },
  { en: 'experience', bg: experience_bg.src },
  { en: 'policy', bg: policy_bg.src },
  { en: 'use', bg: use_bg.src },
  { en: 'notice', bg: notice_bg.src },
];

const SubLayout = ({ hideLnb = false, children, ...props }) => {
  const pathInfo = usePathInfo();

  // 메뉴에 따라 비주얼 배경 이미지 다르게
  const visualBg = useMemo(() => visualBgArr.filter(v => v.en === pathInfo.depth1)[0]?.bg, [pathInfo]);

  return (
    <AppLayout>
      <SubLayoutStyle hideLnb={hideLnb} {...props}>
        <section className="visual-wrap">
          <SubVisual title={pathInfo.depth1Name === '소개' ? '솔루션 소개' : pathInfo.depth1Name} bg={visualBg} />
          <Breadcrumb />
        </section>
        <Inner>
          <Flex justifyContent="space-between" alignItems="flex-start" gap="15px" pd="50px 0 120px">
            {hideLnb || <Lnb />}
            <div id="content">
              {children}
            </div>
          </Flex>
        </Inner>
      </SubLayoutStyle>
    </AppLayout>
  );
};

SubLayout.propTypes = {
  hideLnb: PropTypes.bool,
  children: PropTypes.node,
};

const SubLayoutStyle = styled.div`
  .visual-wrap {
    position: relative;
  }

  #content {
    ${({ hideLnb }) => hideLnb ? `width: 100%;` : `width: calc(100% - 200px - 15px);`}
  }
`;

export default SubLayout;