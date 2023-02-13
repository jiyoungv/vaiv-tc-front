import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextareaAutosize } from '@mui/material';

import { textSizeVariable } from '@styles/Variable';
import { textVariant, scrollbarStyle } from '@styles/Mixin';

const Textarea = ({ maxRows, minRows, readOnly, disabled, fontSize = 'base', placeholder = '입력해주세요.', ...props }) => {
  return (
    <TextareaStyle 
      maxRows={maxRows} 
      minRows={minRows} 
      readOnly={readOnly}
      disabled={disabled}
      fontSize={fontSize} 
      placeholder={placeholder} 
      {...props} 
    />
  );
};

Textarea.propTypes = {
  /** 최대 행의 수 */
  maxRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** 최소 행의 수 */
  minRows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** 읽기 전용 여부 */
  readOnly: PropTypes.bool,
  /** 활성화 여부 */
  disabled: PropTypes.bool,
  /** 글자 크기 */
  fontSize: PropTypes.oneOf(textSizeVariable),
  /** placeholder */
  placeholder: PropTypes.string,
  /** 너비 */
  width: PropTypes.string,
};

const TextareaStyle = styled(TextareaAutosize)`
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid var(--grey300);
  border-radius: var(--radius1);
  color: var(--grey800);
  resize: none;
  ${scrollbarStyle()}
  
  ${({ width }) => width && `width: ${width};`}
  ${({ fontSize }) => textVariant(fontSize)}

  &::placeholder {
    color: var(--grey400);
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

  &:disabled {
    color: var(--grey400);
    cursor: not-allowed;
  }
`;

export default Textarea;