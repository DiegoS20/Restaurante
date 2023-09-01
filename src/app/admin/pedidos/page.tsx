"use client";

import { Table } from "react-bootstrap";
import usePedidos from "@/hooks/usePedidos";
import { TextField, MenuItem } from "@mui/material";

export default function Pedidos() {
  const { pedidos, reloadPedidos } = usePedidos();

  const handleSelectChange = async (id: number, newValue: string) => {
    await fetch(`/api/pedidos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ estado: newValue }),
    });

    reloadPedidos();
  };

  return (
    <div>
      <h1>Pedidos</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha de creación</th>
            <th>Última actualización</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos?.map(
            ({ id, fechaPedido, fechaActualizacion, estado }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{new Date(fechaPedido).toLocaleString()}</td>
                <td>{new Date(fechaActualizacion).toLocaleString()}</td>
                <td>
                  <TextField
                    select
                    defaultValue={estado}
                    onChange={(e) => handleSelectChange(id, e.target.value)}
                  >
                    <MenuItem value="CONFIRMACION">CONFIRMACION</MenuItem>
                    <MenuItem value="PREPARACION">PREPARACION</MenuItem>
                    <MenuItem value="ENTREGA">ENTREGA</MenuItem>
                  </TextField>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
