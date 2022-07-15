import type { FC, ComponentProps, ChangeEventHandler } from 'react';

import clsx from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  label?: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
} & Omit<ComponentProps<'input'>, 'onChange'>;

export const InputFiled: FC<Props> = ({
  className,
  labelClassName,
  wrapperClassName,
  inputClassName,
  label,
  error,
  onChange,
  ...rest
}) => {
  return (
    <label className={className}>
      <div className={styles.wrapper}>
        {label && <span className={clsx(styles.label, labelClassName)}>{label}</span>}
        <div className={clsx(styles.inputWrapper, wrapperClassName)}>
          <input {...rest} className={clsx(styles.input, inputClassName)} onChange={onChange} />
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};
