import { calculateTimeLeft } from "@/utils/calculateLeftTime";

export const ORDER_COLUMNS = [
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
    cell: (info: any) => calculateTimeLeft(info.getValue()) // Use the function to calculate time left
  },
  {
    accessorKey: "status",
    header: () => "Status"
  }
];
