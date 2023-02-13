import styled from 'styled-components';

import { textVariant } from '@styles/Mixin';

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-top: 1px solid var(--grey300);
  text-align: left;

  tr {
    width: 100%;
    border-bottom: 1px solid var(--grey300);
  }

  th, td {  
    padding: 14px 20px;
    ${textVariant('small')}
  }

  th {
    background: var(--grey100);
    color: var(--grey700);
    font-weight: 700;
  }

  td {
    color: var(--grey800);
  }
`;

export default Table;