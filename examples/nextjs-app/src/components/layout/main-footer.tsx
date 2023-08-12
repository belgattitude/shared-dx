import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

export const MainFooter: FC<Props> = (props) => {
  const { className = '' } = props;

  return (
    <footer className={twMerge('', className)}>
      <div className={'flex flex-row items-stretch justify-center gap-5'}>
        <div className={''}></div>
        <div className={''}></div>
      </div>
    </footer>
  );
};
