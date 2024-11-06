import styled from "styled-components";

export const Container = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
  max-width: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const TableHeading = styled.th`
  font-weight: 500;
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TableCell = styled.td``;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-spacing: 0 0.5rem;

  thead {
    background-color: ${({ theme }) => theme.colors.background};
  }

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const TableRow = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const TableCellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 3rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const PaginationButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: bold;
`;

export const PageInput = styled.input`
  width: 50px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  text-align: center;
`;

export const PageSizeSelect = styled.select`
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;
