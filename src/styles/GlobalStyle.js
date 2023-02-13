import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { rootVariable } from '@styles/Variable';
import { hiddenScrollbar } from '@styles/Mixin';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${rootVariable()}

  *, ::before, ::after {
    box-sizing: border-box;
  }

  &::-webkit-scrollbar {width: 8px;height: 8px;}
  &::-webkit-scrollbar-track {background: var(--grey200);}
  &::-webkit-scrollbar-thumb {border-radius: 5em;background: var(--grey300);}
  &::-webkit-scrollbar-thumb:hover {background: var(--grey400);}

  /* html {
    scroll-behavior: smooth;
  } */

  body {
    min-width: calc(var(--inner-width) + var(--gutter) * 2);
    color: #000;
    font-family: var(--font-family);
    font-size: var(--font-base);
    line-height: 1;
    letter-spacing: 0;
    word-break: keep-all;

    &.no-scroll {
      overflow: hidden;
      ${hiddenScrollbar}
    }
  }

  button, input, textarea {
    font: inherit;
  }

  button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  li {
    list-style: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: inline-block;
    vertical-align: top;
  }

  b {
    font-weight: bold;
  }

  .global-img100 {
    img {
      width: 100%;
      height: auto;
    }
  }

  // antd range picker custom
  .global-range-picker {
    padding: 4px 9px;
    border-color: var(--grey300);
    border-radius: var(--radius1);
    font-family: var(--font-family);

    &:hover {
      border-color: var(--primary);
    }

    &.full:hover {
      ~ .global-range-picker-icon {
        opacity: 0;
        pointer-events: none;
      }
    }

    &-wrap {
      position: relative;
    }

    &-icon {
      position: absolute;
      right: 9px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--grey700);
    }

    &-popup {
      font-family: var(--font-family);
    }

    .ant-picker {
      &-focused {
        border-color: var(--primary);
      }

      &-input {
        > input {
          width: 66px;
          color: var(--grey700);
          font-size: var(--font-xsmall);
          font-weight: 700;

          &:hover {
            border-color: var(--primary);
          }
        }
      }
      
      &-active-bar {
        background: var(--primary);
      }
  
      &-range-separator {
        display: inline-flex;
        align-items: center;
        padding: 0 8px;

        svg {
          display: none;
        }
      }

      &-separator {
        width: 10px;
        height: 1px;
        background: var(--grey700);
      }

      &-suffix {
        width: 20px;
        height: 20px;
        margin-left: 12px;

        svg {
          display: none;
        }
      }

      &-clear {
        color: var(--grey700);
        font-size: var(--font-middle);
      }
    }
  }
`;

export default GlobalStyle;