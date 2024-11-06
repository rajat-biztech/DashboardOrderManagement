import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 800;
    text-align: left;
  }
`;
