import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    border-radius: 5px;
    box-shadow: ${p => p.theme.boxShadow.second};
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-basis: calc((100% - 3 * ${p => p.theme.space[3]}px) / 4);
    }

    @media screen and (min-width: 1200px) {
      flex-basis: calc((100% - 5 * ${p => p.theme.space[3]}px) / 6);
    }
  }
`;

export const Card = styled.div`
    padding-top: ${p => p.theme.space[1]}px;
    padding-left: ${p => p.theme.space[1]}px;
    padding-right: ${p => p.theme.space[1]}px;
    padding-bottom: ${p => p.theme.space[3]}px;

    img {
        width: 100%;
        height: auto;
        margin-bottom: ${p => p.theme.space[2]}px;
        border-radius: 5px;
    }

    p {
        padding-top: ${p => p.theme.space[2]}px;
        padding-bottom: ${p => p.theme.space[2]}px;
        font-weight: 500;
    }
    
    span {
        margin-top: ${p => p.theme.space[1]}px;
        display: block;
        font-weight: 400;
    }
`;