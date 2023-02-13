import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { SubSection, Title, Text, Table } from '@components/common';
import { LnbTarget } from '@components/layout';
import { codeStyle } from '@styles/Mixin';

const APIGuideQA = ({ ...props }) => {
  return (
    <APIGuideQAStyle {...props}>
      <SubSection>
        <LnbTarget id="basic" text="기본정보">
          <Title level={5} color="grey800" mg="0 0 10px" bold>기본정보</Title>
        </LnbTarget>
        <Text size="middle" color="grey700" mg="0 0 40px">Contextual QA는 문서의 핵심 내용을 파악해 요약해주는 솔루션입니다.</Text>
        <Text size="large" color="grey800" mg="0 0 10px" bold>공통 설정</Text>
        <Text color="grey700" mg="0 0 40px">API 사용을 위해서는 <b>API Key</b>가 필요합니다. <b>[마이페이지 &gt; 계정 정보]</b>에서 확인해주세요.</Text>
        <Text size="large" color="grey800" mg="0 0 10px" bold>API URL</Text>
        <Table>
          <colgroup>
            <col width="370px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>Method</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>POST</td>
              <td>URL</td>
            </tr>
          </tbody>
        </Table>
      </SubSection>
      <SubSection>
        <LnbTarget id="parameter" text="요청인자">
          <Title level={5} color="grey800" mg="0 0 40px" bold>요청인자</Title>
        </LnbTarget>
        <Text size="large" color="grey800" mg="0 0 10px" bold>1. API 호출을 위해 필요한 파라미터</Text>
        <Table>
          <colgroup>
            <col width="200px" />
            <col width="200px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>필드명</th>
              <th>타입</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {[
              { field: 'API Key', type: '문자열', desc: 'API 사용을 위한 고유 Key' },
              { field: '...', type: '...', desc: '...' },
            ].map((v, i) => (
              <tr key={i}>
                <td>{v.field}</td>
                <td>{v.type}</td>
                <td>{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Text size="large" color="grey800" mg="40px 0 10px" bold>2. 호출 예시</Text>
        <SyntaxHighlighter language="javascript" style={a11yDark} wrapLongLines={true} customStyle={codeStyle}>
          {`{
    sort: "prob",
    text: "정부가 9일 신종 코로나바이러스 감염증(코로나19) ‘7차 유행’이 시작됐음을 공식화했다.\\n\\n이상민 행정안전부 장관은 이날 중앙재난안전대책본부 회의에서 “코로나19 유행 규모가 4주째 증가세를 보이며 겨울철 재유행이 본격화하는 양상”이라고 밝혔다. 이상원 중앙방역대책본부(방대본) 역학조사분석단장도 이날 브리핑에서 “현재는 ‘7차 유행’인 상황”이라고 말했다.\\n\\n9일 0시 기준 신규 확진자는 6만2472명으로, 이틀째 6만 명대를 기록했다. 최근 일주일 하루 평균 확진자는 전주 대비 27.5% 증가한 4만2476명이다. 11월 첫째 주 감염재생산지수도 1.21로 전주(1.17)보다 상승해 3주 연속 ‘1’을 넘어섰다. 감염재생산지수는 확진자 1명이 추가 감염시키는 사람 수다. ‘1’ 이상은 유행 확산을 의미한다.\\n\\n이번 겨울철 7차 유행은 여름철 6차 유행과 비슷한 수준일 것으로 전망된다. 방대본은 “7차 유행 규모는 하루 신규 확진자수가 최대 18만 명, 정점 주간 일평균 확진자가 13만 명이었던 여름 유행 수준과 비슷할 것”이라며 “정점은 변이 유입 상황에 따라 12월 또는 그 이후에 도달할 수 있다”고 밝혔다.\\n\\n정부는 일괄적 사회적 거리두기 없이 7차 유행을 관리한다는 방침이다. 9월부터 적용된 입국 전후 유전자증폭(PCR) 검사 폐지는 세계보건기구(WHO)가 지정한 신규 변이가 출현하지 않는 한 유지하기로 했다. 실내 마크스 의무화, 확진자 7일 격리치료는 7차 유행이 안정화될 때까지 계속된다.\\n",
    topk: 3,
}`}
        </SyntaxHighlighter>
      </SubSection>
      <SubSection>
        <LnbTarget id="response" text="응답결과">
          <Title level={5} color="grey800" mg="0 0 40px" bold>응답결과</Title>
        </LnbTarget>
        <Text size="large" color="grey800" mg="0 0 10px" bold>1. API 호출에 성공할 경우 응답 파라미터</Text>
        <Table>
          <colgroup>
            <col width="200px" />
            <col width="200px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>필드명</th>
              <th>타입</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {[
              { field: 'summary', type: '숫자 배열', desc: '뽑힌 문장의 인덱스 배열' },
              { field: 'split_sentences', type: '문자열 배열', desc: 'input document를 split한 문자열 배열' },
              { field: 'prob', type: '숫자 배열', desc: 'summary의 원소 각각에 대응되는 확률/점수' },
              { field: 'time', type: '숫자 배열', desc: '요약하는 데 걸린 시간' },
              { field: 'summary', type: '숫자 배열', desc: '뽑힌 문장의 인덱스 배열' },
            ].map((v, i) => (
              <tr key={i}>
                <td>{v.field}</td>
                <td>{v.type}</td>
                <td>{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Text size="large" color="grey800" mg="40px 0 10px" bold>2. 응답 예시</Text>
        <SyntaxHighlighter language="json" style={a11yDark} wrapLongLines={true} customStyle={codeStyle}>
          {`{
    "summary":[0,1,10],
    "split_sentences":["정부가 9일 신종 코로나바이러스 감염증(코로나19) ‘7차 유행’이 시작됐음을 공식화했다.","이상민 행정안전부 장관은 이날 중앙재난안전대책본부 회의에서 “코로나19 유행 규모가 4주째 증가세를 보이며 겨울철 재유행이 본격화하는 양상”이라고 밝혔다.”,“이상원 중앙방역대책본부(방대본) 역학조사분석단장도 이날 브리핑에서 “현재는 ‘7차 유행’인 상황”이라고 말했다.”,“9일 0시 기준 신규 확진자는 6만2472명으로, 이틀째 6만 명대를 기록했다.”,“최근 일주일 하루 평균 확진자는 전주 대비 27.5% 증가한 4만2476명이다.”,“11월 첫째 주 감염재생산지수도 1.21로 전주(1.17)보다 상승해 3주 연속 ‘1’을 넘어섰다.”,“감염재생산지수는 확진자 1명이 추가 감염시키는 사람 수다.”,“‘1’ 이상은 유행 확산을 의미한다.”,“이번 겨울철 7차 유행은 여름철 6차 유행과 비슷한 수준일 것으로 전망된다.”,“방대본은 “7차 유행 규모는 하루 신규 확진자수가 최대 18만 명, 정점 주간 일평균 확진자가 13만 명이었던 여름 유행 수준과 비슷할 것”이라며 “정점은 변이 유입 상황에 따라 12월 또는 그 이후에 도달할 수 있다”고 밝혔다.”,“정부는 일괄적 사회적 거리두기 없이 7차 유행을 관리한다는 방침이다.”,“9월부터 적용된 입국 전후 유전자증폭(PCR) 검사 폐지는 세계보건기구(WHO)가 지정한 신규 변이가 출현하지 않는 한 유지하기로 했다.”,“실내 마크스 의무화, 확진자 7일 격리치료는 7차 유행이 안정화될 때까지 계속된다."],
    "prob":[1.7709764,1.5383278,1.3855969],
    "time":0.6072964668273926
}`}
        </SyntaxHighlighter>
      </SubSection>
      <SubSection mg="0">
        <LnbTarget id="status" text="API 동작 메시지">
          <Title level={5} color="grey800" mg="0 0 40px" bold>API 동작 메시지</Title>
        </LnbTarget>
        <Text size="large" color="grey800" mg="0 0 10px" bold>1. API 호출 결과 상태에 따른 동작 메시지</Text>
        <Table>
          <colgroup>
            <col width="200px" />
            <col width="200px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>Status</th>
              <th>타입</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {[
              { status: '200', type: '성공', desc: '뽑힌 문장의 인덱스 배열' },
              { status: 'XXX', type: 'Key 오류', desc: 'input document를 split한 문자열 배열' },
              { status: 'XXX', type: '인코딩에러', desc: 'summary의 원소 각각에 대응되는 확률/점수' },
            ].map((v, i) => (
              <tr key={i}>
                <td>{v.status}</td>
                <td>{v.type}</td>
                <td>{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </SubSection>
    </APIGuideQAStyle>
  );
};

const APIGuideQAStyle = styled.div`
`;

export default APIGuideQA;