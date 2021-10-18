import styles from "./index.module.css";

import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  label: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  value: string;
};

const Input: FC<InputProps> = ({ id, label, onChange, type, value }) => {
  return (
    <label className={styles.container} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        id={id}
        onChange={onChange}
        type={type}
        value={value}
      />
    </label>
  );
};

export default Input;
