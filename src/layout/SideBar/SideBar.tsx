import { NavLink } from "react-router-dom";
import { SB_ItemStyled, SB_ListStyled, SB_NavStyled } from "./SideBar.styled";

type NavLinkPropsType = {
  isActive?: boolean;
};
export function SideBar(props: NavLinkPropsType) {
  return (
    <SB_NavStyled>
      <SB_ListStyled>
        <SB_ItemStyled>
          <NavLink to="/profile">Profile</NavLink>
        </SB_ItemStyled>
        <SB_ItemStyled>
          <NavLink to="/dialogs">Messages</NavLink>
        </SB_ItemStyled>
        <SB_ItemStyled>
          <NavLink to="/news">News</NavLink>
        </SB_ItemStyled>
        <SB_ItemStyled>
          <NavLink to="/music">Music</NavLink>
        </SB_ItemStyled>
        <SB_ItemStyled>
          <NavLink to="/settings">Settings</NavLink>
        </SB_ItemStyled>
      </SB_ListStyled>
    </SB_NavStyled>
  );
}
