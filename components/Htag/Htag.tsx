import * as React from "react";
import styles from "./Htag.module.css";

export interface IHtagProps {
  tag: "h1" | "h2" | "h3";
  children: React.ReactNode;
}

export function Htag({ tag, children }: IHtagProps): JSX.Element {
  return tag === "h1" ? (
    <h1 className={styles.h1}>{children}</h1>
  ) : tag === "h2" ? (
    <h2 className={styles.h2}>{children}</h2>
  ) : (
    <h3 className={styles.h3}>{children}</h3>
  );
}
