import type { FC, ComponentProps, ChangeEventHandler } from 'react';

import Image from 'next/image';

import { clsx } from 'clsx';

import styles from './index.module.css';

type Props = {
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
  surffixIcon?: string;
  required?: boolean;
  label?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & Omit<ComponentProps<'input'>, 'onChange'>;

export const InputFiled: FC<Props> = ({
  className,
  labelClassName,
  wrapperClassName,
  inputClassName,
  surffixIcon,
  required = false,
  label,
  error,
  onChange,
  ...rest
}) => {
  return (
    <label className={className}>
      <div className={styles.wrapper}>
        {label && (
          <div className={clsx(styles.label, labelClassName)}>
            <span className={styles.title}>{label}</span>
            {required && <span className={styles.required}>必須</span>}
          </div>
        )}
        <div className={clsx(styles.inputWrapper, wrapperClassName)}>
          <input {...rest} className={clsx(styles.input, inputClassName)} onChange={onChange} />
          {surffixIcon && (
            <div className={styles.surffixIcon}>
              <Image src={surffixIcon} alt="search" height={20} width={20} />
            </div>
          )}
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </label>
  );
};
