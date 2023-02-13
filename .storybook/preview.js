import React from 'react';

import '@public/font.css';
import GlobalStyle from '@styles/GlobalStyle';

let modalPortal = document.createElement('div');
modalPortal.setAttribute('id', 'modal-portal');
document.querySelector('body').appendChild(modalPortal);

export const decorators = [(Story) => (
  <>    
    <GlobalStyle />
    <Story />
  </>
)];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}