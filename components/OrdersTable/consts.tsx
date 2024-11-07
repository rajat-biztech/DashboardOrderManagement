import { calculateTimeLeft } from "@/utils/calculateLeftTime";
import { Order } from "./types";
import { ColumnDef } from "@tanstack/react-table";

export const ORDER_COLUMNS: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: () => <span>ID</span>
  },
  {
    accessorKey: "customerName",
    header: () => <span>Customer</span>
  },
  {
    accessorKey: "contentSize",
    header: () => <span>Content Size</span>
  },
  {
    accessorKey: "currentJob",
    header: () => "Current Job"
  },
  {
    accessorKey: "dueDateTime",
    header: () => "Time Remaining",
    cell: ({ row }) => {
      const dueDateTime = row.original.dueDateTime;
      const dueDate = new Date(dueDateTime);
      const now = new Date();
      const timeDifference = dueDate.getTime() - now.getTime();
      const isPast = timeDifference < 0;

      return (
        <span style={{ color: isPast ? "red" : "black" }}>
          {calculateTimeLeft(dueDate)}
        </span>
      );
    }
  },
  {
    accessorKey: "status",
    header: () => "Status"
  }
];
