import { Table, Text } from '.';

export default {
  title: 'common/Table',
  component: Table,
};

const Template = (args) => {
  return (
    <Table {...args}>
      <colgroup>
        <col width="180px" />
        <col />
        <col width="300px" />
        <col width="150px" />
      </colgroup>
      <thead>
        <tr>
          <th>th1-180px</th>
          <th>th2</th>
          <th>th3-300px</th>
          <th>th4-150px</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>내용을 자유롭게 넣어 꾸며주세요</td>
          <td>Table 컴포넌트는 font, border, background, color가 지정되어있어요</td>
          <td>width는 colgroup - col로 지정합니다</td>
          <td>2022.11.11</td>
        </tr>
      </tbody>
    </Table>
  );
}

export const Default = Template.bind({});