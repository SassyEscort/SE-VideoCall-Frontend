import { MultipleOptions } from './dateRange';

export const COUNTRIES = [
  { title: 'Amsterdam', id: 1 },
  { title: 'Almero', id: 2 }
];

export const AGES = [
  { title: '18-24', id: '18-24' },
  { title: '25-29', id: '25-29' },
  { title: '30-34', id: '30-34' },
  { title: '35-39', id: '35-39' },
  { title: '40-45', id: '40-45' }
];

export const STATUS = [
  { title: 'Approved', id: 'Approved' },
  { title: 'Pending', id: 'Pending' },
  { title: 'Rejected', id: 'Rejected' }
];

export const PRICE = [
  { title: '0', id: 1 },
  { title: '100-200', id: 2 }
];

export const SEARCH_PRICES: MultipleOptions[] = [
  { id: '0-20', name: '0-20/min' },
  { id: '20-30', name: '20-30/min' },
  { id: '30-40', name: '30-40/min' },
  { id: '40-100', name: '40-100/min' }
];

export const FILTER_STATUS: MultipleOptions[] = [
  { id: '1', name: 'Online' },
  { id: '0', name: 'Offline' }
];
