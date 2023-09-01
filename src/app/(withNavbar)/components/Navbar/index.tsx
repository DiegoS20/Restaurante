"use client";

import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Offcanvas } from "react-bootstrap";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

import useCarrito from "@/stores/carrito";

import styles from "./styles.module.scss";
import logo from "@/assets/images/logoBoucheeC.svg";
import logotexto from "@/assets/images/logoTexto.svg";

export default function Navbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const isIndex = usePathname() == "/";
  const [productosCarrito, increaseProducto, decreaseCantidad, resetProductos] =
    useCarrito((state) => [
      state.productos,
      state.increaseCantidad,
      state.decreaseCantidad,
      state.resetProductos,
    ]);
  const [pagando, setPagando] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const handleClose = () => setShowOffcanvas(false);

  const handleShow = () => setShowOffcanvas(true);

  const handleWindowScroll = () => setScrolled(window.scrollY >= 50);

  const handleRealizarCompra = async () => {
    setPagando(true);
    const response = await fetch("/api/pedidos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productos: productosCarrito.map((pC) => ({
          id: pC.id,
          cantidad: pC.cantidad,
        })),
      }),
    });
    const pedidoResponse = await response.json();
    const pedidoId = pedidoResponse.id as number;
    resetProductos();
    setShowOffcanvas(false);
    setPagando(false);
    router.push(`/pedido-creado?id=${pedidoId}`);
  };

  return (
    <div>
      <div>
        <BootstrapNavbar
          className={`${isIndex && "fixed-top"} ${
            styles["navbar-animation"]
          } navbar-expand-lg  p-md-3  ${
            scrolled ? styles.scrolled : !isIndex && styles.static
          }`}
          variant="dark"
        >
          <div className="container">
            <BootstrapNavbar.Brand>
              <Link href="/">
                <Image src={logotexto} className={styles.logo1} alt="" />
              </Link>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="navbarNav" />
            <BootstrapNavbar.Collapse id="navbarNav">
              <div className="mx-auto"></div>
              <Nav className="navbar-nav">
                <Link
                  href="/menu"
                  className="text-white mx-5 nav-link"
                  style={{ textDecoration: "none" }}
                >
                  Menú
                </Link>
                <Link
                  href="/contact"
                  className="text-white mx-5 nav-link"
                  style={{ textDecoration: "none" }}
                >
                  Contacto
                </Link>
                <IconButton onClick={handleShow} aria-label="cart">
                  <Badge
                    badgeContent={productosCarrito.length}
                    color="primary"
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Nav>
            </BootstrapNavbar.Collapse>
          </div>
        </BootstrapNavbar>

        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h2>Detalle Compra a Realizar</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {productosCarrito.length > 0 ? (
              <>
                {productosCarrito.map((p, i) => (
                  <Fragment key={i}>
                    <div className="row">
                      <div className="col-4">
                        <img
                          className=""
                          src={p.img}
                          width={800}
                          height={800}
                          style={{
                            width: "100px",
                          }}
                        ></img>
                      </div>
                      <div className="col-4">
                        <p>{p.name}</p>
                      </div>
                      <div className="col-4 d-flex">
                        <div className="mx-2">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            style={{ borderRadius: "500px" }}
                            onClick={() => decreaseCantidad(p.id)}
                          >
                            -
                          </Button>
                        </div>
                        <div>
                          <p>{p.cantidad}</p>
                        </div>
                        <div className="mx-2">
                          <Button
                            variant="outline-dark"
                            size="sm"
                            style={{ borderRadius: "500px" }}
                            onClick={() => increaseProducto(p.id)}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                  </Fragment>
                ))}
                <div className="row">
                  <div className="col-12 py-5">
                    <Button
                      variant="outline-dark"
                      className="col-12"
                      disabled={pagando}
                      onClick={handleRealizarCompra}
                    >
                      {pagando ? "Realizando compra..." : "Realizar Compra"}
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <h6>No hay productos en el carrito</h6>
            )}
          </Offcanvas.Body>
        </Offcanvas>

        {isIndex && (
          <div
            className={`${styles["banner-image"]} w-100 vh-100 d-flex justify-content-center align-items-center`}
          >
            <div className="container content text-center text-white">
              <div className="d-flex justify-content-center py-5">
                <div className={styles.logoNav}>
                  <Image src={logo} alt="" />
                </div>
              </div>

              <p className="pb-5">
                Sumérgete en una experiencia culinaria única en nuestro acogedor
                rincón de delicias. En Bouchée Chic, hemos transformado la
                comida rápida en un arte gourmet, elevando cada bocado a una
                experiencia exquisita.
              </p>

              <Button
                variant="outline-light px-5"
                style={{ borderRadius: "0px" }}
              >
                <Link
                  href="/menu"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Ver Menú
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
