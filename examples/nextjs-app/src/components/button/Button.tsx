'use client';

import clsx from 'clsx';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'normal' | 'large';
  children: string;
};

export const Button = forwardRef<
  HTMLButtonElement, // | HTMLAnchorElement,
  ButtonProps
>(
  /** prefer named function to not have to set the displayName */
  function Button(props, ref) {
    const { size = 'normal', className = '', children, ...restProps } = props;

    return (
      <button
        {...restProps}
        className={twMerge(
          clsx(
            'rounded-full border bg-blue-500 font-bold text-white hover:bg-blue-700',
            {
              ['py-1 px-2']: size === 'small',
              ['py-2 px-4']: size === 'normal',
              ['py-4 px-6']: size === 'large',
            }
          ),
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
