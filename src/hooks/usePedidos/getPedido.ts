import { useQuery } from "react-query";

export default function useGetPedido(id: number) {
  const { data, refetch, isLoading } = useQuery<{
    message: string;
    pedido: Pedido;
  }>(["pedidos", id], () => fetchPedido(id));

  return {
    pedido: data?.pedido,
    reloadPedido: refetch,
    pedidoLoading: isLoading,
  };
}

export const fetchPedido = (id: number) =>
  fetch(`/api/pedidos/${id}`).then((res) => res.json());

type Pedido = {
  id: number;
  estado: string;
  fechaPedido: string;
  fechaActualizacion: string;
  DetallePedido: [
    {
      id: number;
      pedidoId: number;
      productoId: number;
      cantidad: number;
    }
  ];
};
