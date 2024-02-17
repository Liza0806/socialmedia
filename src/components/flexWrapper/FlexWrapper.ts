import styled from "styled-components"

export type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    rowG?: string
    columnG?: string
    margin?: string
    height?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
   display: flex;
flex-direction: ${props=>props.direction || "row"};
justify-content:  ${props=>props.justify || "flex-start"};
align-items:  ${props=>props.align  || "stretch"};
flex-wrap:  ${props=>props.wrap || "nowrap"};
row-gap: ${props=>props.rowG || "0"};
column-gap: ${props=>props.columnG || "0"};
margin:  ${props=>props.margin || "0"};
height:  ${props=>props.height}; 
`