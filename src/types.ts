export type Categoria = {
  id: number;
  nombreCategoria: string;
};

export type Comida = {
  id: number;
  nombreProducto: string;
  descripcion: string;
  precio: number;
  imageSrc: string;
};

export type ComidaFull = Comida & {
  categoria: {
    id: number;
    nombreCategoria: string;
  };
};

export type ComidaId = Comida & {
  categoriaId: number;
};

export type CategoriaWithComida = Categoria & {
  Producto: ComidaId[];
};
