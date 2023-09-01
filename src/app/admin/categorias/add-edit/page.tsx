"use client";

import { FormEventHandler, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TextField, Button } from "@mui/material";
import useCategorias, { addCategoria } from "@/hooks/useCategorias";

export default function AddEdit() {
  const [name, setName] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const isEditPage = useMemo(() => pathname.indexOf("edit") > -1, [pathname]);
  const { reloadCategorias } = useCategorias();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addCategoria(name);
    await reloadCategorias();
    router.push("/admin/categorias");
  };

  return (
    <div>
      <h1>{isEditPage ? "Editar" : "Agregar"} categoría</h1>
      <form
        style={{ marginTop: "50px", width: "100%" }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          required
          label="Nombre de la categoría"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color={isEditPage ? "warning" : "success"}
          style={{ marginTop: " 25px" }}
        >
          {isEditPage ? "Actualizar" : "Agregar"}
        </Button>
      </form>
    </div>
  );
}
