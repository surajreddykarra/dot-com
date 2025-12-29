export type VisitStatus = 'home' | 'visited' | 'transit';

export interface CountryData {
  id: string; // ISO 3166-1 alpha-3 code (e.g., USA, IND)
  status: VisitStatus;
}

// You can add your countries here
export const visitedCountries: CountryData[] = [
  { id: 'IND', status: 'home' },
  { id: 'VNM', status: 'visited' }, // Vietnam
  { id: 'JPN', status: 'visited' }, // Japan
  { id: 'USA', status: 'visited' }, // USA
  { id: 'MYS', status: 'transit' }, // Malaysia
  { id: 'GBR', status: 'transit' }, // United Kingdom (London)
];

export const getCountryColor = (status?: VisitStatus) => {
  switch (status) {
    case 'home':
      return '#3b82f6'; // Blue-500
    case 'visited':
      return '#10b981'; // Emerald-500
    case 'transit':
      return '#f59e0b'; // Amber-500
    default:
      return '#e5e7eb'; // Gray-200
  }
};

export const getStatusLabel = (status: VisitStatus) => {
  switch (status) {
    case 'home':
      return 'Home Country';
    case 'visited':
      return 'Visited';
    case 'transit':
      return 'Transit Only';
    default:
      return '';
  }
};
