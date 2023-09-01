"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProductoCreado() {
  const sp = useSearchParams();

  return (
    <div
      style={{
        margin: "200px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Pedido creado exitosamente!</h1>
      <div>
        Puedes trackear tu pedido en el siguiente enlace:{" "}
        <Link href={`/trackear-pedido?id=${sp.get("id")}`}>
          Trackear mi pedido
        </Link>
      </div>
    </div>
  );
}
