"use client";

import { Button, Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import useComidas from "@/hooks/useComidas";
import Image from "next/image";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Comidas() {
  const { comidas } = useComidas();

  return (
    <div>
      <h1>Comidas</h1>
      <Button variant="success">
        <Link href="comidas/add">
          <AddIcon />
        </Link>
      </Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {comidas?.map(
            (
              { id, nombreProducto, categoria, descripcion, precio, imageSrc },
              i
            ) => (
              <tr key={i}>
                <td valign="middle">{id}</td>
                <td valign="middle">{nombreProducto}</td>
                <td valign="middle">{descripcion}</td>
                <td valign="middle">{currencyFormatter.format(precio)}</td>
                <td valign="middle">{categoria.nombreCategoria}</td>
                <td valign="middle">
                  <Image
                    src={imageSrc}
                    alt=""
                    width={800}
                    height={800}
                    style={{ width: "100px" }}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
}
