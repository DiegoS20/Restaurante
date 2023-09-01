import { Categoria } from "@/types";
import { useQuery } from "react-query";

export default function useGet() {
  const { data, refetch } = useQuery<{
    message: string;
    categories: Categoria[];
  }>(["categories"], getCategories);

  return {
    categorias: data?.categories,
    reloadCategorias: refetch,
  };
}

export const getCategories = async () =>
  fetch("/api/categorias").then((res) => res.json());
