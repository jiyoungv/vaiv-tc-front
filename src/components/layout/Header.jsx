import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import Link from 'next/link';
import Image from 'next/image';

import { Flex, Inner } from '@components/common';
import { Gnb, HeaderMember } from '@components/layout';
import logo_white from '@public/images/logo_white.svg';
import logo_black from '@public/images/logo_black.svg';
import Variable from '@styles/Variable';

const Header = ({ type = 'dark', fixed, ...props }) => {
  return (
    <HeaderStyle id="header" type={type} fixed={fixed} {...props}>
      <Inner>
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Flex className="logo" alignItems="center">
            <Link href="/" title="home">
              <Image src={type === 'dark' ? logo_black : logo_white} alt="Tech Vridge" />
            </Link>
          </Flex>
          <Gnb type={type} />
          <HeaderMember type={type} />
        </Flex>
      </Inner>
    </HeaderStyle>
  );
};

Header.propTypes = {
  type: PropTypes.oneOf(['dark', 'white']),
  fixed: PropTypes.bool,
};

const HeaderStyle = styled.header`
  z-index: var(--zindex2);
  top: 0;
  left: 0;
  width: 100%;
  transition: background 0.2s;

  ${({ fixed }) => fixed ? `position: fixed;` : `position: absolute;`}

  ${({ type }) => type === 'dark' && `
    background: ${rgba(Variable.white, 0.9)}; 
    backdrop-filter: blur(2.5px);
  `}

  .logo {
    height: var(--header-height);

    a {
      display: block;
      height: 33px;
    }
  }
`;

export default Header;