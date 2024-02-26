import { StyledBtn, StyledBtnPropsType } from "./Button.styled"

export const Button = (props: StyledBtnPropsType) =>{
    return (
        <StyledBtn onClick={props.onClick} type="submit" margin="0 0 6px auto">submitBtn</StyledBtn>
    )
}


