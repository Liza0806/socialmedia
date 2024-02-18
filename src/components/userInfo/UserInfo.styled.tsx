import styled from "styled-components";

export const StyledUserAvatar = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 20px;
`
export const StyledUserName = styled.p`
    font-size: 22px;
    font-weight: 600;
    color: #282828;
    padding-bottom: 10px;
`
export const StyledUserDscr = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #282828;
    border-radius: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    row-gap: 10px;

    /* p {
        padding-bottom: 4px;
    } */
`
export const UserWrapper = styled.div`
    border-radius: 20px;
    background-color: #dbdadc; 
    padding: 20px;
    width: 100%;
  
`