import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  color: #fff;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  width: 100%;
  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
