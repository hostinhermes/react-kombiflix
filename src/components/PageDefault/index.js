import React from 'react';
import styled, { css } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll}
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <ToastContainer />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
