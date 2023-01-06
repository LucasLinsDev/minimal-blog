import styles from "./Icon.module.scss";
import { BiSearch, BiMenu } from "react-icons/bi";
export function Icon({ setMenu, menu }: any) {
  const handleMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };

  return (
    <div className={styles.icon}>
      <BiSearch size={24} />
      <div onClick={handleMenu}>
        <BiMenu size={24} />
      </div>
    </div>
  );
}
