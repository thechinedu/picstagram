import styles from "./index.module.css";

import cn from "classnames";
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

type InputProps = {
  id: string;
  label: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  value: string;
};

const PasswordInput: FC<Omit<InputProps, "label">> = ({
  id,
  onChange,
  type,
  value,
}) => {
  return (
    <input
      className={styles.input}
      id={id}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

const PlainInput: FC<Omit<InputProps, "label">> = ({
  id,
  onChange,
  type,
  value,
}) => {
  return (
    <input
      className={styles.input}
      id={id}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

const Input: FC<InputProps> = ({ id, label, onChange, type, value }) => {
  const isInputFilled = value.length > 0;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt);
  };

  return (
    <label className={styles.container} htmlFor={id}>
      <span
        className={cn(styles.label, { [styles.shrunkLabel]: isInputFilled })}
      >
        {label}
      </span>
      {type === "password" ? (
        <PasswordInput
          id={id}
          onChange={handleChange}
          type="password"
          value={value}
        />
      ) : (
        <PlainInput id={id} onChange={onChange} type={type} value={value} />
      )}
    </label>
  );
};

export default Input;
