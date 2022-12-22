import { subTagIdentifier } from './tag';

export interface FrontMatter {
  title: string;
  description: string;
  thumbnail: string;
  subTag: subTagIdentifier;
  createAt: Date;
  author: string;
}
