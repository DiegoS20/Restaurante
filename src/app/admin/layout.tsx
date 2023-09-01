import Sidebar from "./components/Sidebar";
import type { ReactNode } from "react";

import styles from "./styles.module.scss";
import "../globals.scss";

export default function AdminLayout({ children }: TAdminLayoutProps) {
  return (
    <div className={styles["layout-container"]}>
      <Sidebar />
      <div className={styles["children-container"]}>{children}</div>
    </div>
  );
}

type TAdminLayoutProps = {
  children: ReactNode;
};
