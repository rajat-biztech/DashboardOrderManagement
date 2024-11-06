import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";

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
  TableCellContent,
  NoDataRow
} from "./styles";
import { TableProps } from "./types";
import getOrdersData from "@/services/Orders";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const Table = <T extends Record<string, string | number>>({
  columns
}: TableProps<T>) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const { data = {} } = useQuery({
    queryKey: ["orders", pageIndex, pageSize],
    queryFn: () =>
      getOrdersData({
        pageIndex: pageIndex + 1,
        pageSize
      }),
    placeholderData: keepPreviousData
  });

  const orders = data?.orders ?? [];
  const pageCount = Math.ceil((data?.total ?? 0) / pageSize);

  const table = useReactTable({
    data: orders,
    columns,
    manualPagination: true,
    pageCount,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize
      }
    }
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
          {orders.length === 0 ? (
            <NoDataRow>
              <td colSpan={columns.length}>No Data Found</td>
            </NoDataRow>
          ) : (
            table.getRowModel().rows.map((row) => (
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
            ))
          )}
        </tbody>
      </StyledTable>

      <PaginationContainer>
        <PaginationButton
          onClick={() => setPageIndex(0)}
          disabled={pageIndex === 0}
        >
          {"<<"}
        </PaginationButton>
        <PaginationButton
          onClick={() => setPageIndex((old) => Math.max(old - 1, 0))}
          disabled={pageIndex === 0}
        >
          {"<"}
        </PaginationButton>
        <PaginationButton
          onClick={() =>
            setPageIndex((old) =>
              Math.min(old + 1, table.getPageCount() - 1)
            )
          }
          disabled={pageIndex === table.getPageCount() - 1}
        >
          {">"}
        </PaginationButton>
        <PaginationButton
          onClick={() => setPageIndex(table.getPageCount() - 1)}
          disabled={pageIndex === table.getPageCount() - 1}
        >
          {">>"}
        </PaginationButton>

        <PageInfo>
          Page {pageIndex + 1} of {pageCount}
        </PageInfo>

        <label>
          | Go to page:
          <PageInput
            type="number"
            value={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              setPageIndex(page);
            }}
          />
        </label>

        <PageSizeSelect
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPageIndex(0);
          }}
        >
          {[10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </PageSizeSelect>
      </PaginationContainer>
    </TableContainer>
  );
};

export default Table;
