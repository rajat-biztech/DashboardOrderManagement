import data from "@/data/ordersData.json";
import { NextApiRequest, NextApiResponse } from "next";

const fetchOrders = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { pageIndex, pageSize } = req.query;

  // Ensure that pageIndex and pageSize are valid numbers
  const pageIndexNum = parseInt(pageIndex as string, 10);
  const pageSizeNum = parseInt(pageSize as string, 10);

  // Paginate the orders data
  const startIndex = (pageIndexNum - 1) * pageSizeNum;
  const endIndex = startIndex + pageSizeNum;
  const paginatedOrders = data.slice(startIndex, endIndex);

  // To display a loading skeleton since the JSON data is fetched quickly without any loading indication.
  await new Promise((resolve) => setTimeout(resolve, 200));

  return res.status(200).json({
    orders: paginatedOrders,
    total: data.length
  });
};

export default fetchOrders;
