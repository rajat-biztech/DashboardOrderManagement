import { useMemo } from "react";
import { Container, Title } from "./styles";
import Table from "./table";
import { ORDER_COLUMNS } from "./consts";

const OrderTable = () => {
  const columns = useMemo(() => ORDER_COLUMNS, []);

  return (
    <Container>
      <Title>Orders</Title>
      <Table {...{ columns }} />
    </Container>
  );
};

export default OrderTable;
