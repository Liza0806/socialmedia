import { StyledBtn, StyledBtnPropsType } from "./Button.styled"

export const Button = (props: StyledBtnPropsType) =>{
    return (
        <StyledBtn type="submit" margin="0 0 6px auto">submitBtn</StyledBtn>
    )
}


// export const StyledBtn = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 5px;
//   background-color: #007bff;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;
