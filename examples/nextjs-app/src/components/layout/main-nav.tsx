import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMainLayoutStore } from '@/components/layout/main-layout-store';
import { MainSidebar } from '@/components/layout/sidebar/main-sidebar';
import { siteConfig } from '@/config/site.config';
// eslint-disable-next-line import/no-duplicates
import CloseIcon from '@/public/icons/menu/cross-svgrepo-com.svg';
// eslint-disable-next-line import/no-duplicates
import OpenIcon from '@/public/icons/menu/cross-svgrepo-com.svg';

const { mainNavLinks } = siteConfig;

type Props = {
  className?: string;
};

export const MainNav: FC<Props> = (props) => {
  const { className } = props;
  const toggleSideBar = useMainLayoutStore((state) => state.toggleSidebar);
  const isSideBarOpen = useMainLayoutStore((state) => state.isSidebarOpen);

  return (
    <div
      className={twMerge(
        'bg-white absolute top-0 right-0 flex flex-row justify-end',
        className
      )}
    >
      <nav>
        {isSideBarOpen ? (
          <CloseIcon className={'h-6 w-6'} onClick={toggleSideBar} />
        ) : (
          <OpenIcon className={'h-6 w-6'} onClick={toggleSideBar} />
        )}

        <MainSidebar mainLinks={mainNavLinks} />
      </nav>
    </div>
  );
};
