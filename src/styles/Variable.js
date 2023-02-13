import { css } from 'styled-components';

const Variable = {
  /* color */
  'primary': '#0AAFFC',
  'primary-light1': '#E6F7FF',
  'primary-light2': '#B5E7FE',
  'primary-dark1': '#0566B5',
  'primary-dark2': '#013378',

  'purple': '#7740FF',
  'purple-light1': '#E8D8FF',
  'purple-light2': '#B48CFF',
  'purple-dark1': '#4220B7',
  'purple-dark2': '#1E0C7A',

  'green': '#65BF31',
  'green-light1': '#EDFBD6',
  'green-light2': '#B6EB82',
  'green-dark1': '#348918',
  'green-dark2': '#135B09',
  
  'blue': '#3366FF',
  'blue-light1': '#D6E4FF',
  'blue-light2': '#84A9FF',
  'blue-dark1': '#1939B7',
  'blue-dark2': '#091A7A',

  'yellow': '#FFE332',
  'yellow-light1': '#FFFBD6',
  'yellow-light2': '#FFF183',
  'yellow-dark1': '#B79D19',
  'yellow-dark2': '#7A6409',

  'red': '#FF4823',
  'red-light1': '#FFE7D3',
  'red-light2': '#FFA57A',
  'red-dark1': '#B71411',
  'red-dark2': '#7A0616',

  'grey100': '#F9FAFB',
  'grey200': '#F4F6F8',
  'grey300': '#DFE3E8',
  'grey400': '#C4CDD5',
  'grey500': '#919EAB',
  'grey600': '#637381',
  'grey700': '#454F5B',
  'grey800': '#212B36',
  'grey900': '#161C24',

  'white': '#fff',

  /* font */
  // font-family
  'font-family': `'Poppins', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  'font-code': 'Nanum Gothic Coding',

  // font-size
  'h1': '64px',
  'h2': '48px',
  'h3': '44px',
  'h4': '36px',
  'h5': '32px',
  'h6': '28px',

  'font-large': '20px',
  'font-middle': '18px',
  'font-base': '16px',
  'font-small': '14px',
  'font-xsmall': '12px',

  /* z-index */
  'zindex1': 99999, // modal
  'zindex2': 88888, // header
  'zindex3': 77777, // select

  /* layout */
  'inner-width': '1200px',
  'header-height': '70px',
  'gutter': '25px',
  'radius1': '5px',
  'radius2': '10px',
};

export const rootVariable = () => {
  let root = '';

  for (let key in Variable) {
    root += `--${key}: ${Variable[key]};`
  }

  return css`
    :root {
      ${root}
    }
  `;
};

export const colorVariable = [
  'primary', 'primary-light1', 'primary-light2', 'primary-dark1', 'primary-dark2',
  'purple', 'purple-light1', 'purple-light2', 'purple-dark1', 'purple-dark2',
  'green', 'green-light1', 'green-light2', 'green-dark1', 'green-dark2',
  'blue', 'blue-light1', 'blue-light2', 'blue-dark1', 'blue-dark2',
  'yellow', 'yellow-light1', 'yellow-light2', 'yellow-dark1', 'yellow-dark2',
  'red', 'red-light1', 'red-light2', 'red-dark1', 'red-dark2',
  'grey100', 'grey200', 'grey300', 'grey400', 'grey500', 'grey600', 'grey700', 'grey800', 'grey900',
  'white',
];

export const buttonColorVariable = ['primary', 'purple', 'green', 'blue', 'yellow', 'red', 'grey500', 'grey600', 'grey700', 'white'];

export const textSizeVariable = ['large', 'middle', 'base', 'small', 'xsmall'];

export default Variable;