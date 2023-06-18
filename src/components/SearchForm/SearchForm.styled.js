import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
//   label {
//     display: flex;
//     flex-direction: column;
//   }

  input {
    margin-top: 0px;
    padding: ${p => p.theme.space[2]}px;
    padding-right: ${p => p.theme.space[6]}px;

    border-radius: 4px;
  }
`;

export const SearchBtn = styled.button`
    width: 80px;
    height: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[1]}px;
    margin-left: ${p => p.theme.space[3]}px;
    border: 1px solid ${p => p.theme.colors.accentTextColor};
    color: ${p => p.theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    text-align: center;
    background-color: ${p => p.theme.colors.accentBackgroundColor};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover,
    &:focus {
            color: ${p => p.theme.colors.accent};
    }
`;