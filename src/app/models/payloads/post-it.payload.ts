import { PostItColorEnum } from '../enums/post-it-color.enum';

export interface PostItPayload {
  id?: number;
  title: string;
  annotation: string;
  color: PostItColorEnum;
  isPublic: boolean;
}
