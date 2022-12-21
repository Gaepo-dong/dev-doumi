export type mainTagIdentifier = 'developer' | 'mac' | 'hardware' | 'trending';

export type subTagIdentifier =
  | 'iTerm'
  | 'IDE'
  | 'browser'
  | 'widget'
  | 'application'
  | 'system'
  | 'mouse'
  | 'keyboard'
  | 'monitor'
  | 'laptop'
  | 'headphone';

export interface mainTag {
  identifier: mainTagIdentifier;
  present: string;
}

export interface subTag {
  identifier: subTagIdentifier;
  present: string;
}
