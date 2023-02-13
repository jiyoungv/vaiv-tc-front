import styled from 'styled-components';

import { Button, Flex, Text, Title, Table } from '@components/common';
import { MyLayout } from '@components/layout';
import { textEllipsis } from '@styles/Mixin';
import { tempMyAPIData } from '@utils/tempData';

const MyAPI = () => {
  return (
    <MyLayout>
      <MyAPIStyle>
        <Title level={6} color="grey800" mg="0 0 40px" bold>API 인증 정보</Title>
        <Table className="my-api-table">
          <colgroup>
            <col width="180px" />
            <col />
            <col width="180px" />
            <col width="180px" />
          </colgroup>
          <thead>
            <tr>
              <th>솔루션명</th>
              <th>API Key</th>
              <th>신청일</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            {tempMyAPIData?.length > 0
              ? tempMyAPIData?.map((v, i) => (
                <tr key={v.key}>
                  <td className="table-name">{v.solution}</td>
                  <td className="table-key">
                    <Flex alignItems="center" gap="10px">
                      <span className="text">{v.key}</span>
                      <Button variant="soft" size="small" onClick={() => alert('TODO: 복사하기 구현해야함')}>복사하기</Button>
                    </Flex>
                  </td>
                  <td className="table-date">{v.date}</td>
                  <td className={`table-state ${v.state === 0 ? 'wait' : ''}`}>{v.state === 0 ? '대기 중': '완료'}</td>
                </tr>
              ))
              : (
                <tr className="no-data">
                  <td colSpan={4}>
                    <Text size="small" color="grey500" mg="20px 0">신청 내역이 없습니다.</Text>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </MyAPIStyle>
    </MyLayout>
  );
};

const MyAPIStyle = styled.div`
  .my-api-table {
    th, td {
      text-align: center;
    }

    .table-key {
      text-align: left;

      .text {
        max-width: calc(100% - 77px);
        ${textEllipsis()}
      }
    }

    .table-state {
      color: var(--grey700);

      &.wait {
        color: var(--grey500);
      }
    }
  }
`;

export default MyAPI;