import { SubTitleStyled } from "./Titles.styled"

type SubTitlePropsType = {
    text: string
}

export const SubTitle = (props:SubTitlePropsType) => {
    return(
        <SubTitleStyled>{props.text}</SubTitleStyled>
    )
}