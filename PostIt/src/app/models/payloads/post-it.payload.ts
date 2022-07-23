import { PostItColorEnum } from '../enum/post-it-color.enum';

export interface PostItPayload {
  title: string;
  annotation: string;
  color: PostItColorEnum;
  id?: number;
}
