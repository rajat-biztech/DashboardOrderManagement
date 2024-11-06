import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import {
  TableContainer,
  StyledTable,
  PaginationContainer,
  PaginationButton,
  PageInfo,
  PageInput,
  PageSizeSelect,
  TableRow,
  TableHeading,
  TableCellContent
} from "./styles";
import { TableProps } from "./types";

export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SIZE = 10;

const Table = <T extends Record<string, string | number>>({
  data,
  columns
}: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeading
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </div>
                  )}
                </TableHeading>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  <TableCellContent>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCellContent>
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>

      <PaginationContainer>
        <PaginationButton
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </PaginationButton>
        <PaginationButton
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </PaginationButton>

        <PageInfo>
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </PageInfo>

        <label>
          | Go to page:
          <PageInput
            type="number"
            value={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              table.setPageIndex(page);
            }}
          />
        </label>

        <PageSizeSelect
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </PageSizeSelect>
      </PaginationContainer>
    </TableContainer>
  );
};

export default Table;
