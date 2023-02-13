import styled from 'styled-components';

const Inner = styled.div`
  position: relative;
  width: calc(var(--inner-width) + var(--gutter) * 2);
  height: inherit;
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

export default Inner;