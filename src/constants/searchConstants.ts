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
  { id: '0-20', name: 'CreditsMin020' },
  { id: '20-30', name: 'CreditsMin2030' },
  { id: '30-40', name: 'CreditsMin3040' },
  { id: '40-100', name: 'CreditsMin40100' }
];

export const FILTER_STATUS: MultipleOptions[] = [
  { id: '1', name: 'Online' },
  { id: '0', name: 'Offline' }
];

export const RATING = [
  { title: '5 stars', id: '5', label: 'five_star_percentage' },
  { title: '4 stars', id: '4', label: 'four_star_percentage' },
  { title: '3 stars', id: '3', label: 'three_star_percentage' },
  { title: '2 stars', id: '2', label: 'two_star_percentage' },
  { title: '1 stars', id: '1', label: 'one_star_percentage' }
];
