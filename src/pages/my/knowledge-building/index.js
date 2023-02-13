import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { RiCalendar2Line } from 'react-icons/ri';
import { Pagination } from '@mui/material';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Table, Title, Text, Button, Flex, Select } from '@components/common';
import { MyLayout } from '@components/layout';
import { textEllipsis } from '@styles/Mixin';
import { tempMyKnowData } from '@utils/tempData';

const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY.MM.DD';

const MyKnowledge = () => {
  // 기간 선택
  const [selectRange, setSelectRange] = useState('month');
  const onChangeSelect = useCallback((select) => {
    alert(`activeSelect: ${select}`);
    setSelectRange(select);
  }, []);

  // 달력 선택
  const [selectCalendar, setSelectCalendar] = useState([dayjs('2023/01/01', dateFormat), dayjs('2023/02/01', dateFormat)]);
  const onChangeCalendar = useCallback((dates, info) => {
    // console.log(dates);
    // console.log(info);
    setSelectCalendar(dates);
  }, []);

  return (
    <MyLayout>
      <MyKnowledgeStyle>
        <Title level={6} color="grey800" mg="0 0 10px" bold>지식 구축</Title>
        <Text size="middle" color="grey700" mg="0 0 50px">
          바이브컴퍼니의 솔루션은 지식 구축을 통해 정확도를 향상시킬 수 있습니다. <br/>
          지식 구축은 학습이 필요하기 때문에 유료로 제공하고 있습니다. <br/>
          지식 구축 신청하기를 통해 정확도를 향상시켜보세요.
        </Text>
        <Flex justifyContent="space-between" alignItems="center" gap="20px" mg="0 0 10px">
          <Flex alignItems="center" gap="10px">
            <Text size="large" bold>지식 구축 신청 내역</Text>
            <Flex alignItems="center" gap="10px">
              <Select
                bold
                onChange={onChangeSelect}
                option={[
                  { value: 'month', label: '1개월' },
                  { value: 'year', label: '1년' },
                ]}
              />
              <div className="global-range-picker-wrap">
                <RangePicker
                  className={`global-range-picker ${selectCalendar !== null ? 'full' : ''}`}
                  value={selectCalendar}
                  format={dateFormat}
                  onCalendarChange={onChangeCalendar}
                  popupClassName="global-range-picker-popup"
                  placeholder={['시작일', '종료일']}
                />
                <RiCalendar2Line className="global-range-picker-icon" size={20} />
              </div>
            </Flex>
          </Flex>
          <Button href="/my/knowledge-building/write" variant="fill" size="small">지식 구축 신청하기</Button>
        </Flex>
        <Table className="my-know-table">
          <colgroup>
            <col width="55px" />
            <col />
            <col width="130px" />
            <col width="130px" />
            <col width="130px" />
            <col width="165px" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <Text size="small" bold>No.</Text>
              </th>
              <th>
                <Text size="small" bold>내용</Text>
              </th>
              <th>
                <Text size="small" bold>솔루션명</Text>
              </th>
              <th>
                <Text size="small" bold>등록일</Text>
              </th>
              <th>
                <Text size="small" bold>학습여부</Text>
              </th>
              <th>
                <Text size="small" bold>학습 데이터 인증키</Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {tempMyKnowData?.length > 0
              ? tempMyKnowData?.map((v, i) => (
                <tr key={v.number}>
                  <td className="table-number">
                    <Text className="text" size="small">{v.number}</Text>
                  </td>
                  <td className="table-title">
                    <Text className="text" size="small">{v.title}</Text>
                  </td>
                  <td className="table-solution">
                    <Text className="text" size="small">{v.solution}</Text>
                  </td>
                  <td className="table-date">
                    <Text className="text" size="small">{v.date}</Text>
                  </td>
                  <td className={`table-state ${v.state === 0 ? 'wait' : ''}`}>
                    <Text className="text" size="small" color="grey700">{v.state === 0 ? '학습 대기중' : '학습 완료'}</Text>
                  </td>
                  <td className="table-key">
                    <Text className="text" size="small" color="grey700">{v.key ? v.key : '-'}</Text>
                  </td>
                </tr>
              ))
              : (
                <tr className="no-data">
                  <td colSpan={6}>
                    <Text size="small" color="grey500" mg="20px 0">신청 내역이 없습니다.</Text>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
        {tempMyKnowData?.length > 0 && (
          <Flex justifyContent="center" mg="40px 0 0">
            <Pagination />
          </Flex>
        )}
      </MyKnowledgeStyle>
    </MyLayout>
  );
};

const MyKnowledgeStyle = styled.div`
  .my-know-table {
    th, td {
      text-align: center;
    }

    .table-number,
    .table-solution {
      padding-left: 0;
      padding-right: 0;
    }

    .table-title {
      text-align: left;

      .text {
        ${textEllipsis()}
      }
    }

    .table-state {
      &.wait {
        .text {
          color: var(--grey500);
        }
      }
    }
  }
`;

export default MyKnowledge;