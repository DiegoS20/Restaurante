"use client";

import { Fragment } from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import { categoriesWithFood } from "@/hooks/useCategorias";

import banner from "@/assets/images/banner.svg";
import { Button, Card } from "react-bootstrap";
import useCarrito from "@/stores/carrito";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export default function Menu() {
  const { categorias } = categoriesWithFood();
  const categoriasList = categorias?.map(
    ({ nombreCategoria }) => nombreCategoria
  );
  const addProductoCarrito = useCarrito((state) => state.addProducto);

  const handleAddCarrito = (id: number, name: string, img: string) =>
    addProductoCarrito({
      id,
      cantidad: 1,
      img,
      name,
    });

  return (
    <div>
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <Image className="banner" src={banner} alt="" />
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-12">
            <Nav fill variant="tabs" defaultActiveKey="#aperitivos">
              {categoriasList?.map((c, i) => (
                <Nav.Item key={i}>
                  <Nav.Link
                    key={i}
                    href={`#${c.toLowerCase().replace(" ", "-")}`}
                    className="text-black"
                  >
                    {c}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </div>
        {categorias?.map(({ nombreCategoria, Producto }, i) => (
          <Fragment key={i}>
            <h4 className="py-3 text-start">{nombreCategoria}</h4>
            <div
              className="row d-flex pt-2 pb-5 text-start"
              id={nombreCategoria.toLowerCase().replace(" ", "-")}
            >
              {Producto.map(
                ({ nombreProducto, descripcion, precio, imageSrc, id }) => (
                  <div className="col-3" key={id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={imageSrc} />
                      <Card.Body>
                        <Card.Title>{nombreProducto}</Card.Title>
                        <Card.Text>
                          {descripcion}
                          <br></br>
                          <b>{currencyFormatter.format(precio)}</b>
                          <hr></hr>
                        </Card.Text>
                        <div className="d-flex">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            style={{ borderRadius: "0px" }}
                            onClick={() =>
                              handleAddCarrito(id, nombreProducto, imageSrc)
                            }
                          >
                            Añadir al carrito
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )
              )}
            </div>

            <hr></hr>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
