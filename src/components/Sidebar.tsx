import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605270488815-93566ee46a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/matheuslima99.png" />

        <strong>Matheus Lima</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar o seu perfil
        </a>
      </footer>
    </aside>
  );
}
