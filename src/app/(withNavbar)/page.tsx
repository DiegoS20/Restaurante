"use client";

import Image from "next/image";
import Card from "react-bootstrap/Card";

import styles from "./page.module.scss";
import hamburguesa from "@/assets/images/hamburguesa.svg";
import drinks from "@/assets/images/drinks.svg";
import desserts from "@/assets/images/deserts.svg";
import chefs from "@/assets/images/chef.svg";
import chefcito from "@/assets/images/chefcito.svg";

const foodSections = [
  { text: "Platillos", image: hamburguesa },
  { text: "Drinks", image: drinks },
  { text: "Postres", image: desserts },
  { text: "Chefs", image: chefs },
];

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center py-5">
          <h3 className="pb-3">Reconocidos internacionalmente por nuestros:</h3>
          {foodSections.map(({ image, text }, i) => (
            <div className="col-3" style={{ height: "100%" }} key={i}>
              <div className={styles.menu}>
                <div className="menu-img">
                  <Image src={image} alt="" />
                </div>
                <a className="text-white linksnone" href="Menu" target="_blank">
                  <h1 className={`${styles["menu-title"]} text-white`}>
                    {text}
                  </h1>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="row py-5">
          <div className="col-6 pt-5">
            <h3 style={{ textAlign: "center" }}>Nuestro Menú...</h3>
            <br></br>
            <p className="pb-5" style={{ textAlign: "justify" }}>
              Cuidadosamente diseñado por nuestros talentosos chefs, fusiona lo
              mejor de ambos mundos: la conveniencia de la comida rápida y la
              sofisticación de la alta cocina. Cada hamburguesa, cada sándwich y
              cada plato está creado con ingredientes de la más alta calidad,
              seleccionados para deleitar tus sentidos y satisfacer tu paladar.
              <br></br>
              <br></br>
              Nos enorgullecemos de traerte sabores audaces y creativos que te
              sorprenderán en cada visita. Ya sea que elijas una hamburguesa
              artesanal con ingredientes frescos y únicos, un combo de pollo
              crujiente que te hará sonreír o una opción vegana que redefine lo
              que creías posible en la comida rápida, estamos aquí para hacer
              que cada comida sea inolvidable.
            </p>
          </div>

          <div className="col-6">
            <Image src={chefcito} alt="" />
          </div>
        </div>

        <div className="row py-5">
          <h3>Nuestra Particular Modalidad</h3>
          <div></div>
          <div className="col-4">
            <Card style={{ height: "20 rem" }}>
              <Card.Body>
                <Card.Title>Innovación</Card.Title>
                <Card.Text>
                  La innovación que hemos aportado al mundo de la comida rápida
                  a domicilio nos ha llevado a ganar reconocimiento
                  internacional. Nuestro enfoque en la calidad, el sabor y la
                  comodidad ha resonado en paladares de todas partes del mundo.
                  Desde ciudades icónicas hasta pequeñas localidades, nuestra
                  misión es llevar el encanto de la comida gourmet directamente
                  a tu mesa.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={{ height: "20 rem" }}>
              <Card.Body>
                <Card.Title>Revolución</Card.Title>

                <Card.Text>
                  Un rincón culinario que ha revolucionado por completo la
                  noción de comida rápida. Lo que en un pasado fue una simple
                  parada para saciar el hambre, se ha convertido en un destino
                  gastronómico en el que cada bocado es una experiencia de sabor
                  y excelencia.
                  <br></br>
                  <br></br>
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-4">
            <Card style={{}}>
              <Card.Body>
                <Card.Title>Experiencia</Card.Title>

                <Card.Text>
                  La experiencia se extiende más allá de los límites físicos de
                  un restaurante. La comodidad de la comida a domicilio se eleva
                  a nuevas alturas, donde la entrega de cada plato es una
                  entrega de emoción. Los envases exquisitamente diseñados y la
                  presentación impecable convierten cada pedido en una
                  experiencia digna de un banquete real.
                  <br></br>
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
