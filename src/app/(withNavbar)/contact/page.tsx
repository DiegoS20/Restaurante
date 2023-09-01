"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import mapa from "@/assets/images/mapa.svg";

export default function Contact() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div>
      <div className="container py-5">
        <div className="d-flex justify-content-center">
          <div className="col-8">
            <Card style={{ width: "90%" }}>
              <Card.Body>
                <Card.Title>
                  <h2>¡Contáctanos!</h2>
                </Card.Title>
                <Form className="">
                  <div className="d-flex py-4  text-start">
                    <div className="col-6 px-1">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Nombre" />
                      </Form.Group>
                    </div>
                    <div className="col-6 px-1">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="name" placeholder="Apellido" />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="d-flex py-4 text-start">
                    <div className="col-6 px-1">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Mail</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="user@example.com"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-6 px-1 ">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Motivo</Form.Label>
                        <Form.Control
                          type="message"
                          placeholder="Ingrese el motivo"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group
                    className="my-3 text-start"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>

                <Button variant="outline-dark" className="px-5 my-3">
                  Enviar
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="pt-2 col-md-4 col-sm-6">
            <div>
              <h2>Nuestra Ubicación</h2>
              <p>San Salvador, El Salvador</p>
              <Image
                className="contact"
                src={mapa}
                width={350}
                height={350}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
