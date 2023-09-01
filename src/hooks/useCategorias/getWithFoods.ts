import { CategoriaWithComida } from "@/types";
import { useQuery } from "react-query";

export default function useGetWithFoods() {
  const { data, refetch } = useQuery<{
    message: string;
    categorias: CategoriaWithComida[];
  }>(["categoria", "comida"], getCategoriaWithFood, {
    cacheTime: 0,
  });

  return {
    categorias: data?.categorias,
    reloadCategoriasComidas: refetch,
  };
}

export const getCategoriaWithFood = () =>
  fetch("/api/categorias/comidas", {
    cache: "no-cache",
  }).then((res) => res.json());
