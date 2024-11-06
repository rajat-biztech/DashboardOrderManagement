import OrderTable from "@/components/tables/OrdersTable";
import { data } from "@/components/tables/OrdersTable/mocks";

const OrdersPage = () => {
  return <OrderTable {...{ data }} />;
};

export default OrdersPage;
