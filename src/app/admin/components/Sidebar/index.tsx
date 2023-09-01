"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";
import paths from "./paths.json";
import logo from "@/assets/images/logoBoucheeC2.svg";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <div className={styles.tabs}>
        {paths.map(({ path, text }, i) => (
          <Link
            key={i}
            href={`/admin/${path}`}
            className={`${styles["tab"]} ${
              pathname.indexOf(path) > -1 && styles.active
            }`}
          >
            {text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
