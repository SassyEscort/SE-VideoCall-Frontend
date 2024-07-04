import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getQueryParam } from 'utils/genericFunction';
import { HOME_PAGE_SIZE } from 'constants/common.constants';

export type SearchFiltersTypes = {
  fromAge: string;
  toAge: string;
  fromPrice: string;
  toPrice: string;
  language: string;
  isOnline: string;
  country: string;
  sortOrder: string;
  sortField: string;
  page: number;
  pageSize: number;
  offset: number;
};

const useSearchFilter = (handleFilterChange: (filters: SearchFiltersTypes) => void) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const getInitialFilters = () => ({
    fromAge: getQueryParam('fromAge') ? (getQueryParam('fromAge') as string) : '',
    toAge: getQueryParam('toAge') ? (getQueryParam('toAge') as string) : '',
    fromPrice: getQueryParam('fromPrice') ? (getQueryParam('fromPrice') as string) : '',
    toPrice: getQueryParam('toPrice') ? (getQueryParam('toPrice') as string) : '',
    language: getQueryParam('language') ? (getQueryParam('language') as string) : '',
    isOnline: getQueryParam('isOnline') ? (getQueryParam('isOnline') as string) : '',
    country: getQueryParam('country') ? (getQueryParam('country') as string) : '',
    sortOrder: getQueryParam('sortOrder') ? (getQueryParam('sortOrder') as string) : '',
    sortField: getQueryParam('sortField') ? (getQueryParam('sortField') as string) : '',
    page: Number(getQueryParam('page', 1)),
    pageSize: HOME_PAGE_SIZE,
    offset: 0
  });

  const [filters, setFilters] = useState(getInitialFilters());

  useEffect(() => {
    setFilters(getInitialFilters());
  }, [searchParams]);

  const handleChangeFilter = useCallback(() => {
    const objParams: { [key: string]: string } = {};
    if (filters.fromAge) objParams.fromAge = filters.fromAge.toString();
    if (filters.toAge) objParams.toAge = filters.toAge.toString();
    if (filters.page && filters.page > 1) objParams.page = filters.page.toString();
    if (filters.fromPrice) objParams.fromPrice = filters.fromPrice.toString();
    if (filters.toPrice) objParams.toPrice = filters.toPrice.toString();
    if (filters.language) objParams.language = filters.language.toString();
    if (filters.isOnline) objParams.isOnline = filters.isOnline.toString();
    if (filters.country) objParams.country = filters.country.toString();
    if (filters.sortOrder) objParams.sortOrder = filters.sortOrder.toString();
    if (filters.sortField) objParams.sortField = filters.sortField.toString();

    const queryString = new URLSearchParams(objParams).toString();

    if (pathname === '/' && !Object.keys(objParams).length) router.push('/search');
    if (pathname === '/' && Object.keys(objParams).length === 1 && objParams.page) return;

    const isDetailsPage = pathname.startsWith('/details/');
    const isMultiple = ['language', 'isOnline', 'page', 'fromPrice', 'fromAge', 'toPrice', 'country', 'sortOrder', 'sortField'].filter(
      (x) => Object.keys(objParams).includes(x)
    );

    if (!Object.keys(objParams).length) {
      if (isDetailsPage) {
        router.push(pathname);
      } else {
        router.push('/');
      }
    } else {
      if (isMultiple.length) {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/?${queryString}`);
        }
      } else {
        if (isDetailsPage) {
          router.push(`${pathname}?${queryString}`);
        } else {
          router.push(`/${pathname}?${queryString}`);
        }
      }
    }

    handleFilterChange(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return {
    filters,
    setFilters,
    handleChangeFilter
  };
};

export default useSearchFilter;
