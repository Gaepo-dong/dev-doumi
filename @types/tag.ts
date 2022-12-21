export type mainTagIdentifier = 'developer' | 'mac' | 'hardware';

export type subTagIdentifier =
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

export interface mainTag {
  identifier: mainTagIdentifier;
  present: string;
}

export interface subTag {
  identifier: subTagIdentifier;
  present: string;
}
