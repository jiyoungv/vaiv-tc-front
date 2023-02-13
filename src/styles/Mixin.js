import { css } from 'styled-components';
import Variable from '@styles/Variable';

export const hidden = css`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  padding: 0;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(0px 0px 99.9% 99.9%);
`;

export const hiddenText = css`
  font-size: 0;text-indent: -99999px;
`;

export const hiddenScrollbar = css`
  &::-webkit-scrollbar {display: none;}
`;

export const textEllipsis = (line = 1, lineHeight = 1.4 ) => css`
  overflow: hidden;
  text-overflow: ellipsis;

  ${line === 1
    ? `
      white-space: nowrap;
    `
    : `
      display: -webkit-box;
      max-height: calc(${lineHeight}em * ${line});
      white-space: normal;
      word-wrap: break-word;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `
  }
`;

/**
 * @param {('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')} size 
 */
export const titleVariant = (size) => css`
  font-size: var(--${size});
  line-height: 1.4;
`;

/**
 * @param {('large' | 'middle' | 'base' | 'small' | 'xsmall')} size 
 */
export const textVariant = (size) => css`
  font-size: var(--font-${size});
  ${size === 'large' ? 'line-height: 1.4' : 'line-height: 1.6'};
`;

export const scrollbarStyle = (size = 5) => css`
  &::-webkit-scrollbar {width: calc(${size} * 1px);height: calc(${size} * 1px);}
  &::-webkit-scrollbar-track {background: transparent;}
  &::-webkit-scrollbar-thumb {border-radius: 5em;background: var(--grey300);}
  &::-webkit-scrollbar-thumb:hover {background: var(--grey400);}
`;

export const codeStyle = {
  overflowX: 'hidden', 
  fontFamily: Variable['font-code'],
  fontSize: '12px',
  lineHeight: 1.5, 
  wordBreak: 'break-all'
};