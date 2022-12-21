type mainTagIdentifier = 'developer' | 'mac' | 'hardware' | 'trending';
type subTagIdentifier =
  | 'iTerm'
  | 'IDE'
  | 'Browser'
  | 'widget'
  | 'application'
  | 'system'
  | 'mouse'
  | 'keyboard'
  | 'monitor'
  | 'laptop'
  | 'headphone';

interface mainTag {
  identifier: mainTagIdentifier;
  present: string;
}

interface subTag {
  identifier: subTagIdentifier;
  present: string;
}

interface sidebar {
  'main-tag': mainTag;
  'sub-tags'?: subTag[];
}

export const sidebar: sidebar[] = [
  {
    'main-tag': { identifier: 'trending', present: '트렌딩🚀' },
  },
  {
    'main-tag': { identifier: 'developer', present: '개발👨‍💻' },
    'sub-tags': [
      { identifier: 'iTerm', present: 'iTerm' },
      { identifier: 'IDE', present: 'IDE' },
      { identifier: 'Browser', present: '브라우저' },
    ],
  },
  {
    'main-tag': { identifier: 'mac', present: '맥🍎' },
    'sub-tags': [
      { identifier: 'widget', present: '위젯' },
      { identifier: 'application', present: '어플' },
      { identifier: 'system', present: '환경설정' },
    ],
  },
  {
    'main-tag': { identifier: 'hardware', present: '하드웨어💻' },
    'sub-tags': [
      { identifier: 'mouse', present: '마우스' },
      { identifier: 'keyboard', present: '키보드' },
      { identifier: 'monitor', present: '모니터' },
      { identifier: 'laptop', present: '노트북' },
      { identifier: 'headphone', present: '헤드폰' },
    ],
  },
];
