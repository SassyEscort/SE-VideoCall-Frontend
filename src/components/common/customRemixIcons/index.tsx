/* eslint-disable arrow-body-style */
import { createElement } from 'react';
import { ComponentType, SVGProps } from 'react';

export type AllSVGProps = SVGProps<SVGSVGElement>;
export type ReservedProps = 'color' | 'size' | 'width' | 'height' | 'fill' | 'viewBox';
export interface RemixiconProps extends Pick<AllSVGProps, Exclude<keyof AllSVGProps, ReservedProps>> {
  color?: string;
  size?: number | string;
  children?: never;
}
export type RemixiconComponentType = ComponentType<RemixiconProps>;

export const RiUserLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
    })
  );
};

export const RiUserFillLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M7.55556 6.44444C7.55556 5.2657 8.02381 4.13524 8.8573 3.30175C9.6908 2.46825 10.8213 2 12 2C13.1787 2 14.3092 2.46825 15.1427 3.30175C15.9762 4.13524 16.4444 5.2657 16.4444 6.44444C16.4444 7.62318 15.9762 8.75365 15.1427 9.58714C14.3092 10.4206 13.1787 10.8889 12 10.8889C10.8213 10.8889 9.6908 10.4206 8.8573 9.58714C8.02381 8.75365 7.55556 7.62318 7.55556 6.44444ZM7.55556 13.1111C6.08213 13.1111 4.66905 13.6964 3.62718 14.7383C2.58532 15.7802 2 17.1932 2 18.6667C2 19.5507 2.35119 20.3986 2.97631 21.0237C3.60143 21.6488 4.44928 22 5.33333 22H18.6667C19.5507 22 20.3986 21.6488 21.0237 21.0237C21.6488 20.3986 22 19.5507 22 18.6667C22 17.1932 21.4147 15.7802 20.3728 14.7383C19.3309 13.6964 17.9179 13.1111 16.4444 13.1111H7.55556Z'
    })
  );
};

export const RiMailLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z'
    })
  );
};

export const RiEyeLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'
    })
  );
};

export const RiEyeOffLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z'
    })
  );
};

export const RiArrowRightLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'
    })
  );
};

export const RiArrowLeftLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z'
    })
  );
};

export const RiQuestionFill = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z'
    })
  );
};
export const RiDeleteBin5Line = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z'
    })
  );
};

export const RiFileCopyLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z'
    })
  );
};

export const RiCalendar2Line = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z'
    })
  );
};

export const RiUpload2Line = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z'
    })
  );
};

export const RiEditLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z'
    })
  );
};

export const RiInformationLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z'
    })
  );
};

export const RiZoomInLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748ZM10 10V7H12V10H15V12H12V15H10V12H7V10H10Z'
    })
  );
};

export const RiZoomOutFill = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM7 10V12H15V10H7Z'
    })
  );
};

export const RiArrowDownSLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z'
    })
  );
};

export const RiCloseFill = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z'
    })
  );
};

export const RiMoneyEuroCircleLine = ({ color: t = 'currentColor', size: e = 24, className: C, ...i }: RemixiconProps) => {
  return createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
      width: e,
      height: e,
      fill: t,
      ...i,
      className: 'remixicon ' + (C || '')
    },
    createElement('path', {
      d: 'M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM10.0549 11.0027H15.0049V13.0027H10.0549C10.2865 14.1439 11.2954 15.0027 12.5049 15.0027C13.1201 15.0027 13.6833 14.7806 14.1188 14.412L15.8198 15.546C14.9973 16.4415 13.8166 17.0027 12.5049 17.0027C10.1886 17.0027 8.28107 15.2527 8.03235 13.0027H7.00488V11.0027H8.03235C8.28107 8.75277 10.1886 7.00275 12.5049 7.00275C13.8166 7.00275 14.9973 7.56402 15.8198 8.45951L14.1189 9.59351C13.6834 9.22496 13.1201 9.00275 12.5049 9.00275C11.2954 9.00275 10.2865 9.86163 10.0549 11.0027Z'
    })
  );
};
