import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCarrito = create<CarritoState>()(
  persist(
    (set, get) => ({
      productos: [],
      addProducto: (producto) => {
        const productos = get().productos;
        const productoI = productos.findIndex((p) => p.id == producto.id);
        if (productoI > -1) productos[productoI].cantidad += producto.cantidad;
        else productos.push(producto);
        set({ productos: [...productos] });
      },
      increaseCantidad: (id, cantidad = 1) =>
        set({
          productos: get().productos.map((p) =>
            p.id == id ? { ...p, cantidad: p.cantidad + cantidad } : p
          ),
        }),
      decreaseCantidad: (id, cantidad = 1) => {
        const productos = get().productos;
        const productoI = productos.findIndex((p) => p.id == id);
        if (productos[productoI]?.cantidad == 1) {
          productos.splice(productoI, 1);
          return set({ productos });
        }

        productos[productoI].cantidad -= cantidad;
        set({ productos });
      },
      resetProductos: () => set({ productos: [] }),
    }),
    { name: "carrito" }
  )
);
export default useCarrito;

type ProductoState = {
  id: number;
  img: string;
  name: string;
  cantidad: number;
};
type CarritoState = {
  productos: ProductoState[];
  addProducto: (producto: ProductoState) => void;
  increaseCantidad: (id: number, cantidad?: number) => void;
  decreaseCantidad: (id: number, cantidad?: number) => void;
  resetProductos: () => void;
};
