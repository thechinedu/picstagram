import styles from "./index.module.css";

import Logo from "@components/Logo";
import { Chat, Compass, Heart, Plus } from "@components/Icons";
import { getAuth, signOut } from "@utils/firebase";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

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
          onClick={handleSignOut}
        />
      </nav>
    </header>
  );
};

export default Header;
