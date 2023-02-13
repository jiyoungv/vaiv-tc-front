import { VennDiagramList, Text } from '.';
import intro_ds_merit_icon1 from '@public/images/intro_ds_merit_icon1.png';
import intro_ds_merit_icon2 from '@public/images/intro_ds_merit_icon2.png';
import intro_ds_merit_icon3 from '@public/images/intro_ds_merit_icon3.png';
import intro_ds_merit_icon4 from '@public/images/intro_ds_merit_icon4.png';

export default {
  title: 'common/VennDiagramList',
  component: VennDiagramList,
};

const Template = (args) => <VennDiagramList {...args} />;

export const List = Template.bind({});
List.args = {
  list: [
    { 
      icon: intro_ds_merit_icon1.src,
      title: '국내 최고 기술력', 
      text: <>
        400억 건 이상의 빅데이터 기반 <br/>
        22년간 연구해온 자연어 처리 기술 <br/>
        및 최신딥러닝 기술 적용
      </>,
    },
    { 
      icon: intro_ds_merit_icon2.src,
      title: '문서 요약 성능 1위', 
      text: <>
        DACON 한국어 문서 추출 요약 <br/>
        AI 경진대회<Text size="xsmall" inline>(비공식)</Text> 리더보드 <br/>
        1, 2위 달성 <br/>
        <Text size="xsmall" inline>*공식 리더보드 1위보다 <br/>
        높은 정확도</Text>
      </>,
    },
    { 
      icon: intro_ds_merit_icon3.src,
      title: '빠른 응답 속도', 
      text: <>
        1초도 걸리지 않는 문서 요약 속도 <br/>
        <Text size="xsmall" inline>* 한국어 추출요약 CPU 기준 0.6초</Text>
      </>,
    },
    { 
      icon: intro_ds_merit_icon4.src,
      title: '영문 요약 기능 제공', 
      text: <>
        한국어뿐만이 아닌 <br/>
        영어로 된 문서도 요약 기능을 제공
      </>,
    },
  ],
};

export const Label = Template.bind({});
Label.args = {
  ...List.args,
  label: 'Contextual DS',
};