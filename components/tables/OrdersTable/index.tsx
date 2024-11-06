import { useMemo } from "react";
import { Container, Title } from "./styles";
import Table from "./table";
import { ORDER_COLUMNS } from "./consts";
import { TableProps } from "./types";

const OrderTable = <T extends Record<string, string | number>>({
  data
}: Pick<TableProps<T>, "data">) => {
  const columns = useMemo(() => ORDER_COLUMNS, []);

  return (
    <Container>
      <Title>Orders</Title>
      <Table {...{ data, columns }} />
    </Container>
  );
};

export default OrderTable;
