import { ComidaFull } from "@/types";
import { useQuery } from "react-query";

export default function Get() {
  const { data, refetch } = useQuery<{
    message: string;
    comidas: ComidaFull[];
  }>(["comidas"], getComidas);

  return {
    comidas: data?.comidas,
    reloadComidas: refetch,
  };
}

export const getComidas = () => fetch("/api/comidas").then((res) => res.json());
