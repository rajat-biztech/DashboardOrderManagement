import { ColumnDef } from "@tanstack/react-table";
import { JobType, OrderStatus } from "./enums";

export interface Order {
  id: number;
  customerName: string;
  contentSize: number;
  currentJob: JobType;
  dueDateTime: string;
  status: OrderStatus;
}

export type TableProps<T extends Record<string, string | number>> = {
  data: T[];
  columns: ColumnDef<T>[];
};
