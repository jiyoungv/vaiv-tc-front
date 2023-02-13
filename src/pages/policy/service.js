import styled from 'styled-components';
import parse from 'html-react-parser';

import { Title, SubTitle, SubSection, Text, Flex, Table, Callout } from '@components/common';
import { SubLayout, LnbTarget } from '@components/layout';

const usageList = [
  '로그인 이후 <em>마이페이지</em>로 이동합니다.',
  '<em>[마이페이지 &gt; 솔루션 이용 내역]</em>으로 이동해 조회하고 싶은 월을 선택합니다.',
  '간편하게 해당 월의 요금과 일별 비용을 확인해보세요.',
];

const PolicyService = () => {
  return (
    <SubLayout>
      <PolicyServiceStyle>
        <SubTitle title="서비스 정책" text="Tech Vridge는 다양한 형태로 솔루션을 제공하고 있습니다. 필요에 따라 원하는 방식으로 이용해보세요." />
        <SubSection>
          <LnbTarget id="intro" text="솔루션 제공 방식">
            <Title level={5} color="grey800" mg="0 0 30px" bold>솔루션 제공 방식</Title>
          </LnbTarget>
          <Table className="intro-table">
            <colgroup>
              <col width="180px" />
              <col width="270px" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>제공 형태</th>
                <th>설명</th>
                <th>장점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rest-API 호출</td>
                <td>다양한 AI 솔루션을 Rest-API로 제공</td>
                <td>
                  <ul className="table-list">
                    <li>간편한 API 호출로 최신 AI 기술을 활용할 수 있습니다.</li>
                    <li>별도의 서버를 구축할 필요가 없습니다.</li>
                    <li>별도의 환경 설정이 필요하지 않습니다.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Docker 기반 설치형</td>
                <td>Rest-API로 제공하는 솔루션을 Docker 기반의 설치형 서비스로 제공</td>
                <td>
                  <ul className="table-list">
                    <li>GPU 버전을 맞추는 간단한 작업만으로 솔루션 이용이 가능합니다.</li>
                    <li>별도의 서버에 설치하는 형태로, 솔루션 사용 및 지식 구축에 제한이 없습니다.</li>
                    <li>Rest-API 호출보다 빠른 속도로 솔루션 이용이 가능합니다.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>In-House 구축</td>
                <td>고객의 요구사항에 맞춰 직접 설치 후 서비스를 제공</td>
                <td>
                  <ul className="table-list">
                    <li>고객이 원하는 서비스에 맞춤형으로 제공됩니다.</li>
                    <li>직접 구축을 통해 서비스의 속도와 안정성을 확보할 수 있습니다.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </Table>
          <Callout title="안내사항" list={[
            '솔루션별 비용이 상이하므로 자세한 요금은 솔루션별 요금을 확인해야 합니다.',
            <>Docker 기반 설치형 솔루션은 2023년 3월 제공될 예정입니다. <Text size="xsmall" color="grey500" inline>(일정은 변경될 수 있습니다.)</Text></>,
            'In-House 구축을 원할 경우 문의하기를 통해 별도 협의가 필요합니다.',
          ]} />
        </SubSection>
        <SubSection>
          <LnbTarget id="fee" text="요금안내">
            <Title level={5} color="grey800" mg="0 0 30px" bold>요금안내</Title>
          </LnbTarget>
          <Text size="middle" color="grey700">Tech Vridge는 2023년 3월까지 프로모션 기간으로 해당 기간동안 무료로 이용이 가능합니다.</Text>
          <Text className="fee-text-underline" size="middle" color="grey800" bold>2023년 3월 이후에는 솔루션별 API 호출 건수에 비례해 요금이 부과될 예정입니다.</Text>
        </SubSection>
        <SubSection mg="0">
          <LnbTarget id="usage" text="솔루션 이용량 조회">
            <Title level={5} color="grey800" mg="0 0 30px" bold>솔루션 이용량 조회 안내</Title>
          </LnbTarget>
          <ol className="usage-list">
            {usageList.map((v, i) => (
              <Flex key={i} as="li" gap="13px" mg="0 0 6px">
                <Text className="list-number" size="middle" color="grey700">{i + 1}.</Text>
                <Text className="list-text" size="middle" color="grey700">{parse(v)}</Text>
              </Flex>
            ))}
          </ol>
        </SubSection>
      </PolicyServiceStyle>
    </SubLayout>
  );
};

const PolicyServiceStyle = styled.div`
  .intro-table {
    margin-bottom: 20px;

    .table-list {
      > li {
        position: relative;
        padding-left: calc(9px + 4px + 9px);

        &::before {
          content: '';
          display: block;
          position: absolute;
          top: calc(22px / 2);
          left: 9px;
          transform: translateY(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--grey800);
        }
      }
    }
  }

  .fee-text-underline {
    text-decoration: underline;
  }

  .usage-list {
    .list-number {
      width: 20px;
    }

    .list-text {
      em {
        color: var(--primary);
        font-weight: 700;
      }
    }  
  }
`;

export default PolicyService;