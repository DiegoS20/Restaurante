import { useQuery } from "react-query";

export default function usePedidos() {
  const { data, refetch, isLoading } = useQuery<{
    message: string;
    pedidos: Pedido[];
  }>(["pedidos"], fetchPedidos);

  return {
    pedidos: data?.pedidos,
    reloadPedidos: refetch,
    pedidosLoading: isLoading,
  };
}

export const fetchPedidos = () =>
  fetch("/api/pedidos").then((res) => res.json());

type Pedido = {
  id: number;
  estado: string;
  fechaPedido: string;
  fechaActualizacion: string;
};
