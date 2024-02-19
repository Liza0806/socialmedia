import React from "react";
import "./App.css";
import { Header } from "./layout/Header/Header";
import { SideBar } from "./layout/SideBar/SideBar";
import { Profile } from "./layout/Profile/Profile";
import styled from "styled-components";
import { Dialogs } from "./layout/dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { Music } from "./layout/music/Music";
import { News } from "./layout/news/News";
import { Settings } from "./layout/settings/Settings";

function App() {
  return (
    <AppWrapper>
      <Header />
      <SideBar />
      <MainContentWrapper>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/music" element={<Music />} />
          <Route path="/news" element={<News />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainContentWrapper>
    </AppWrapper>
  );
}

export default App;

export const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    "Header Header"
    "SideBar MainContent"
    "Footer Footer";
`;
export const MainContentWrapper = styled.div`
  grid-area: MainContent;
`;
