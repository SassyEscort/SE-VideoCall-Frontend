import { ReactNode } from 'react';

export interface navRoleConfigIdType {
  id: number;
  title: string;
  path: string;
  icon: Element;
}

export interface navRoleConfigSubmenuIdType {
  id: number;
  title: string;
  path: string;
  icon: Element;
  submenu?: {
    id: number;
    title: string;
    path: string;
    icon: Element;
  }[];
}

export interface navRoleConfigSubmenuInfoType {
  title: string;
  type: string;
  value: number;
  info: string;
  path: string;
  icon: ReactNode;
  submenu: {
    title: string;
    type: string;
    value: number;
  }[];
}
