import React, { useEffect, useRef, useState, useCallback } from "react";
import { useField } from "@unform/core";
import { IconBaseProps } from "react-icons";
import styles from "./styles.module.scss";

interface InputProps {
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({ name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div className={styles.inputContainer}>
      {Icon && <Icon size={20} />}

      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
    </div>
  );
}
