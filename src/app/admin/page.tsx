import Image from "next/image";

import styles from "./styles.module.scss";

export default function Admin() {
  return (
    <h1
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        fontSize: "75px",
      }}
    >
      Administrador
    </h1>
  );
}
