import { useQuery } from "react-query";
import axios from "axios";
const useProducts = () => {
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("products", () =>
    axios.get("https://nyx-wolves-2022.herokuapp.com/product"),
  );

  const products = product?.data;

  return [products, refetch, isLoading];
};

export default useProducts;
