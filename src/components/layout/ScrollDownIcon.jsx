import styled, { css } from 'styled-components';

import { Text } from '@components/common';

// 출처: https://codemyui.com/magic-mouse-scroll-icon/
const ScrollDownIcon = ({ ...props }) => {
  return (
    <ScrollDownIconStyle { ...props }>
      <div className="scroll-down-mouse"></div>
      <Text className="scroll-down-text" size="small">Scroll Down</Text>
    </ScrollDownIconStyle>
  );
};

const localVariable = {
  colorBg: '#010B16',
  colorOutline: '#ffffff',
  colorOutlineFade: '#4e5559',
  
  widthMouse: '28px',
  heightMouse: '50px',
  borderMouse: '2px',
  
  posMouse: '8px',
  posText: '2px',
  
  sizeTrackball: '5px',
  posTrackball: '10px',
  shrinkTrackball: 0.4,
  
  animDuration: '5s',
};

const styleMixin = {
  bgGradient: css`
    background:
      ${localVariable.colorOutlineFade}
      linear-gradient(
        transparent 0%,
        transparent 50%,
        ${localVariable.colorOutline} 50%,
        ${localVariable.colorOutline} 100%
      );
  `
}

const ScrollDownIconStyle = styled.div`
  .scroll-down-text {
    margin-top: 11px;
    animation: 
      colorText ${localVariable.animDuration} ease-out infinite,
      nudgeText ${localVariable.animDuration} ease-out infinite;
  }

  .scroll-down-mouse {
    ${styleMixin.bgGradient};
    position: relative;
    width: ${localVariable.widthMouse};
    height: ${localVariable.heightMouse};
    margin: 0 auto;
    border-radius: 100px;
    background-size: 100% 200%;
    animation: 
      colorSlide ${localVariable.animDuration} linear infinite,
      nudgeMouse ${localVariable.animDuration} ease-out infinite;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      margin: auto;
    }
    &:before {
      width: calc(${localVariable.widthMouse} - ${localVariable.borderMouse});
      height: calc(${localVariable.heightMouse} - ${localVariable.borderMouse});
      background-color: ${localVariable.colorBg};
      border-radius: 100px;
    }
    &:after {
      background-color: ${localVariable.colorOutline};
      width: ${localVariable.sizeTrackball};
      height: ${localVariable.sizeTrackball};
      border-radius: 100%;
      animation: trackBallSlide ${localVariable.animDuration} linear infinite;
    }
  }

  @keyframes colorSlide { 
    0% { background-position: 0% 100%; }
    20% { background-position: 0% 0%; }
    21% { background-color: ${localVariable.colorOutlineFade}; }
    29.99% { 
      background-color: ${localVariable.colorOutline};
      background-position: 0% 0%;
    }
    30% { 
      background-color: ${localVariable.colorOutlineFade};
      background-position: 0% 100%;
    }
    50% { background-position: 0% 0%; }
    51% { background-color: ${localVariable.colorOutlineFade}; }
    59% { 
      background-color: ${localVariable.colorOutline};
      background-position: 0% 0%;
    }
    60% { 
      background-color: ${localVariable.colorOutlineFade};
      background-position: 0% 100%;
    }
    80% { background-position: 0% 0%; }
    81% { background-color: ${localVariable.colorOutlineFade}; }
    90%, 100% { background-color: ${localVariable.colorOutline}; }
  }

  @keyframes trackBallSlide {
    0% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
    6% { 
      opacity: 1;
      transform: scale(0.9) translateY(${localVariable.posTrackball}/4);
    }
    14% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(${localVariable.posTrackball}*2);
    }
    15%, 19% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(-${localVariable.posTrackball});
    }
    28%, 29.99% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
    30% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
    36% { 
      opacity: 1;
      transform: scale(0.9) translateY(${localVariable.posTrackball}/4);
    }
    44% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(${localVariable.posTrackball}*2);
    }
    45%, 49% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(-${localVariable.posTrackball});
    }
    58%, 59.99% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
    60% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
    66% { 
      opacity: 1;
      transform: scale(0.9) translateY(${localVariable.posTrackball}/4);
    }
    74% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(${localVariable.posTrackball}*2);
    }
    75%, 79% {
      opacity: 0;
      transform: scale(${localVariable.shrinkTrackball}) translateY(-${localVariable.posTrackball});
    }
    88%, 100% {
      opacity: 1;
      transform: scale(1) translateY(-${localVariable.posTrackball});
    }
  }

  @keyframes nudgeMouse {
    0% { transform: translateY(0); }
    20% { transform: translateY(${localVariable.posMouse}); }
    30% { transform: translateY(0); }
    50% { transform: translateY(${localVariable.posMouse}); }
    60% { transform: translateY(0); }
    80% { transform: translateY(${localVariable.posMouse}); }
    90% { transform: translateY(0); }
  }

  @keyframes nudgeText {
    0% { transform: translateY(0); }
    20% { transform: translateY(${localVariable.posText}); }
    30% { transform: translateY(0); }
    50% { transform: translateY(${localVariable.posText}); }
    60% { transform: translateY(0); }
    80% { transform: translateY(${localVariable.posText}); }
    90% { transform: translateY(0); }
  }

  @keyframes colorText { 
    21% { color: ${localVariable.colorOutlineFade}; }
    30% { color: ${localVariable.colorOutline}; }
    51% { color: ${localVariable.colorOutlineFade}; }
    60% { color: ${localVariable.colorOutline}; }
    81% { color: ${localVariable.colorOutlineFade}; }
    90% { color: ${localVariable.colorOutline}; }
  }
`;

export default ScrollDownIcon;