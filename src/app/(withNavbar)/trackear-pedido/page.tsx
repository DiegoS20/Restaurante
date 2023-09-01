"use client";

import { getPedido } from "@/hooks/usePedidos";
import { useSearchParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function TrackearPedido() {
  const sp = useSearchParams();
  const { pedido, pedidoLoading } = getPedido(+sp.get("id")!);

  return (
    <div
      style={{
        margin: "150px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pedidoLoading ? (
        <CircularProgress />
      ) : (
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
          Su pedido está en estado de: {pedido?.estado}
        </h1>
      )}
    </div>
  );
}
