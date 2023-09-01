"use client";

import { FormEventHandler, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { TextField, Button, MenuItem } from "@mui/material";
import useCategories, { categoriesWithFood } from "@/hooks/useCategorias";
import useComidas from "@/hooks/useComidas";

export default function AddEdit() {
  const pathname = usePathname();
  const router = useRouter();
  const isEditPage = useMemo(() => pathname.indexOf("edit") > -1, [pathname]);
  const { categorias } = useCategories();
  const { reloadCategoriasComidas } = categoriesWithFood();
  const { reloadComidas } = useComidas();
  const [fields, setFields] = useState({
    nombreProducto: "",
    descripcion: "",
    precio: "",
    categoriaId: "",
    imageSrc: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await fetch("/api/comidas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    await reloadComidas();
    await reloadCategoriasComidas();
    router.push("/admin/comidas");
  };

  const handleChange = (fieldName: string, value: string) => {
    setFields((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      <h1>{isEditPage ? "Editar" : "Agregar"} comida</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          required
          label="Nombre de la comida"
          value={fields.nombreProducto}
          onChange={(e) => handleChange("nombreProducto", e.target.value)}
        />
        <textarea
          required
          style={{
            width: "100%",
            resize: "none",
            height: "100px",
            padding: "25px",
          }}
          placeholder="Descripción del producto *"
          value={fields.descripcion}
          onChange={(e) => handleChange("descripcion", e.target.value)}
        ></textarea>
        <TextField
          fullWidth
          required
          type="number"
          label="Precio"
          value={fields.precio}
          onChange={(e) => handleChange("precio", e.target.value)}
        />
        <TextField
          fullWidth
          select
          required
          label="Categoría"
          value={fields.categoriaId}
          onChange={(e) => handleChange("categoriaId", e.target.value)}
        >
          {categorias?.map(({ id, nombreCategoria }, i) => (
            <MenuItem key={i} value={id}>
              {nombreCategoria}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          required
          label="Imagen"
          value={fields.imageSrc}
          onChange={(e) => handleChange("imageSrc", e.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color={isEditPage ? "warning" : "success"}
          style={{ width: "100px" }}
        >
          {isEditPage ? "Actualizar" : "Agregar"}
        </Button>
      </form>
    </div>
  );
}
