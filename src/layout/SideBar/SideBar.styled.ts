import styled from "styled-components";

export const SB_NavStyled = styled.nav`
  grid-area: SideBar;
  background-image: url(https://fonoteka.top/uploads/posts/2021-06/thumbs/1623935631_33-phonoteka_org-p-pattern-telegram-krasivo-34.jpg);
`;
export const SB_ListStyled = styled.ul`
  background-color: #fff;
  border-radius: 22px;
`;
export const SB_ItemStyled = styled.li`
  list-style: none;
  a {
    font-size: 22px;
    font-weight: 400;
    color: #282828;
    padding-bottom: 10px;
    text-decoration: none;
  }
  a.active {
    font-weight: 500;
  }
`;
