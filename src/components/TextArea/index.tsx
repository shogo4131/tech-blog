import type { FC, ComponentProps, ChangeEventHandler } from 'react';
import { useState, useCallback } from 'react';

import { clsx } from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
  label?: string;
  defaultValue?: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
} & Omit<ComponentProps<'textarea'>, 'defaultValue'>;

export const Textarea: FC<Props> = ({
  className,
  textareaClassName,
  labelClassName,
  label,
  defaultValue,
  maxLength,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue ?? '');

  const onChangeHandler = useCallback<ChangeEventHandler<HTMLTextAreaElement>>(
    (e) => {
      setValue(e.target.value);
      if (onChange) onChange(e);
    },
    [onChange]
  );

  return (
    <label className={clsx(styles.root, className)}>
      <div className={styles.wrapper}>
        {label && <span className={clsx(styles.label, labelClassName)}>{label}</span>}
        <div className={styles.inputWrapper}>
          <textarea
            {...rest}
            className={clsx(styles.textarea, textareaClassName)}
            value={value}
            maxLength={maxLength}
            onChange={onChangeHandler}
          />
          {maxLength && <span className={styles.length}>{`${value.length}/${maxLength}`}</span>}
        </div>
      </div>
    </label>
  );
};
