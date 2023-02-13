import { useCallback, useState } from 'react';
import styled from 'styled-components';
import { RiFileExcelLine, RiCalendar2Line } from 'react-icons/ri';
import { Pagination } from '@mui/material';
import dynamic from 'next/dynamic';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Flex, Title, SubSection, Text, Select, Button, Table } from '@components/common';
import { MyLayout } from '@components/layout';
import Variable from '@styles/Variable';
import { tempMyUsageData, tempMyUsageChartData } from '@utils/tempData';

const UsageChart = dynamic(() => import('@components/layout/UsageChart').then(module => module), { ssr: false });

const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY.MM.DD';

const solutionFullName = (solution) => {
  const solutionArr = [
    { key: 'ds', name: 'Contextual DS' },
    { key: 'qa', name: 'Contextual QA' },
  ];

  return solutionArr.filter(v => v.key === solution)[0].name;
};

const MyUsage = () => {
  // 달력 선택
  const [selectCalendar, setSelectCalendar] = useState([dayjs('2023/01/01', dateFormat), dayjs('2023/02/01', dateFormat)]);
  const onChangeCalendar = useCallback((dates, info) => {
    // console.log(dates);
    // console.log(info);
    setSelectCalendar(dates);
  }, []);

  // 솔루션 선택
  const [selectSolution, setSelectSolution] = useState('all');
  const onChangeSelectSolution = useCallback((select) => {
    // alert(`activeSelectSolution: ${select}`);
    setSelectSolution(select);
  }, []);

  const myUsageDetailData = selectSolution === 'all' ? tempMyUsageData : tempMyUsageData?.filter(v => v.solution === selectSolution);

  return (
    <MyLayout>
      <MyUsageStyle>
        <Flex alignItems="center" gap="20px" mg="0 0 40px">
          <Title className="my-usage-title" level={6} color="grey800" bold>솔루션 이용 내역</Title>
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
        <SubSection mg="0 0 70px">
          <Flex className="usage-header" justifyContent="space-between" mg="0 0 30px" pd="10px 20px">
            <Text size="large" color="grey800" bold>솔루션 호출 횟수</Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {[
              { label: '솔루션 전체', count: 973999 },
              { label: 'Contextual DS', count: 0 },
              { label: 'Contextual QA', count: 973999 },
            ].map((v, i) => (
              <div key={i} className="usage-count">
                <Text size="small" color="grey600" mg="0 0 5px">{v.label}</Text>
                <Flex justifyContent="center" alignItems="flex-end" gap="5px">
                  <Title level={5} color={v.count === 0 ? 'grey600' : 'grey900'} bold>{v.count.toLocaleString('ko-KR')}</Title>
                  <Text mg="0 0 4px" color={v.count === 0 ? 'grey600' : 'grey900'} bold>회</Text>
                </Flex>
              </div>
            ))}
          </Flex>
        </SubSection>
        <SubSection mg="0">
          <Flex className="usage-header" justifyContent="space-between" mg="0 0 20px" pd="10px 20px">
            <Text size="large" color="grey800" bold>일일 호출 횟수</Text>
            <Select onChange={onChangeSelectSolution} width="160px" bold option={[
              { value: 'all', label: '전체' },
              { value: 'ds', label: 'Contextual DS' },
              { value: 'qa', label: 'Contextual QA' },
            ]} />
          </Flex>
          <div className="usage-call-section">
            <Text className="usage-dot-title" color="grey700" mg="0 0 20px" bold>일일 호출 현황 그래프</Text>
            <UsageChart data={tempMyUsageChartData} activeSeries={selectSolution} />
          </div>
          <div className="usage-call-section">
            <Flex justifyContent="space-between" alignItems="center" mg="0 0 10px">
              <Text className="usage-dot-title" color="grey700" bold>일일 호출 현황 상세표</Text>
              <Button className="usage-excel-download-button" color="grey700" size="small">
                <RiFileExcelLine className="icon" />솔루션 이용 현황 다운로드
              </Button>
            </Flex>
            <Table className="usage-call-table">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>솔루션명</th>
                  <th>호출 건수</th>
                  <th>청구 금액</th>
                </tr>
              </thead>
              <tbody>
                {myUsageDetailData?.length > 0 
                  ? myUsageDetailData?.map((v, i) => (
                    <tr key={i}>
                      <td>{v.date}</td>
                      <td>{solutionFullName(v.solution)}</td>
                      <td>{v.count.toLocaleString('ko-KR')}</td>
                      <td>{v.amount.toLocaleString('ko-KR')}</td>
                    </tr>
                  ))
                  : (
                    <tr className="usage-call-no-data">
                      <td colSpan={4}>
                        <Text size="small" color="grey500" mg="0 0 35px">
                          아직 이용중인 솔루션이 없습니다. <br/>
                          바이브컴퍼니의 다양한 솔루션을 지금 이용해보세요.
                        </Text>
                        <Button href="/use/apply" variant="fill" width="190px">서비스 이용 신청</Button>
                      </td>
                    </tr>
                  )
               }
              </tbody>
            </Table>
            <Flex justifyContent="center" mg="40px 0 0">
              <Pagination />
            </Flex>
          </div>
        </SubSection>
      </MyUsageStyle>
    </MyLayout>
  );
};

const MyUsageStyle = styled.div`
  .usage {
    &-header {
      border-radius: var(--radius1);
      background: var(--grey100);
    }

    &-count {
      width: 328px;
      text-align: center;
    }

    &-dot-title {
      position: relative;
      padding-left: calc(5px + 10px);

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: calc(${Variable['font-base']} * 1.6 / 2);
        left: 0;
        transform: translateY(-50%);
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--grey700);
      }
    }

    &-excel-download-button {
      border-color: var(--grey300);

      svg {
        color: var(--green);
      }
    }

    &-call-section {
      margin-bottom: 35px;
      padding: 0 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-call-table {
      tr {
        text-align: center;
      }
    }

    &-call-no-data {
      td {
        padding-top: 50px;
        padding-bottom: 50px;
      }
    }
  }
`;

export default MyUsage;