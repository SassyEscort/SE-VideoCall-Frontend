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

export const PRICE = [
  { title: '0', id: 1 },
  { title: '100-200', id: 2 }
];

export const SEARCH_PRICES: MultipleOptions[] = [
  { id: '1-5', name: '$1-$5 / min' },
  { id: '5-10', name: '$5-$10 / min' },
  { id: '10-15', name: '$10-$15 / min' },
  { id: '15-20', name: '$15-$20 / min' },
  { id: '20-25', name: '$20-25 / min' }
];

export const FILTER_STATUS: MultipleOptions[] = [
  { id: '1', name: 'Online' },
  { id: '0', name: 'Offline' }
];
