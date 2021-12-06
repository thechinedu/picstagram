import styles from "./index.module.css";

import Logo from "@components/Logo";
import { Chat, Compass, Heart, Plus } from "@components/Icons";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logoContainer}>
            <Logo size="normal" />
          </a>
        </Link>

        <Chat />
        <Plus />
        <Compass />
        <Heart />
        <Image
          src="https://placebeard.it/22/22/notag"
          alt="profile image"
          width={22}
          height={22}
          className={styles.profileImage}
        />
      </nav>
    </header>
  );
};

export default Header;
