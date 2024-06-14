export type SubMenuType = {
  name: string;
  path: string;
};

export type HeaderTabsType = {
  name: string;
  path: string;
  isSubMenu: boolean;
  subMenu: SubMenuType[];
};

export type TopNavItemVariantProps =
  | { variant: 'closeButton'; handleClickClose: () => void }
  | { variant: 'guest' }
  | { variant: 'worker' }
  | { variant: 'dashboard' };
  
