import { useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { Inner, Text, Flex, Select } from '@components/common';
import footer_logo from '@public/images/footer_logo.svg';

const getfamilySiteURL = (value) => {
  const familySite = [
    { value: 'vaiv', url: 'http://www.vaiv.kr/' },
    { value: 'sometrend', url: 'https://some.co.kr/' },
    { value: 'sometrend-biz', url: 'https://biz.some.co.kr/' },
    { value: 'life', url: 'http://www.7outof1000.com/' },
    { value: 'duplanet', url: 'https://www.duplanet.kr/' },
    { value: 'finter', url: 'https://labs.finter.kr/' },
    { value: 'quantit', url: 'https://www.quantit.io/' },
  ];

  return familySite.filter(v => v.value === value)[0].url;
};

const Footer = ({ ...props }) => {
  const onChangeFamilySite = useCallback((value) => {
    if (value === 'select') return;
    
    window.open(getfamilySiteURL(value));
  }, []);

  return (
    <FooterStyle id="footer" {...props}>
      <Inner>
        <Flex justifyContent="space-between">
          <div className="left">
            <div className="company">
              <Text size="small" bold>(주)바이브컴퍼니</Text>
            </div>
            <div className="ceo">
              <Text size="xsmall"><b>대표자</b> 이재용</Text>
            </div>
            <Flex className="info-list" as="ul" alignItems="center">
              <li>
                <Text size="xsmall">서울특별시 용산구 독서당로 97</Text>
              </li>
              <li>
                <Text size="xsmall"><b>TEL.</b> 02-565-0531</Text>
              </li>
              <li>
                <Text size="xsmall"><b>사업자등록번호</b> 120-86-08334</Text>
              </li>
            </Flex>
            <div className="copy">
              <Text size="xsmall">CopyrightⓒVAIV Company inc. All Rights Reserved.</Text>
            </div>
          </div>
          <div className="right">
            <Select theme="dark" width="250px" height="120px" onChange={onChangeFamilySite} option={[
              { value: 'select', label: 'Family Site' },
              { value: 'vaiv', label: '바이브컴퍼니' },
              { value: 'sometrend', label: 'Sometrend' },
              { value: 'sometrend-biz', label: 'Sometrend Biz' },
              { value: 'life', label: '생활변화관측소' },
              { value: 'duplanet', label: '듀플래닛' },
              { value: 'finter', label: 'Finter Labs' },
              { value: 'quantit', label: '퀀팃' },
            ]} />
            <figure className="logo">
              <Image src={footer_logo} alt="VAIV" />
            </figure>
          </div>
        </Flex>
      </Inner>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  padding: 50px 0 48px;
  background: var(--grey900);

  .company {
    margin-bottom: 5px;
    color: var(--grey400);
  }

  .ceo {
    margin-bottom: 5px;
    color: var(--grey600);
  }

  .info-list {
    > li {
      position: relative;
      padding: 0 20px;
      color: var(--grey600);

      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 13px;
        background: var(--grey700);
      }

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;

        &::after {
          display: none;
        }
      }
    }
  }

  .copy {
    margin-top: 20px;
    color: var(--grey600);
  }

  .logo {
    margin-top: 30px;
    text-align: right;
  }
`;

export default Footer;