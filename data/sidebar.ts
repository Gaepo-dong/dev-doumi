import { mainTagIdentifier, subTagIdentifier } from '@/@types';

interface sidebar {
  'main-tag': mainTagIdentifier;
  'sub-tags'?: subTagIdentifier[];
}

export const sidebar: sidebar[] = [
  {
    'main-tag': 'trending',
  },
  {
    'main-tag': 'developer',
    'sub-tags': ['iTerm', 'IDE', 'browser'],
  },
  {
    'main-tag': 'mac',
    'sub-tags': ['widget', 'application', 'system'],
  },
  {
    'main-tag': 'hardware',
    'sub-tags': ['mouse', 'monitor', 'keyboard', 'laptop', 'headphone'],
  },
];
