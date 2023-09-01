"use client";

import { Button, Table } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import useCategorias from "@/hooks/useCategorias";

export default function Categorias() {
  const { categorias } = useCategorias();

  return (
    <div>
      <h1>Categorias</h1>
      <Button variant="success">
        <Link href="categorias/add">
          <AddIcon />
        </Link>
      </Button>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de la categoría</th>
          </tr>
        </thead>
        <tbody>
          {categorias?.map(({ id, nombreCategoria }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{nombreCategoria}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
