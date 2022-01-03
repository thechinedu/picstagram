import styles from "./index.module.css";

import Logo from "@components/Logo";
import { Back, Chat, Compass, Heart, Plus } from "@components/Icons";
import Input from "@components/Input";
import { getAuth, signOut } from "@utils/firebase";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { FC, useRef, useState } from "react";

type FileUploadDialogProps = {
  open: boolean;
  onClose: () => void;
};

const FileUploadDialog: FC<FileUploadDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        console.log("dialog is open:", open);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />

        <Dialog.Content
          aria-label="dialog-content"
          aria-describedby="dialog-content"
          className={styles.dialog}
        >
          <header className={styles.dialogHeader}>
            <Back tabIndex={0} />
            <Dialog.Title>Dialog title</Dialog.Title>
            <button>Next</button>
          </header>

          <div>
            <p>Image preview will appear here</p>
          </div>

          <Dialog.Close>
            <button onClick={onClose}>close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFileUploadDialogOpen, setIsFileUploadDialogOpen] = useState(true);

  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileUpload = () => {
    // inputRef.current?.click();
    setIsFileUploadDialogOpen(true);
  };

  const handleFileUploadDialogClose = () => {
    setIsFileUploadDialogOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.logoContainer}>
            <Logo size="normal" />
          </a>
        </Link>

        <div className={cn(styles.searchContainer)}>
          <Input
            id="search"
            label="Search"
            type="search"
            value={""}
            onChange={() => {}}
          />
        </div>

        <Chat />
        <Plus onClick={handleFileUpload} />
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

      <input
        type="file"
        accept="image/*"
        className={styles.hidden}
        ref={inputRef}
      />

      <FileUploadDialog
        open={isFileUploadDialogOpen}
        onClose={handleFileUploadDialogClose}
      />
    </header>
  );
};

export default Header;
