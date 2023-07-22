'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import { useMainLayoutStore } from '@/components/layout/main-layout-store';
import type { SiteConfig } from '@/config/site.config';

type Props = {
  mainLinks: SiteConfig['mainNavLinks'];
};

export const MainSidebar: FC<Props> = (props) => {
  const { mainLinks } = props;
  const { isSidebarOpen, closeSidebar } = useMainLayoutStore(
    ({ isSidebarOpen, closeSidebar }) => ({
      isSidebarOpen,
      closeSidebar,
    })
  );

  return (
    <div
      className={clsx('', {
        hidden: !isSidebarOpen,
      })}
    >
      <ul>
        {mainLinks.map((link) => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={closeSidebar}>Close</button>
    </div>
  );
};
