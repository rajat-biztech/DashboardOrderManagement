import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE } from "@/consts";
import axios from "axios";

const getOrdersData = async ({
  pageIndex = DEFAULT_PAGE_INDEX,
  pageSize = DEFAULT_PAGE_SIZE
}: {
  pageIndex?: number;
  pageSize?: number;
}) => {
  try {
    const response = await axios.get("/api/orders", {
      params: {
        pageIndex,
        pageSize
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders data:", error);
    throw error;
  }
};

export default getOrdersData;
