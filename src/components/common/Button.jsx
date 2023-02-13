import { useMemo } from 'react';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';
import { RiLoader5Line } from 'react-icons/ri';
import { darken } from 'polished';

import { Flex, Text } from '@components/common';
import Variable, { buttonColorVariable, textSizeVariable } from '@styles/Variable';

const Button = ({ 
  variant = 'line', 
  color = 'primary', 
  size = 'large', 
  href, 
  loading = false, 
  width,
  mg, 
  fontSize, 
  children, 
  ...props 
}) => {
  const textSize = useMemo(() => {
    const defaultSize = 'base';
    let finalSize = defaultSize;

    if (size === 'small') finalSize = 'xsmall';
    if (fontSize) finalSize = fontSize;

    return finalSize;
  }, [size, fontSize]);

  const buttonContent = useMemo(() => (
    <Text className="common-button-text" size={textSize} bold>
      <Flex 
        className={`common-button-text-inner ${loading ? 'hidden' : ''}`} 
        as="span" 
        justifyContent="center" 
        alignItems="center" 
        gap={size === 'small' ? '5px' : '10px'}
      >
        {children}
      </Flex>
      {loading && <RiLoader5Line className="common-button-loader" />}
    </Text>
  ), [textSize, size, loading]);

  if (href) {
    return (
      <LinkStyle variant={variant} color={color} size={size} loading={loading} width={width} mg={mg} href={href} {...props}>
        {buttonContent}
      </LinkStyle>
    );
  }

  return (
    <ButtonStyle variant={variant} color={color} size={size} loading={loading} width={width} mg={mg} {...props}>
      {buttonContent}
    </ButtonStyle>
  );
};

Button.propTypes = {
  /** 종류 */
  variant: PropTypes.oneOf(['line', 'fill', 'soft']),
  /** 색상 */
  color: PropTypes.oneOf(buttonColorVariable),
  /** 크기 */
  size: PropTypes.oneOf(['large', 'small']),
  /** 링크. 해당 props 사용시 a 태그로 변환 */
  href: PropTypes.string,
  /** 로딩 여부 */
  loading: PropTypes.bool,
  /** 비활성화 */
  disabled: PropTypes.bool,
  /** 너비 */
  width: PropTypes.string,
  /** 마진 */
  mg: PropTypes.string,
  /** 폰트 사이즈 */
  fontSize: PropTypes.oneOf(textSizeVariable),
  /** 내용 */
  children: PropTypes.node,
};

const localVariable = {
  darken: 0.1,
};

const loaderAni = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const CommonStyle = css`
  display: inline-block;
  border-radius: 3px;
  transition-property: border, background, color;
  transition-duration: 0.2s;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  .common-button {
    &-text {
      position: relative;
      text-align: center;
      
      svg:not(.loader) {
        transform: translateY(-1px);
      }
    }

    &-text-inner {
      &.hidden {
        opacity: 0;
      }
    }
    
    &-loader {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: ${loaderAni} 0.7s linear infinite;
    }
  }

  ${({ width }) => width && `width: ${width};`}
  ${({ mg }) => mg && `margin: ${mg};`}

  ${({ size }) => {
    if (size === 'large') {
      return `
        padding: 9px 19px;

        .common-button-text {
          svg:not(.loader) {
            width: 22px;
            height: 22px;
          }
        }
      `;
    }
    else if (size === 'small') {
      return `
        padding: 4px 9px;

        .common-button-text {
          svg:not(.loader) {
            width: 20px;
            height: 20px;
          }
        }
      `;
    }
  }};

  ${({ variant, color, loading }) => {
    if (variant === 'line') {
      return `
        border: 1px solid var(--${color});
        background: transparent;
        color: var(--${color});

        &:not(:disabled):hover {
          ${!color.includes('grey') 
            ? `background: var(--${color}-light1);` 
            : `background: var(--grey200);`
          }
        }

        ${loading ? `
          ${!color.includes('grey') 
            ? `background: var(--${color}-light1);` 
            : `background: var(--grey200);`
          }
          pointer-events: none;
        `: ''}

        &:disabled {
          border-color: var(--grey500);
          color: var(--grey500);
        };
      `;
    } else if (variant === 'fill') {
      return `
        border: 1px solid var(--${color});
        background: var(--${color});
        color: var(--white);

        ${color.includes('white') ? `
          color: var(--grey800);
        `:''}

        &:not(:disabled):hover {
          ${!color.includes('grey') && !color.includes('white') ? `
            border-color: var(--${color}-dark1);
            background: var(--${color}-dark1);
          ` : ''}

          ${color.includes('grey') ? `
            border-color: var(--grey900);
            background: var(--grey900);
          ` : ''}

          ${color.includes('white') ? `
            border-color: ${darken(localVariable.darken, Variable.white)};
            background: ${darken(localVariable.darken, Variable.white)};
          `: ''}
        }

        ${loading ? `
          pointer-events: none;

          ${!color.includes('grey') && !color.includes('white') ? `
            border-color: var(--${color}-dark1);
            background: var(--${color}-dark1);
          ` : ''}

          ${color.includes('grey') ? `
            border-color: var(--grey900);
            background: var(--grey900);
          ` : ''}

          ${color.includes('white') ? `
            border-color: ${darken(localVariable.darken, Variable.white)};
            background: ${darken(localVariable.darken, Variable.white)};
          `: ''}
        ` : ''}

        &:disabled {
          border-color: var(--grey300);
          background: var(--grey300);
          color: var(--grey600);
        };
      `;
    } else if (variant === 'soft') {
      return `
        color: var(--${color});

        ${!color.includes('grey') 
          ? `
            border: 1px solid var(--${color}-light1);
            background: var(--${color}-light1);
          ` 
          : `
            border: 1px solid var(--grey200);
            background: var(--grey200);
          `
        }

        &:not(:disabled):hover {
          ${!color.includes('grey') 
            ? `background: var(--${color}-light2);` 
            : `background: var(--grey300);`
          }
        }

        ${loading ? `
          pointer-events: none;

          ${!color.includes('grey') 
            ? `background: var(--${color}-light2);` 
            : `background: var(--grey300);`
          }
        `: ''}

        &:disabled {
          border-color: var(--grey300);
          background: var(--grey300);
          color: var(--grey600);
        };
      `;
    }
  }};
`;

const LinkStyle = styled(Link)`
  ${CommonStyle}
`;

const ButtonStyle = styled.button`
  ${CommonStyle}
`;

export default Button;