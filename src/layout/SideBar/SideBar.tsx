import {
  SideBarItemStyled,
  SideBarLinkStyled,
  SideBarListStyled,
  SideBarStyled,
} from "./SideBar.styled";

export function SideBar() {
  return (
    <SideBarStyled>
      <SideBarListStyled>
        <SideBarItemStyled>
          <SideBarLinkStyled href="#">Profile</SideBarLinkStyled>
        </SideBarItemStyled>
        <SideBarItemStyled>
          <SideBarLinkStyled href="#">Messages</SideBarLinkStyled>
        </SideBarItemStyled>
        <SideBarItemStyled>
          <SideBarLinkStyled href="#">News</SideBarLinkStyled>
        </SideBarItemStyled>
        <SideBarItemStyled>
          <SideBarLinkStyled href="#">Music</SideBarLinkStyled>
        </SideBarItemStyled>
        <SideBarItemStyled>
          <SideBarLinkStyled href="#">Settings</SideBarLinkStyled>
        </SideBarItemStyled>
      </SideBarListStyled>
    </SideBarStyled>
  );
}
