import styled from 'styled-components';
import PropTypes from 'prop-types';

import { textSizeVariable } from '@styles/Variable';
import { textVariant } from '@styles/Mixin';

const InputText = ({ placeholder = '입력해주세요.', readOnly, disabled, width, fontSize = 'base', ...props }) => {
  return (
    <InputTextStyle 
      placeholder={placeholder} 
      readOnly={readOnly}
      disabled={disabled}
      width={width}
      fontSize={fontSize} 
      {...props} 
    />
  );
};

InputText.propTypes = {
  /** placeholder */
  placeholder: PropTypes.string,
  /** 읽기 전용 여부 */
  readOnly: PropTypes.bool,
  /** 활성화 여부 */
  disabled: PropTypes.bool,
  /** 너비 */
  width: PropTypes.string,
  /** 글자 크기 */
  fontSize: PropTypes.oneOf(textSizeVariable),
};

const InputTextStyle = styled.input.attrs(({}) => ({
  type: 'text',
}))`
  display: inline-block;
  padding: 9px 14px;
  border: 1px solid var(--grey300);
  border-radius: var(--radius1);
  color: var(--grey800);
  
  &::placeholder {
    color: var(--grey300);
  }

  &:focus {
    outline: none;
  }

  &:not(:read-only):focus {
    border-color: var(--primary);
  }

  &:read-only, &:disabled {
    border-color: var(--grey100);
    background: var(--grey100);
  }

  &:read-only {
    color: var(--grey700);
  }

  &:disabled {
    color: var(--grey400);
    cursor: not-allowed;
  }

  ${({ width }) => width && `width: ${width};`}
  ${({ fontSize }) => textVariant(fontSize)}
`;

export default InputText;