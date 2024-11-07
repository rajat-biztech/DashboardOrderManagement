import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 100%;
  background-color: #f5f7fa;
`;

export const TableContainer = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const TableHeading = styled.th`
  font-weight: 600;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #eef1f5;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }

  th,
  td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  tr {
    transition: background-color 0.3s;
  }

  tr:hover {
    background-color: #f1f7fd;
  }
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transition: background-color 0.3s ease;
  }
`;

export const TableCellContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 1.5rem;
  font-size: 0.95rem;
  color: #333;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
  font-size: 1rem;
`;

export const PaginationButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: #e4e7eb;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
    background-color: #f2f2f2;
  }
`;

export const PageInfo = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const PageInput = styled.input`
  width: 3.125rem;
  padding: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  text-align: center;
`;

export const PageSizeSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
`;

export const NoDataRow = styled.tr`
  text-align: center;
  background-color: #f9f9f9;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;

  td {
    padding: 1.5rem 1rem;
    font-weight: 600;
    color: #777;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &:before {
    content: "";
    display: block;
    font-size: 1.5rem;
    color: #555;
    font-weight: 700;
    margin-bottom: 0.625rem;
  }
`;
