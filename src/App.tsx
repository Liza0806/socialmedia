import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './layout/Header/Header';
import { SideBar } from './layout/SideBar/SideBar';
import { MainContent } from './layout/MainContent/MainContent';
import { Footer } from './layout/Footer/Footer';
import styled from 'styled-components';

function App() {
  return (
   <AppWrapper>
    <Header/>
    <SideBar/>
    <MainContent/>
    <Footer/>
   </AppWrapper>
  );
}

export default App;

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
  grid-template-areas: 
    "Header Header"
    "SideBar MainContent"
    "Footer Footer";
`;
