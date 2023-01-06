import styles from "./Header.module.scss";
import { Icon } from "./Icon/Icon";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
export function Header() {
  const [menu, setMenu] = useState(false);
  const responsive = useMediaQuery({
    query: "(min-width: 996px)",
  });

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.header_container}>
          <Logo />
          {menu || responsive ? <Menu /> : null}
          <Icon menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </header>
  );
}
