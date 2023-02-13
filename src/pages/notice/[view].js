import { useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { BoardTitle, Flex, Button } from '@components/common';
import { SubLayout } from '@components/layout';
import { tempNoticeData } from '@utils/tempData';

const NoticeView = () => {
  const router = useRouter();

  // 현재 게시물 번호
  const viewNumber = useMemo(() => router?.query?.view, [router]);

  // 게시물 data
  const viewData = useMemo(() => tempNoticeData?.filter(v => v.number === parseInt(viewNumber))[0], [tempNoticeData, viewNumber]);

  return (
    <SubLayout hideLnb={true}>
      <NoticeViewStyle>
        <BoardTitle data={viewData}/>
        <div className="content">
          {viewData?.content}
        </div>
        <Flex mg="60px 0 0" justifyContent="center">
          <Button href="/notice/list" width="125px" color="grey700">목록</Button>
        </Flex>
      </NoticeViewStyle>
    </SubLayout>
  );
};

const NoticeViewStyle = styled.div`
  padding-top: 30px;
  border-top: 1px solid #000;

  .content {
    padding: 60px 40px;
    border-bottom: 1px solid var(--grey300);
  }
`;

export default NoticeView;