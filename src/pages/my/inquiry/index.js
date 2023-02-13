import { useState, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { RiSearchLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

import { Title, Flex, Table, Button, InputText, Tab, Text, Select } from '@components/common';
import { MyLayout } from '@components/layout';
import useInput from '@hooks/useInput';
import { tempMyInquiryData } from '@utils/tempData';
import { changeInquiryTypeToKR } from '@utils/func';
import { textEllipsis } from '@styles/Mixin';

const MyInquiry = () => {
  const router = useRouter();

  /*===== 검색 =====*/
  // 검색 select
  const [searchSelect, setSearchSelect] = useState('all');

  // 검색 select handler
  const onChangeSearchSelect = useCallback((value) => {
    setSearchSelect(value);
  }, []);

  // 검색 input
  const [searchText, onChangeSearchText] = useInput('');

  // 검색 input focus 여부
  const [focusSearchText, setFocusSearchText] = useState(false);

  // 검색 submit
  const onSubmitSearch = useCallback(() => {
    if (searchText.length === 0) return alert('키워드를 입력하세요.');

    alert(`TODO: ${searchSelect}, ${searchText} 검색하기`);
  }, [searchSelect, searchText]);

  // 검색 click
  const onClickSearch = useCallback(() => {
    onSubmitSearch();
  }, [onSubmitSearch]);

  // 검색 enter
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter') {
        onSubmitSearch();
      }
    }

    if (focusSearchText) {
      document.addEventListener('keydown', handler);
    }

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, [onSubmitSearch, focusSearchText]);

  /*===== 필터 =====*/
  const [filter, setFilter] = useState({ type: 'all', answer: 'all' });

  // 문의유형 탭 handler
  const onChangeTypeTab = useCallback((index) => {
    // alert(`activeTabIndex: ${index}`);
    const typeArr = ['solution', 'my', 'pay', 'incident'];
    const type = index === 0 ? 'all' : typeArr[index - 1];
    
    setFilter({ type, answer: 'all' });
  }, [filter]);
  
  // 답변여부 정렬 click
  const onClickAnswerSort = useCallback((answer) => (e) => {
    setFilter({ ...filter, answer });
  }, [filter]);

  // 문의유형 걸러진 data
  const typeFilteredData = useMemo(() => {
    return filter.type === 'all' ? tempMyInquiryData : tempMyInquiryData?.filter(v => v.type === filter.type);
  }, [filter, tempMyInquiryData]);

  // 답변여부 걸러진 data
  const answerFilteredData = useMemo(() => {
    return filter.answer === 'all' ? typeFilteredData : typeFilteredData?.filter(v => filter.answer === 'y' ? v.isAnswer : !v.isAnswer);
  }, [filter, typeFilteredData]);

  /*===== 기타 =====*/  
  // 문의 click
  const onClickInquiry = useCallback((viewNumber) => (e) => {
    router.push(`/my/inquiry/${viewNumber}`);
  }, []);

  return (
    <MyLayout>
      <MyInquiryStyle>
        <Title level={6} mg="0 0 40px" bold>1:1 문의</Title>
        <Flex className="search" justifyContent="center" mg="0 0 40px">
          <Select 
            className="search-select" 
            defaultValue={searchSelect}
            onChange={onChangeSearchSelect} 
            size="large" 
            width="130px"
            option={[
            { value: 'all', label: '전체' },
            { value: 'title', label: '제목' },
            { value: 'content', label: '내용' },
          ]} />
          <span className="search-input-wrap">
            <InputText
              className="search-input"
              value={searchText}
              onChange={onChangeSearchText} 
              onFocus={() => setFocusSearchText(true)} 
              onBlur={() => setFocusSearchText(false)} 
              width="640px" 
              fontSize="middle" 
              placeholder="키워드를 입력하세요." 
            />
            <button className="search-button" type="button" onClick={onClickSearch}>
              <RiSearchLine className="icon" size={24} />
            </button>
          </span>
        </Flex>
        <section>
          <Tab item={['전체', '솔루션', '회원・학습', '결제/환불', '장애']} onChange={onChangeTypeTab} gutter={20} />
          <Flex justifyContent="space-between" mg="0 0 10px">
            <Flex className="answer-sort" alignItems="center" gap="30px" inline>
              {[
                { sort: 'all', kr: '전체', length: typeFilteredData?.length },
                { sort: 'y', kr: '답변 완료', length: typeFilteredData?.filter(v => v.isAnswer).length },
                { sort: 'n', kr: '접수 완료', length: typeFilteredData?.filter(v => !v.isAnswer).length },
              ].map((v, i) => (
                <Flex key={v.sort} className={`sort-item ${filter.answer === v.sort ? 'active' : ''}`} onClick={onClickAnswerSort(v.sort)} alignItems="center" gap="8px" inline>
                  <Text className="text" size="xsmall" color="grey600">{v.kr}</Text>
                  <Text className="text" size="xsmall" color="grey600">{v.length}건</Text>
                </Flex>
              ))}
            </Flex>
            <Button href="/my/inquiry/write" variant="fill" size="small">1:1 문의 작성하기</Button>
          </Flex>
          <Table className="inquiry-table">
            <colgroup>
              <col width="55px" />
              <col />
              <col width="130px" />
              <col width="130px " />
              <col width="130px" />
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>제목</th>
                <th>문의 유형</th>
                <th>등록일</th>
                <th>답변여부</th>
              </tr>
            </thead>
            <tbody>
              {answerFilteredData?.length > 0 
                ? answerFilteredData?.map((v, i) => (
                  <tr key={v.number} onClick={onClickInquiry(v.number)}>
                    <td><b>{i + 1}</b></td>
                    <td className="align-left title">{v.title}</td>
                    <td>{changeInquiryTypeToKR(v.type)}</td>
                    <td>{v.date}</td>
                    <td className={`answer ${v.isAnswer ? 'active' : ''}`}>{v.isAnswer ? '답변완료' : '접수완료'}</td>
                  </tr>
                ))
                : (
                  <tr className="no-data">
                    <td colSpan={5}>문의 내역이 존재하지 않습니다.</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </section>
        <Flex mg="40px 0 0" justifyContent="center">
          <Pagination />
        </Flex>
      </MyInquiryStyle>
    </MyLayout>
  );
};

const MyInquiryStyle = styled.div`
  .search {
    &-select {
      .common-select-selected {
        border-right: 0;
        border-radius: var(--radius2) 0 0 var(--radius2);
      }
    }

    &-input-wrap {
      position: relative;

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: calc(100% - 4px * 2);
        background: var(--grey300);
      }
    }

    &-input {
      padding-right: calc(24px + 20px + 10px);
      border-left: 0;
      border-radius: 0 var(--radius2) var(--radius2) 0;
    }

    &-button {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);

      .icon {
        color: var(--grey800);
      }
    }
  }

  .answer-sort {
    .sort-item {
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        position: absolute;
        right: -15px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 15px;
        background: var(--grey300);
      }

      &:last-child {
        &::after {
          display: none;
        }
      }

      &.active {
        .text {
          color: var(--grey700);
          font-weight: 700;
        }
      }
    }
  }

  .inquiry-table {
    text-align: center;

    tbody {
      tr {
        cursor: pointer;
      }
    }

    .align-left {
      text-align: left;
    }

    .title {
      ${textEllipsis()};
    }

    .answer {
      color: var(--grey500);

      &.active {
        color: var(--grey700);
      }
    }

    .no-data {
      td {
        padding: 100px 0;
        color: var(--grey500);
        cursor: text;
      }
    }
  }
`;

export default MyInquiry;