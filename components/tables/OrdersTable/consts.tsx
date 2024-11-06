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
    header: () => "Time Remaining"
  },
  {
    accessorKey: "status",
    header: () => "Status"
  }
];
