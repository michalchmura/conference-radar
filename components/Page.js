import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Meta from './Meta';


const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  primary: '#e8368f',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: #F5F7FA;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin:  auto;
  padding-top: 10px;
`;

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 10px;
    background: black;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black}
  }
  p {
    font-size: 1.6em;
  }
`;

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>
            {children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
