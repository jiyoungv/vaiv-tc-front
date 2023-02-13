import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';
import { RiSearchLine } from 'react-icons/ri';

import { InputText, BoardList, Tab, Flex } from '@components/common';
import { SubLayout } from '@components/layout';
import { tempNoticeData } from '@utils/tempData';
import useInput from '@hooks/useInput';

const tempNotiData = tempNoticeData?.filter(v => v.sort === 0);
const tempEventData = tempNoticeData?.filter(v => v.sort === 1);

const NoticeList = () => {
  // 검색 input
  const [search, onChangeSearch] = useInput('');

  // 검색 input focus 여부
  const [focusSearch, setFocusSearch] = useState(false);

  // 검색 submit
  const onSubmitSearch = useCallback(() => {
    if (search.length === 0) return alert('검색어를 입력해주세요.');
    alert(`TODO: ${search} 검색하기`);
  }, [search]);

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

    if (focusSearch) {
      document.addEventListener('keydown', handler);
    }

    return () => {
      document.removeEventListener('keydown', handler);
    }
  }, [onSubmitSearch, focusSearch]);

  // 탭 handler
  const onChangeTab = useCallback((index) => {
    alert(`activeTabIndex: ${index}`);
  }, []);

  return (
    <SubLayout hideLnb={true}>
      <NoticeListStyle>
        <div className="search">
          <span className="search-input">
            <InputText 
              value={search}
              onChange={onChangeSearch} 
              onFocus={() => setFocusSearch(true)} 
              onBlur={() => setFocusSearch(false)} 
              width="770px" 
              fontSize="middle" 
              placeholder="키워드를 입력하세요." 
            />
            <button type="button" onClick={onClickSearch}>
              <RiSearchLine size={24} />
            </button>
          </span>
        </div>
        <Tab onChange={onChangeTab} item={[
          {
            label: '전체',
            content: <>
              <BoardList data={tempNoticeData} />
            </>
          },
          {
            label: '공지사항',
            content: <>
              <BoardList data={tempNotiData} />
            </>
          },
          {
            label: '이벤트',
            content: <>
              <BoardList data={tempEventData} />
            </>
          },
        ]} />
        <Flex mg="80px 0 0" justifyContent="center">
          <Pagination />
        </Flex>
      </NoticeListStyle>
    </SubLayout>
  );
};

const NoticeListStyle = styled.div`
  .search {
    margin-bottom: 50px;
    text-align: center;

    &-input {
      position: relative;

      button {
        position: absolute;
        top: 50%;
        right: 13px;
        transform: translateY(-50%);
        border: 0;
        background: transparent;
        color: var(--grey800);
      }
    }
  }
`;

export default NoticeList;