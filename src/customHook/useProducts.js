import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
const useProducts = () => {
  const {
    data: product,
    refetch,
    isLoading,
  } = useQuery("products", () => axios.get("http://localhost:5000/product"));

  const products = product?.data;

  return [products, refetch, isLoading];
};

export default useProducts;
